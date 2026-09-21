import { whatsappLink } from "../data/site";
import { useTexts } from "../context/TextContext";

export default function Contato() {
  const { t } = useTexts();

  return (
    <section className="bg-coral py-20 text-cream">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl">
          {t("contact_title", "O primeiro passo é uma avaliação, não um compromisso")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/90">
          {t(
            "contact_subtitle",
            "Conte o que você está sentindo e qual é o seu objetivo. Respondemos pelo WhatsApp para combinar o melhor formato e horário."
          )}
        </p>
        <a
          href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-roxo px-8 py-4 text-sm font-bold text-cream shadow-lg transition-transform hover:scale-105"
        >
          {t("contact_cta", "Agendar avaliação no WhatsApp")}
        </a>
      </div>
    </section>
  );
}
