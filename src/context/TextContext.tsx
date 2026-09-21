import React, { createContext, useContext, useState, useEffect } from "react";

// Tipo para o dicionário de textos (chave -> valor do texto)
type TextDictionary = Record<string, string>;

interface TextContextType {
  texts: TextDictionary;
  loading: boolean;
  t: (id: string, fallback: string) => string;
}

const TextContext = createContext<TextContextType | undefined>(undefined);

// Parser de CSV compatível com RFC 4180 de forma nativa e sem dependências externas
function parseCSV(csvText: string): Array<Record<string, string>> {
  const result: any[][] = [];
  let row: string[] = [];
  let inQuotes = false;
  let currentVal = "";

  let i = 0;
  while (i < csvText.length) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentVal += '"';
        i += 2;
        continue;
      }
      inQuotes = !inQuotes;
      i++;
    } else if (char === "," && !inQuotes) {
      row.push(currentVal.trim());
      currentVal = "";
      i++;
    } else if ((char === "\r" || char === "\n") && !inQuotes) {
      row.push(currentVal.trim());
      currentVal = "";
      if (row.length > 0 && row.some((cell) => cell !== "")) {
        result.push(row);
      }
      row = [];
      if (char === "\r" && nextChar === "\n") {
        i += 2;
      } else {
        i++;
      }
    } else {
      currentVal += char;
      i++;
    }
  }
  if (currentVal || row.length > 0) {
    row.push(currentVal.trim());
    if (row.some((cell) => cell !== "")) {
      result.push(row);
    }
  }

  if (result.length === 0) return [];

  // O cabeçalho deve conter colunas como "id" e "texto" (ou "text")
  const headers = result[0].map((h) => h.toLowerCase().trim());
  const formatted: Array<Record<string, string>> = [];

  for (let r = 1; r < result.length; r++) {
    const rowData = result[r];
    const obj: Record<string, string> = {};
    headers.forEach((header, index) => {
      obj[header] = rowData[index] || "";
    });
    formatted.push(obj);
  }

  return formatted;
}

export const TextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [texts, setTexts] = useState<TextDictionary>({});
  const [loading, setLoading] = useState<boolean>(true);

  // ID padrão da planilha Google Sheets. O usuário pode alterar em .env ou em site.ts
  const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID || "1_c63ygYQKtvqAQwvNrLoCfNck3_keEUTKLzrYm7IwUs"; // ID Provisório de exemplo

  useEffect(() => {
    if (!sheetId || sheetId === "YOUR_SHEET_ID_HERE") {
      setLoading(false);
      return;
    }

    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&_t=${Date.now()}`;

    const fetchTexts = async () => {
      try {
        const response = await fetch(csvUrl, { cache: "no-store" });
        if (!response.ok) throw new Error("Erro ao carregar dados da planilha");
        const csvText = await response.text();

        // Se o Google Sheets retornar HTML, significa que o link está privado e exige login
        if (csvText.includes("<html") || csvText.includes("<!DOCTYPE") || csvText.includes("google-sans")) {
          throw new Error(
            "A planilha está PRIVADA ou exige LOGIN do Google. Por favor, acesse a planilha, clique em 'Compartilhar' e mude o acesso geral para 'Qualquer pessoa com o link' (como Leitor), ou verifique se ela foi de fato publicada em Arquivo > Compartilhar > Publicar na Web como CSV."
          );
        }

        const rows = parseCSV(csvText);

        const dictionary: TextDictionary = {};
        rows.forEach((row) => {
          // Aceita 'id' ou 'chave', e 'texto' ou 'text'
          const id = row.id || row.chave || row.key;
          const texto = row.texto || row.text || row.value;

          if (id && texto !== undefined) {
            // Substitui quebras de linha literais "\n" por quebras de linha reais
            dictionary[id.trim()] = texto.replace(/\\n/g, "\n");
          }
        });

        setTexts(dictionary);
      } catch (error) {
        console.warn("Aviso: Não foi possível carregar os textos do Google Sheets. Usando fallbacks locais.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTexts();
  }, [sheetId]);

  // Função tradutora: retorna o texto da planilha ou o padrão hardcoded se não existir
  const t = (id: string, fallback: string): string => {
    return texts[id] !== undefined ? texts[id] : fallback;
  };

  return (
    <TextContext.Provider value={{ texts, loading, t }}>
      {children}
    </TextContext.Provider>
  );
};

export const useTexts = () => {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error("useTexts deve ser usado dentro de um TextProvider");
  }
  return context;
};
