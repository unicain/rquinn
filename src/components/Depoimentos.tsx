import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { GOOGLE_MAPS_URL } from "../data/site";

const DEPOIMENTOS = [
  {
    nome: "Mariana Silva",
    tratamento: "Fisioterapia & Gyrotonic",
    relato:
      "A Roberta é uma profissional excepcional. O trabalho dela com fisioterapia e o método GYROTONIC® mudou completamente a minha relação com a dor. Estava com uma dor lombar crônica há meses e hoje me sinto livre e forte. O consultório no Itaim Bibi é super aconchegante e o atendimento é totalmente personalizado.",
    tempo: "Há 1 mês",
  },
  {
    nome: "Roberto Alencar",
    tratamento: "Reabilitação de Ombro",
    relato:
      "Profissional extremamente competente e atenciosa. Unir a fisioterapia ao GYROTONIC® e à liberação miofascial fez toda a diferença no meu pós-operatório de ombro. Em poucas sessões já recuperei a amplitude de movimento. Recomendo muito!",
    tempo: "Há 3 meses",
  },
  {
    nome: "Camila Mendes",
    tratamento: "Consciência Corporal & Canolu",
    relato:
      "Atendimento incrível e diferenciado. A Roberta avalia o corpo como um todo de verdade, identificando a real causa das dores. O método Canolu e o GYROTONIC® trouxeram de volta a minha consciência corporal e flexibilidade. O melhor atendimento de fisioterapia de São Paulo.",
    tempo: "Há 2 semanas",
  },
  {
    nome: "Lucas Albuquerque",
    tratamento: "Atendimento Online (Postura)",
    relato:
      "Fisioterapeuta maravilhosa! O atendimento online me surpreendeu muito pela precisão nas orientações. Mesmo de longe, consegui melhorar muito minha postura e mobilidade das costas. Excelente didática e carinho com o paciente!",
    tempo: "Há 2 meses",
  },
  {
    nome: "Ana Carolina Moura",
    tratamento: "Método GYROTONIC®",
    relato:
      "Conheci a Roberta através do método GYROTONIC® e hoje não largo mais. A precisão técnica dela como Master Trainer faz toda a diferença para quem busca se mover sem dor e ganhar força de forma integrada. Espaço excelente e super bem equipado no Itaim Bibi.",
    tempo: "Há 4 meses",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-cream py-20 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">
              Avaliações reais
            </p>
            <h2 className="mt-3 font-display text-2xl text-roxo sm:text-3xl">
              O que dizem os pacientes
            </h2>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-roxo/10 bg-roxo/[0.02] p-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold leading-none text-roxo">
                5.0
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-wider text-ink/60">
                Média Geral
              </span>
            </div>
            <div className="h-8 w-px bg-roxo/10" />
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-coral text-coral"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="mt-1 block text-xs text-ink/75">
                Avaliações verificadas no Google Maps
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS.map((depoimento) => (
            <div
              key={depoimento.nome}
              className="flex flex-col justify-between rounded-2xl border border-roxo/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-roxo">
                      {depoimento.nome}
                    </h3>
                    <span className="mt-0.5 block text-xs text-ink/50">
                      {depoimento.tempo}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-coral text-coral"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <span className="mt-4 inline-block rounded-full bg-roxo/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-roxo">
                  {depoimento.tratamento}
                </span>

                <p className="mt-4 text-sm leading-relaxed text-ink/85 italic">
                  &ldquo;{depoimento.relato}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-roxo/5 pt-4">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-medium text-emerald-700">
                  Paciente Recomendado · Google
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full bg-roxo px-8 py-3.5 text-sm font-bold text-cream transition-transform hover:scale-105"
          >
            Ver todas as avaliações no Google Maps
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={`${GOOGLE_MAPS_URL}/review`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-roxo/20 px-8 py-3.5 text-sm font-bold text-roxo transition-colors hover:bg-roxo/5"
          >
            Deixar um depoimento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
