import { GOOGLE_MAPS_URL, whatsappLink } from "../data/site";

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-roxo py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">
          Onde atendo
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl sm:text-3xl">
          Consultório no Itaim Bibi ou atendimento online — o formato
          depende do seu objetivo
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cream/15 bg-cream/5 p-8">
            <h3 className="font-display text-lg">Presencial — Itaim Bibi</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              Atendimento no consultório, para quem está em São Paulo e
              região. Indicado quando o caso pede avaliação prática do
              movimento e uso de equipamento GYROTONIC®.
            </p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm font-bold text-coral hover:underline"
            >
              Ver endereço no Google Maps →
            </a>
          </div>

          <div className="rounded-2xl border border-cream/15 bg-cream/5 p-8">
            <h3 className="font-display text-lg">Online</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              Sessões remotas para quem está fora da região ou prefere o
              formato online. Indicado para acompanhamento de postura,
              rotina e mobilidade, conforme avaliação inicial.
            </p>
            <a
              href={whatsappLink("Olá! Quero entender como funciona o atendimento online.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-sm font-bold text-coral hover:underline"
            >
              Entender como funciona →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
