# Roberta Quinn — LP (React + Tailwind + Vite)

## Rodando localmente / no AI Studio

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # gera a pasta dist/ para deploy
```

## Onde mexer primeiro

- `src/data/site.ts` — WhatsApp, link do Google Maps e Instagram. Já preenchido com o número (11) 98347-9398, o link do Maps e o Instagram @dr.robertaquinn que você passou.
- `src/data/services.ts` — **fonte única dos serviços**. Essa mesma lista (nome + descrição) é o que deve ser cadastrado no Perfil da Empresa no Google, seção "Serviços". Se você adicionar, remover ou reescrever um serviço aqui, replique manualmente no Google Perfil da Empresa (o Google não tem API pública de escrita simples para isso, então a sincronia é manual — mas com uma única fonte de texto, fica fácil copiar e colar sem perder consistência).
- Fotos reais: os blocos de "Sobre" e do Hero estão com placeholders em gradiente roxo/coral (nenhuma foto de estoque genérica foi usada, conforme a análise recomenda evitar imagens que criem expectativa incorreta). Troque pelos assets reais da clínica/Instagram quando tiver.

## Fonte do logo (Arual)

A identidade visual usa **Arual** como fonte de título/logo, mas é uma fonte não distribuída no Google Fonts. Por enquanto o projeto usa **Unbounded** (geométrica, humor parecido) como substituta em `tailwind.config.js` (`font-display`). Se você tiver o arquivo `.woff2`/`.otf` da Arual:

1. Coloque o arquivo em `public/fonts/`.
2. Adicione um `@font-face` em `src/index.css` apontando pra ele.
3. Troque `Unbounded` por `Arual` em `tailwind.config.js`.

Lato (texto corrido) já está carregada via Google Fonts em `index.html`, como no manual de marca.

## Cores

`tailwind.config.js` tem `coral` (~Pantone 170C) e `roxo` (~Pantone 261C) aproximados visualmente a partir do manual de identidade. Vale conferir contra o Pantone Bridge oficial se a Roberta tiver o valor exato — troquei por aproximação visual, não por conversão certificada.

## Deploy (GitHub + Cloudflare, mesmo padrão do site da Karen)

```bash
git init
git add .
git commit -m "LP Roberta Quinn"
git remote add origin <seu-repo-no-github>
git push -u origin main
```

Depois é só apontar o Cloudflare Pages (ou a hospedagem que preferir) para a branch `main`, build command `npm run build`, output `dist`.

## Estrutura das seções

Hero → Serviços (sincronizado com o Google) → Método/Diferenciais → Sobre Roberta → Onde atendo (Itaim Bibi / Online) → Dúvidas frequentes → CTA final → Rodapé.

Todos os CTAs de WhatsApp já vêm com mensagem pré-preenchida específica do contexto (ex: qual serviço a pessoa clicou), o que ajuda a qualificar o lead antes mesmo da primeira resposta.
