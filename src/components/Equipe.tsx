import { useState } from "react";
import { Award, GraduationCap, CheckCircle2, Users } from "lucide-react";
import { useTexts } from "../context/TextContext";

interface Professional {
  id: string;
  nome: string;
  role: string;
  crefito: string;
  imagemDefault: string;
  imagemSecundaria?: string;
  iniciais: string;
  graduacao: string;
  universidade: string;
  conclusao: string;
  especialidades: string[];
}

export default function Equipe() {
  const { t } = useTexts();

  const profissionais: Professional[] = [
    {
      id: "alessandra",
      nome: t("team_prof1_name", "Alessandra de João"),
      role: t("team_prof1_role", "Fisioterapeuta"),
      crefito: t("team_prof1_crefito", "CREFITO 33314"),
      imagemDefault: "alessandra.png",
      imagemSecundaria: "alessandra.jpg",
      iniciais: "AJ",
      graduacao: t("team_prof1_grad", "Bacharel em Fisioterapia"),
      universidade: t("team_prof1_uni", "Universidade do ABC (UniABC)"),
      conclusao: t("team_prof1_year", "Conclusão: 1999"),
      especialidades: [
        t("team_prof1_spec1", "Método Gyrotonic"),
        t("team_prof1_spec2", "Pilates Clínico"),
        t("team_prof1_spec3", "Liberação Miofascial"),
        t("team_prof1_spec4", "Reeducação Postural Global (RPG)")
      ]
    },
    {
      id: "kamila",
      nome: t("team_prof2_name", "Kamila Ambrozio"),
      role: t("team_prof2_role", "Fisioterapeuta"),
      crefito: t("team_prof2_crefito", "CREFITO 387058-F"),
      imagemDefault: "kamila.jpg",
      imagemSecundaria: "kamila.png",
      iniciais: "KA",
      graduacao: t("team_prof2_grad", "Bacharelado em Fisioterapia"),
      universidade: t("team_prof2_uni", "Centro Universitário UNINASSAU (Cacoal, RO)"),
      conclusao: t("team_prof2_year", "Conclusão: 2023"),
      especialidades: [
        t("team_prof2_spec1", "Fisioterapia Traumato-Ortopédica"),
        t("team_prof2_spec2", "Fisioterapia Neurológica"),
        t("team_prof2_spec3", "Fisioterapia Respiratória & Terapia Intensiva"),
        t("team_prof2_spec4", "Método GYROTONIC®"),
        t("team_prof2_spec5", "Pilates Clínico"),
        t("team_prof2_spec6", "Reeducação Postural Global (RPG)")
      ]
    }
  ];

  return (
    <section id="equipe" className="w-full bg-[#FAF7F3] py-24 relative overflow-hidden border-t border-roxo/5">
      {/* Detalhes de iluminação sutis para manter o design premium */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-coral/5 opacity-40 blur-3xl"
      />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-roxo/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-roxo mb-4">
            <Users className="h-3.5 w-3.5 text-coral" />
            {t("team_eyebrow", "Fisioterapeutas Parceiras")}
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight text-roxo sm:text-4xl">
            {t("team_title", "Equipe de Especialistas Aliadas")}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink/70 leading-relaxed max-w-2xl mx-auto">
            {t("team_subtitle", "Profissionais de alta performance que atuam em conjunto com a Dra. Roberta Quinn, compartilhando o compromisso de oferecer tratamentos altamente personalizados e precisos.")}
          </p>
        </div>

        {/* Grade de Profissionais */}
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {profissionais.map((prof) => (
            <CardProfissional key={prof.id} prof={prof} t={t} />
          ))}
        </div>

      </div>
    </section>
  );
}

function CardProfissional({ prof, t }: { prof: Professional; t: any }) {
  const [imgSrc, setImgSrc] = useState<string>(prof.imagemDefault);
  const [imgErrorCount, setImgErrorCount] = useState<number>(0);
  const [useTypographicFallback, setUseTypographicFallback] = useState<boolean>(false);

  const handleImgError = () => {
    if (imgErrorCount === 0 && prof.imagemSecundaria) {
      setImgSrc(prof.imagemSecundaria);
      setImgErrorCount(1);
    } else {
      setUseTypographicFallback(true);
    }
  };

  return (
    <div className="group flex flex-col sm:flex-row gap-8 items-start">
      
      {/* Moldura da Foto */}
      <div className="w-full sm:w-[200px] aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAF8F5] to-coral/15 border border-roxo/10 shadow-md flex-shrink-0 flex items-center justify-center relative">
        
        {useTypographicFallback ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-roxo/5 flex items-center justify-center border border-roxo/10 mb-3 group-hover:scale-105 transition-transform duration-500">
              <span className="font-display text-xl font-bold text-roxo">{prof.iniciais}</span>
            </div>
            <span className="text-[10px] text-ink/40 font-bold uppercase tracking-wider">{prof.role}</span>
          </div>
        ) : (
          <img
            src={imgSrc}
            alt={prof.nome}
            onError={handleImgError}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
          />
        )}
      </div>

      {/* Mini Currículo */}
      <div className="flex-1 flex flex-col">
        
        {/* Nome & CREFITO */}
        <h3 className="font-display text-2xl font-bold text-roxo leading-tight">
          {prof.nome}
        </h3>
        <p className="text-xs font-semibold text-coral uppercase tracking-wider mt-1">
          {prof.role} • {prof.crefito}
        </p>

        {/* Formação Acadêmica */}
        <div className="mt-5">
          <h4 className="flex items-center gap-1.5 text-xs font-bold text-roxo/90 uppercase tracking-wider mb-2.5">
            <GraduationCap className="h-4 w-4 text-coral flex-shrink-0" />
            {t("team_label_academic", "Formação Acadêmica")}
          </h4>
          <div className="text-xs sm:text-sm text-ink/75 leading-relaxed bg-[#FAF8F5]/60 border border-roxo/5 rounded-2xl p-3">
            <p className="font-semibold text-roxo/85">{prof.graduacao}</p>
            <p className="text-xs text-ink/65">{prof.universidade}</p>
            <p className="text-[11px] font-bold text-coral/85 mt-0.5">{prof.conclusao}</p>
          </div>
        </div>

        {/* Especializações */}
        <div className="mt-5">
          <h4 className="flex items-center gap-1.5 text-xs font-bold text-roxo/90 uppercase tracking-wider mb-2.5">
            <Award className="h-4 w-4 text-coral flex-shrink-0" />
            {t("team_label_specialties", "Especializações & Atuação")}
          </h4>
          <ul className="grid gap-2 text-xs text-ink/80">
            {prof.especialidades.map((spec, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-coral mt-0.5 flex-shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}
