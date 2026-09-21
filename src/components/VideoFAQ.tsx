import { useState } from "react";
import { Play, X, Video, Sparkles, HelpCircle } from "lucide-react";
import { useTexts } from "../context/TextContext";

interface ShortVideo {
  id: string;
  pergunta: string;
  categoria: "Gyrotonic" | "Fisioterapia" | "Dores" | "Dicas";
  thumbnailUrl: string;
}

const SHORTS: ShortVideo[] = [
  {
    id: "8aT9inpt5Uk",
    pergunta: "Por que escolher o Método GYROTONIC®?",
    categoria: "Gyrotonic",
    thumbnailUrl: "pq_escolher_o_gyrotonic.jpg",
  },
  {
    id: "oe_r0jk7LEY",
    pergunta: "A importância da avaliação postural individualizada",
    categoria: "Fisioterapia",
    thumbnailUrl: "avaliacao_personalizada.png",
  },
  {
    id: "6fGgP7g0Jmw",
    pergunta: "Como aliviar a tensão nos ombros e pescoço?",
    categoria: "Dores",
    thumbnailUrl: "tensao_ombros_pescoco.png",
  },
  {
    id: "CBmmcgP4aQo",
    pergunta: "Quem pode usar o GYROTONIC®?",
    categoria: "Gyrotonic",
    thumbnailUrl: "quem_pode_usar.png",
  },
  {
    id: "CKOLBTZYXqk",
    pergunta: "Como o Método GYROTONIC® foi criado",
    categoria: "Gyrotonic",
    thumbnailUrl: "como_foi_criado.png",
  },
  {
    id: "8aT9inpt5Uk",
    pergunta: "O Gyrotonic® é indicado para que tipos de reabilitação?",
    categoria: "Gyrotonic",
    thumbnailUrl: "tipo_reabilitacao.png",
  },
];

export default function VideoFAQ() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const { t } = useTexts();

  return (
    <section id="video-faq" className="bg-cream-light py-20 text-ink">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-roxo/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-roxo">
            <Video className="h-3 w-3" />
            {t("video_faq_eyebrow", "Dra. Roberta Responde")}
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-roxo sm:text-4xl">
            {t("video_faq_title", "FAQ em Vídeo")}
          </h2>
          <p className="mt-4 text-sm text-ink/70">
            {t(
              "video_faq_subtitle",
              "Assista a explicações dinâmicas e dicas práticas da Dra. Roberta Quinn diretamente do YouTube Shorts. Clique para dar o play!"
            )}
          </p>
        </div>


        {/* Grade de Vídeos (Shorts) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHORTS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoId(video.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-roxo/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Thumbnail Container (Proporção vertical 9:16) */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-900">
                <img
                  src={video.thumbnailUrl}
                  alt={video.pergunta}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
                
                {/* Tag de Categoria */}
                <span className="absolute top-4 left-4 rounded-full bg-coral px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                  {video.categoria}
                </span>

                {/* Botão de Play Centralizado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-roxo shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-coral group-hover:text-white">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Título/Pergunta no rodapé */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-start gap-1.5">
                    <HelpCircle className="h-4 w-4 text-coral mt-0.5 flex-shrink-0" />
                    <h3 className="font-display text-sm font-semibold leading-snug">
                      {video.pergunta}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Player Pop-up para reprodução vertical do Short */}
        {activeVideoId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden bg-black border-4 border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              
              {/* Botão para Fechar o Vídeo */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-coral transition-colors"
                aria-label="Fechar vídeo"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Iframe incorporando o Shorts como embed do YouTube */}
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="Dra. Roberta Quinn - YouTube Short"
                className="w-full h-full border-0 absolute inset-0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
