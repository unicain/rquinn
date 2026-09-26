import { useState } from "react";
import { Sparkles, ArrowRight, Activity } from "lucide-react";
import { useTexts } from "../context/TextContext";
import { whatsappLink } from "../data/site";

const PONTOS = [
  {
    titulo: "Avaliação antes do plano",
    texto:
      "Nenhum atendimento começa com um pacote fechado. A avaliação minuciosa de movimento define o que faz sentido clínico para o seu caso.",
    destaque: "Diagnóstico Funcional",
  },
  {
    titulo: "Master Trainer GYROTONIC®",
    texto:
      "Roberta é Master Trainer certificada no Método GYROTONIC®, formação de máxima graduação internacional que orienta professores em todo o país.",
    destaque: "Máxima Graduação",
  },
  {
    titulo: "Presencial no Itaim Bibi e online",
    texto:
      "Consultório completo no Itaim Bibi para quem está em São Paulo, e atendimento online estruturado para quem está fora da capital.",
    destaque: "Ambiente Exclusivo",
  },
  {
    titulo: "Alinhamento interdisciplinar",
    texto:
      "Quando o caso pede, o acompanhamento é integrado diretamente com médicos ortopedistas, neurologistas e outros especialistas envolvidos.",
    destaque: "Cuidado Integrado",
  },
];

const CARACTERISTICAS_METODO = [
  "Movimento tridimensional em espirais",
  "Descompressão articular sem impacto",
  "Ativação e coordenação neuromotora",
  "Integração do sistema nervoso e foco",
];

export default function Diferenciais() {
  const { t } = useTexts();

  return (
    <section id="diferenciais" className="relative overflow-hidden bg-roxo/[0.03] py-20 lg:py-28">
      {/* Elementos decorativos de ambientação */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-coral/5 opacity-50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-roxo/5 opacity-50 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-coral">
            <Sparkles className="h-3 w-3" />
            <span>{t("diferenciais_eyebrow", "Método GYROTONIC® & Raciocínio Clínico")}</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-roxo sm:text-3xl lg:text-4xl">
            {t(
              "diferenciais_title",
              "Fisioterapia, GYROTONIC® e Canolu como parte de um mesmo raciocínio de movimento"
            )}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            {t(
              "diferenciais_subtitle",
              "Unimos a precisão da biomecânica da coluna vertebral ao sistema internacional GYROTONIC®. Em vez de movimentos lineares e rígidos, o método promove alívio de dor, descompressão articular e fortalecimento em padrões espirais contínuos."
            )}
          </p>
        </div>

        {/* Bloco de Destaque com a Imagem em Alta Fidelidade */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-roxo/10 bg-white shadow-xl shadow-roxo/5">
          <div className="grid gap-0 lg:grid-cols-12 lg:items-stretch">
            
            {/* Imagem em WebP de Alta Fidelidade */}
            <div className="relative group overflow-hidden bg-cream-light lg:col-span-7">
              <picture>
                <source srcSet="metodo_gyrotonic_destaque.webp" type="image/webp" />
                <img
                  src="metodo_gyrotonic_destaque.webp"
                  alt={t(
                    "gyrotonic_img_alt",
                    "Dra. Roberta Quinn demonstrando exercício no aparelho GYROTONIC® Pulley Tower"
                  )}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] min-h-[320px] sm:min-h-[420px] lg:min-h-[480px]"
                />
              </picture>

              {/* Tarja elegante de legenda e autoridade */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-6 text-cream">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-coral-light">
                  {t("gyrotonic_badge_label", "Aparelho Oficial · Pulley Tower Unit")}
                </span>
                <p className="mt-1 font-display text-sm font-semibold tracking-wide text-white sm:text-base">
                  {t(
                    "gyrotonic_caption",
                    "Dra. Roberta Quinn em atendimento individualizado no Itaim Bibi, SP"
                  )}
                </p>
              </div>
            </div>

            {/* Conteúdo Explicativo do Método */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral">
                  {t("gyrotonic_card_eyebrow", "Por Dentro do Método")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-roxo sm:text-2xl">
                  {t("gyrotonic_card_title", "Wellness completo para corpo, mente e sistema nervoso")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80 sm:text-base">
                  {t(
                    "gyrotonic_card_desc_1",
                    "Um sistema que combina biomecânica, respiração e movimentos tridimensionais, respeitando a anatomia de cada articulação e, ao mesmo tempo, estimulando a integração do sistema nervoso."
                  )}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75 sm:text-base">
                  {t(
                    "gyrotonic_card_desc_2",
                    "A complexidade dos movimentos desafia o cérebro, ativa a coordenação neuromotora e amplia a consciência corporal, o foco e a presença, além da correção postural já nas primeiras sessões."
                  )}
                </p>

                {/* Destaque sensorial pós-sessão */}
                <div className="mt-4 rounded-xl border border-roxo/10 bg-roxo/[0.04] p-3.5">
                  <p className="text-xs italic leading-relaxed text-roxo/90 sm:text-sm">
                    "{t(
                      "gyrotonic_card_quote",
                      "Você termina uma sessão sentindo o corpo mais integrado e a mente mais tranquila, porém mais desperta e focada."
                    )}"
                  </p>
                </div>

                {/* Lista de características distintivas */}
                <div className="mt-5 space-y-2.5 border-t border-roxo/10 pt-5">
                  {CARACTERISTICAS_METODO.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral">
                        <Activity className="h-3 w-3" />
                      </div>
                      <span className="text-xs font-semibold text-ink/85 sm:text-sm">
                        {t(`gyrotonic_feat_${idx}`, item)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de Agendamento/Contato */}
              <div className="mt-6 pt-5 border-t border-roxo/10">
                <a
                  href={whatsappLink(
                    "Olá, Dra. Roberta! Gostaria de saber mais sobre as sessões com o Método GYROTONIC® e agendar uma avaliação."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-6 py-3.5 text-sm font-bold text-cream shadow-md shadow-coral/20 transition-all hover:bg-coral-dark hover:scale-[1.01]"
                >
                  <span>{t("gyrotonic_cta_btn", "Agendar avaliação com GYROTONIC®")}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pilares do Método e Atendimento */}
        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-roxo sm:text-xl">
              {t("diferenciais_grid_title", "Os 4 Pilares da nossa Abordagem Clínica")}
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PONTOS.map((ponto, i) => (
              <div
                key={ponto.titulo}
                className="flex flex-col justify-between rounded-2xl border border-roxo/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-coral/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-coral/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-roxo/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-roxo/70">
                      {ponto.destaque}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold text-roxo">
                    {t(`diferenciais_item_${i}_titulo`, ponto.titulo)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {t(`diferenciais_item_${i}_texto`, ponto.texto)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

