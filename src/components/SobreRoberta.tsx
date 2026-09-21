import { useState } from "react";
import { whatsappLink, INSTAGRAM_URL } from "../data/site";
import { Award, GraduationCap, CheckCircle2, Sparkles } from "lucide-react";
import { useTexts } from "../context/TextContext";

export default function SobreRoberta() {
  const [activeTab, setActiveTab] = useState<"historia" | "formacao">("historia");
  const [imageSrc, setImageSrc] = useState("roberta_elite.png");
  const [isFallback, setIsFallback] = useState(false);
  const { t } = useTexts();

  const handleImageError = () => {
    if (!isFallback) {
      setImageSrc("roberta.png");
      setIsFallback(true);
    }
  };

  return (
    <section id="sobre" className="w-full bg-[#FBF7F3] py-20 overflow-hidden relative border-t border-roxo/5">
      {/* Elementos sutis de fundo orgânico para sofisticação editorial */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-roxo/5 opacity-40 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-coral/5 opacity-30 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid gap-12 md:grid-cols-[42%_58%] md:items-center">
          
          {/* Lado Esquerdo: Fotografia sem caixa de card e perfeitamente integrada */}
          <div className="relative flex flex-col items-center justify-end md:items-start">
            {/* Brilho de fundo suave e orgânico para dar profundidade à foto transparente */}
            <div 
              aria-hidden="true"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-gradient-to-tr from-coral/10 to-roxo/5 opacity-80 blur-2xl -z-10"
            />
            
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] md:max-w-full">
              <img
                src={imageSrc}
                alt="Dra. Roberta Quinn"
                onError={handleImageError}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain z-10 select-none pointer-events-none transition-transform duration-700 hover:scale-[1.02]"
                style={
                  isFallback
                    ? {
                        objectPosition: "82% 20%",
                        transform: "scale(1.4)",
                        transformOrigin: "82% 20%",
                        borderRadius: "24px",
                        boxShadow: "0 10px 30px -10px rgba(74, 21, 75, 0.1)",
                      }
                    : {
                        objectPosition: "bottom center",
                      }
                }
              />
            </div>
          </div>

          {/* Lado Direito: Hierarquia de Conteúdo Refinada */}
          <div className="flex flex-col justify-center">
            
            {/* Selo Introdução Discreto */}
            <div className="mb-4 self-start">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-roxo/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-roxo">
                <Award className="h-3.5 w-3.5 text-coral" />
                {t("about_eyebrow", "Trajetória & Autoridade de Elite")}
              </span>
            </div>

            {/* Nome - Alta Presença */}
            <h2 className="font-display text-4xl font-bold leading-tight text-roxo sm:text-5xl">
              {t("about_name", "Dra. Roberta Quinn")}
            </h2>

            {/* Especialidade / Autoridade Profissional */}
            <p className="mt-3 text-xs font-bold text-coral uppercase tracking-widest leading-relaxed">
              {t("about_role", "FISIOTERAPEUTA (CREFITO-3) • GYROTONIC® SPECIALIZED MASTER TRAINER")}
            </p>

            {/* Abas de Navegação Premium */}
            <div className="mt-8 flex border-b border-roxo/10">
              <button
                onClick={() => setActiveTab("historia")}
                className={`pb-3 text-sm font-bold transition-all duration-300 border-b-2 mr-8 whitespace-nowrap ${
                  activeTab === "historia"
                    ? "border-coral text-roxo"
                    : "border-transparent text-ink/50 hover:text-roxo"
                }`}
              >
                {t("about_tab_story", "Minha Trajetória")}
              </button>
              <button
                onClick={() => setActiveTab("formacao")}
                className={`pb-3 text-sm font-bold transition-all duration-300 border-b-2 whitespace-nowrap ${
                  activeTab === "formacao"
                    ? "border-coral text-roxo"
                    : "border-transparent text-ink/50 hover:text-roxo"
                }`}
              >
                {t("about_tab_certs", "Especializações & Cursos")}
              </button>
            </div>

            {/* Conteúdo das Abas com espaçamento generoso */}
            <div className="mt-6 min-h-[220px]">
              {activeTab === "historia" && (
                <div className="space-y-5 text-sm sm:text-base leading-relaxed text-ink/75 animate-in fade-in duration-300">
                  <p>
                    {t(
                      "about_story_p1",
                      "Com uma sólida bagagem internacional, minha missão é unir a precisão da fisioterapia clínica à inteligência tridimensional do movimento. Atendo no Itaim Bibi, em São Paulo, ajudando pacientes a superarem dores crônicas, recuperarem a mobilidade e retornarem com segurança ao esporte e à vida ativa."
                    )}
                  </p>
                  <p>
                    {t(
                      "about_story_p2",
                      "Tive o privilégio de atuar no renomado Hospital de Reabilitação Clínica Rheintal-Klinik, na Alemanha, onde colaborei ativamente na reabilitação clínica ortopédica e neurológica e supervisionei horas de formação de Master Trainer no Método GYROTONIC®."
                    )}
                  </p>
                  <p>
                    {t(
                      "about_story_p3",
                      "No Brasil, desenvolvi minha prática em áreas críticas e complexas, atuando na reabilitação ortopédica e neurológica da Clínica FMU e no cuidado intensivo de pacientes na UTI respiratória do Hospital Sepaco. Essa fusão entre hospitalar de ponta e reabilitação pelo movimento me permite criar tratamentos milimetricamente personalizados para o seu caso."
                    )}
                  </p>
                </div>
              )}

              {activeTab === "formacao" && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  {/* Categoria 1: Gyrotonic */}
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-xs font-bold text-roxo uppercase tracking-wider">
                      <Award className="h-4 w-4 text-coral" />
                      {t("about_certs_cat1_title", "Credenciais Internacionais GYROTONIC® & GYROKINESIS®")}
                    </h3>
                    <ul className="mt-3 grid gap-2.5 text-xs sm:text-sm text-ink/80 sm:grid-cols-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span><strong>Specialized Master Trainer</strong> em GYROTONIC®</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span><strong>Jumping Stretching Board</strong> Master Trainer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span><strong>Gyrokinesis®</strong> Pre-Trainer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>Especialização em <strong>Escoliose</strong> (Scoliosis)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>Aplicações para <strong>Pelve e Ombro</strong> (Pelvic & Shoulder Girdle)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>Especializações: <strong>Applications for Dancers</strong> & <strong>Leg Extension Unit</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>Cursos Avançados: <strong>Lotus Blossom Program 2</strong> & <strong>Breathing Course Intensive</strong></span>
                      </li>
                    </ul>
                  </div>

                  {/* Categoria 2: Fisioterapia */}
                  <div className="border-t border-roxo/10 pt-5">
                    <h3 className="flex items-center gap-2 font-display text-xs font-bold text-roxo uppercase tracking-wider">
                      <GraduationCap className="h-4 w-4 text-coral" />
                      {t("about_certs_cat2_title", "Formação Clínica Acadêmica")}
                    </h3>
                    <ul className="mt-3 grid gap-2.5 text-xs sm:text-sm text-ink/80 sm:grid-cols-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>Bacharel em <strong>Fisioterapia</strong> (FMU SP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>Supervisão em Reabilitação no <strong>Hospital Rheintal-Klinik (Alemanha)</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>Fisioterapia Respiratória em UTI no <strong>Hospital Sepaco</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                        <span>Instrutora de <strong>Yoga Terapêutico</strong> (Escoliose, Pré/Pós-Natal)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Botões de Ação Elegantes e Premium */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink("Olá! Quero saber mais sobre o atendimento com a Roberta.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-sm font-bold text-cream transition-all hover:scale-[1.03] hover:brightness-105 shadow-md shadow-coral/15"
              >
                {t("about_cta", "Conversar no WhatsApp")}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-roxo/20 px-8 py-4 text-sm font-bold text-roxo transition-colors hover:bg-roxo/5"
              >
                {t("about_instagram_btn", "Ver no Instagram")}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
