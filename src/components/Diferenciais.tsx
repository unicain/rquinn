import { useTexts } from "../context/TextContext";

const PONTOS = [
  {
    titulo: "Avaliação antes do plano",
    texto:
      "Nenhum atendimento começa com um pacote fechado. A avaliação de movimento define o que faz sentido para o seu caso.",
  },
  {
    titulo: "Master Trainer GYROTONIC®",
    texto:
      "Roberta é Master Trainer certificada no Método GYROTONIC®, formação que orienta professores do método em todo o país.",
  },
  {
    titulo: "Presencial e online",
    texto:
      "Consultório no Itaim Bibi para quem está em São Paulo, e atendimento online para quem está fora da região.",
  },
  {
    titulo: "Alinhamento com outros profissionais",
    texto:
      "Quando o caso pede, o acompanhamento é feito em conjunto com médicos e outros especialistas envolvidos.",
  },
];

export default function Diferenciais() {
  const { t } = useTexts();

  return (
    <section id="diferenciais" className="bg-roxo/[0.04] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">
          {t("diferenciais_eyebrow", "Método")}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl text-roxo sm:text-3xl">
          {t(
            "diferenciais_title",
            "Fisioterapia, GYROTONIC® e Canolu como parte de um mesmo raciocínio de movimento"
          )}
        </h2>

         <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {PONTOS.map((ponto, i) => (
            <div key={ponto.titulo} className="flex gap-5">
              <span className="font-display text-3xl text-coral/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-base text-roxo">
                  {t(`diferenciais_item_${i}_titulo`, ponto.titulo)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {t(`diferenciais_item_${i}_texto`, ponto.texto)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

