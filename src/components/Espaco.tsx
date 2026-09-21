import { Play, Sparkles, PhoneCall } from "lucide-react";
import { whatsappLink } from "../data/site";
import { useTexts } from "../context/TextContext";

export default function Espaco() {
  const { t } = useTexts();
  const videoEmbedUrl = "https://drive.google.com/file/d/18blY9g5HaRIWyChFTmfViMqcQnIJYgF1/preview";

  return (
    <section id="espaco" className="relative overflow-hidden bg-white py-20 text-ink">
      {/* Elementos decorativos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cream opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-12 h-96 w-96 rounded-full bg-roxo/5 opacity-40 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          
          {/* Coluna de Texto */}
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-coral">
              <Sparkles className="h-3 w-3" />
              {t("espaco_eyebrow", "Tour Virtual")}
            </span>
            
            <h2 className="mt-4 font-display text-3xl leading-tight text-roxo sm:text-4xl">
              {t("espaco_title", "Conheça o nosso Espaço")}
            </h2>
            
            <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
              {t(
                "espaco_desc_1",
                "Um ambiente acolhedor, projetado exclusivamente para o seu bem-estar, reabilitação e desenvolvimento corporal. Localizado no coração do Itaim Bibi, em São Paulo, o nosso espaço oferece infraestrutura completa com equipamentos de última geração do Método GYROTONIC® e todos os recursos necessários para sessões integradas de Fisioterapia e Canolu."
              )}
            </p>
            
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              {t(
                "espaco_desc_2",
                "Aqui, cada atendimento é individualizado e focado nas suas necessidades específicas. Unimos a precisão da biomecânica clínica com a fluidez do movimento inteligente para ajudar você a conquistar um corpo livre de dores, com mais flexibilidade e consciência postural."
              )}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink("Olá! Assisti ao vídeo do espaço e quero agendar uma sessão.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-sm font-bold text-cream shadow-lg shadow-coral/20 transition-transform hover:scale-105"
              >
                <PhoneCall className="h-4 w-4" />
                {t("espaco_cta_whatsapp", "Agendar sessão e visita")}
              </a>
              <a
                href="#localizacao"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-roxo/10 bg-roxo/[0.02] px-8 py-4 text-sm font-bold text-roxo transition-colors hover:bg-roxo/5"
              >
                {t("espaco_cta_maps", "Ver localização no Itaim Bibi")}
              </a>
            </div>
          </div>


          {/* Coluna do Vídeo (Mockup de Smartphone Vertical) */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              {/* Sombra de destaque externa */}
              <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-coral/10 to-roxo/10 opacity-70 blur-xl" />
              
              {/* Corpo do Smartphone */}
              <div className="relative mx-auto w-[290px] h-[580px] sm:w-[310px] sm:h-[620px] rounded-[44px] border-[10px] border-roxo bg-roxo shadow-2xl transition-transform hover:scale-[1.01]">
                
                {/* Linhas de antena / brilho metálico sutil */}
                <div className="absolute -left-[10px] top-20 h-10 w-[2px] bg-roxo-light/30 rounded-r" />
                <div className="absolute -right-[10px] top-32 h-10 w-[2px] bg-roxo-light/30 rounded-l" />

                {/* Botões Laterais Simulados */}
                <div className="absolute -left-[13px] top-28 h-12 w-[3px] bg-roxo rounded-l" />
                <div className="absolute -left-[13px] top-44 h-12 w-[3px] bg-roxo rounded-l" />
                <div className="absolute -right-[13px] top-32 h-16 w-[3px] bg-roxo rounded-r" />

                {/* Dynamic Island / Câmera superior */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800" />
                  <div className="w-4 h-1 rounded-full bg-neutral-800" />
                </div>

                {/* Tela do Smartphone */}
                <div className="w-full h-full overflow-hidden rounded-[34px] bg-black relative">
                  <iframe
                    src={videoEmbedUrl}
                    className="w-full h-full absolute inset-0 border-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Apresentação da Clínica Roberta Quinn"
                  />
                  
                  {/* Overlay sutil para reforçar o formato vertical e evitar cliques indesejados nas bordas */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-white uppercase">
                      2:39 min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
