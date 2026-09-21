import { useTexts } from "../context/TextContext";
import { whatsappLink, GOOGLE_MAPS_URL } from "../data/site";
import { Sparkles, MessageSquare, MapPin } from "lucide-react";

export default function Hero() {
  const { t } = useTexts();

  return (
    <section id="topo" className="relative overflow-hidden bg-cream py-20 text-ink">
      {/* Elementos decorativos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-coral/5 opacity-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-12 h-96 w-96 rounded-full bg-roxo/5 opacity-40 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          
          {/* Coluna de Texto */}
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-coral">
              <Sparkles className="h-3 w-3" />
              {t("hero_tagline", "Fisioterapia · Gyrotonic® · Canolu")}
            </span>

            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-roxo sm:text-5xl lg:text-6xl">
              {t(
                "hero_title",
                "Movimento com mais segurança, postura sem sofrimento e retorno real às suas atividades."
              )}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-ink/80 sm:text-lg">
              {t(
                "hero_subtitle",
                "Atendimento individualizado para dor, postura, mobilidade e retorno à atividade — com consultório no Itaim Bibi, São Paulo, e opção de atendimento online, conforme a avaliação de cada pessoa."
              )}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <a
                href={whatsappLink("Olá! Vim pelo site e gostaria de agendar uma avaliação.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-4 text-sm font-bold text-cream shadow-lg shadow-coral/20 transition-transform hover:scale-105"
              >
                <MessageSquare className="h-4 w-4" />
                {t("hero_cta", "Agendar avaliação no WhatsApp")}
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-roxo/10 bg-roxo/[0.02] px-8 py-4 text-sm font-bold text-roxo transition-colors hover:bg-roxo/5"
              >
                {t("hero_maps_btn", "Ver no Google Maps")}
              </a>
            </div>

            {/* Tagline do Rodapé do Hero */}
            <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-roxo/60">
              <MapPin className="h-4 w-4 text-coral" />
              <span>{t("hero_footer_tagline", "Itaim Bibi · São Paulo — presencial e online")}</span>
            </div>
          </div>

          {/* Coluna da Foto da Roberta */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Sombra sutil de destaque */}
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-coral/5 to-roxo/5 opacity-50 blur-xl" />
              
              <div className="aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-[32px] bg-neutral-100 shadow-lg border border-roxo/10">
                <img
                  src="roberta.png"
                  alt="Dra. Roberta Quinn na maca / aparelho"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.1]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
