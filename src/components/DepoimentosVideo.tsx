import { useState } from "react";
import { Play, X, Star, Sparkles, MessageCircle } from "lucide-react";

// Custom Instagram SVG to prevent compatibility issues across Lucide versions
const InstagramIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface VideoTestimonial {
  id: string; // ID / Shortcode do Reel do Instagram (ex: C_abc123 de instagram.com/reel/C_abc123)
  nome: string;
  tratamento: string;
  resumo: string;
  thumbnailUrl: string;
}

const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "DYc4O8eMjU5", // Substituir pelo shortcode real do Instagram
    nome: "Ana Paula Carneiro",
    tratamento: "Alívio na tensão da mandíbula",
    resumo: "Trabalho Craniofascial para Simetria Crânio-Mandibular, com melhora significativa na mobilidade, na tensão e no conforto ao mastigar e falar.",
    thumbnailUrl: "roberta_ana_p_carneiro.jpeg",
  },
  {
    id: "DXoNT_-DFxm",
    nome: "Atriz Alexandra Martins",
    tratamento: "O método Gyrotonic",
    resumo: "Relato de uma paciente sobre os benefícios do Gyrotonic aplicado pela Dra. Roberta Quinn.",
    thumbnailUrl: "roberta_alexandra_martins.jpeg",
  },
  {
    id: "DXjRwf0jKui",
    nome: "Instrutor Thiago Ogava",
    tratamento: "Dores na lombar, escápula e limitação dos movimentos",
    resumo: "Thiago Ogava, instrutor de golf, chegou com dores na lombar e na escápula limitações reais que impediam um swing completo.",
    thumbnailUrl: "tiago_ogava.png",
  },
  {
    id: "DW4AUpKjDH5",
    nome: "Jornalista Cristina Vieira",
    tratamento: "Movimento, consciência corporal e cuidado profundo",
    resumo: "A querida Cristina Viera, apresentadora do Globo Rural, compartilha sua experiência com o trabalho que desenvolvo um encontro entre movimento, consciência corporal e cuidado profundo no seu Pré e Pós Natal com o Método Gyrotonic.",
    thumbnailUrl: "roberta_ jornalista_cris.jpeg",
  },
  {
    id: "DMu5ns_uWXt",
    nome: "Anne Wilians",
    tratamento: "Método Simetria Craniana e Método Gyrotonic",
    resumo: "Como a simetria craniana e o Gyrotonic podem proporcionar um alinhamento vibracional.",
    thumbnailUrl: "anne_wilians.png",
  },
  {
    id: "DagBBi7sxPV",
    nome: "Isa Zanata",
    tratamento: "Nossa atleta de Alto rendimento do Nado Artístico",
    resumo: "Se o esporte faz movimentos circulares o treino precisa ser funcional ao esporte.",
    thumbnailUrl: "isa_zanata.png",
  },
];

export default function DepoimentosVideo() {
  const [activeReelId, setActiveReelId] = useState<string | null>(null);

  // Função para abrir o vídeo. Se o ID for de placeholder, orienta o usuário
  const handlePlayVideo = (id: string) => {
    setActiveReelId(id);
  };

  return (
    <section id="depoimentos-video" className="relative overflow-hidden bg-cream py-20 text-ink">
      {/* Detalhes de fundo suaves */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-coral/5 opacity-40 blur-3xl"
      />
      
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-roxo/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-roxo">
            <InstagramIcon className="h-3 w-3 text-coral" />
            Vidas Transformadas
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-roxo sm:text-4xl">
            Histórias de Sucesso
          </h2>
          <p className="mt-4 text-sm text-ink/70">
            Assista aos relatos reais de pacientes que recuperaram a mobilidade, venceram a dor e reencontraram a qualidade de vida com a Dra. Roberta.
          </p>
        </div>

        {/* Grade de Vídeos de Depoimentos (Formato Reels / Stories) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {VIDEO_TESTIMONIALS.map((video) => (
            <div
              key={video.nome}
              onClick={() => handlePlayVideo(video.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-roxo/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              {/* Formato Reel Vertical (9:16) */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-900">
                <img
                  src={video.thumbnailUrl}
                  alt={`Depoimento de ${video.nome}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
                
                {/* Overlay Escuro com Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
                
                {/* Badge do Instagram */}
                <div className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10">
                  <InstagramIcon className="h-3.5 w-3.5" />
                </div>

                {/* Ícone de Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-roxo shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-coral group-hover:text-white">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Conteúdo de Texto e Estrelas */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-coral text-coral" />
                    ))}
                  </div>
                  
                  <h3 className="font-display text-sm font-bold text-white leading-tight">
                    {video.nome}
                  </h3>
                  
                  <span className="mt-0.5 block text-[10px] font-semibold text-coral uppercase tracking-wider">
                    {video.tratamento}
                  </span>

                  <p className="mt-2 text-[11px] leading-snug text-white/80 line-clamp-3 italic">
                    &ldquo;{video.resumo}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA do Instagram da Clínica */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/dr.robertaquinn/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-roxo/15 bg-white px-8 py-4 text-sm font-bold text-roxo shadow-sm transition-all hover:bg-roxo/5"
          >
            <InstagramIcon className="h-4 w-4 text-coral" />
            Ver mais relatos no perfil @dr.robertaquinn
          </a>
        </div>

        {/* Modal Player para Reels do Instagram */}
        {activeReelId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden bg-black border-4 border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              
              {/* Botão de Fechar */}
              <button
                onClick={() => setActiveReelId(null)}
                className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-coral transition-colors"
                aria-label="Fechar depoimento"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Se for id de placeholder, explicamos como trocar. Se for real, exibe o iframe */}
              {activeReelId.startsWith("C_placeholder") ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-roxo">
                  <InstagramIcon className="h-12 w-12 text-coral mb-4 animate-bounce" />
                  <h4 className="font-display text-lg font-bold">Depoimento de Vídeo</h4>
                  <p className="mt-4 text-xs text-white/85 leading-relaxed">
                    Este é um espaço reservado para o seu vídeo do Instagram! 
                  </p>
                  <p className="mt-2 text-[11px] bg-black/20 p-3 rounded-lg font-mono text-left w-full text-white/70">
                    Para exibir o seu vídeo real, basta abrir o seu Reel no navegador e copiar o código após "/reel/" (ex: de instagram.com/reel/C8xYz123/ copie C8xYz123) e substituir no arquivo do seu site.
                  </p>
                  <button
                    onClick={() => setActiveReelId(null)}
                    className="mt-6 rounded-full bg-coral px-6 py-2 text-xs font-bold text-white hover:opacity-90"
                  >
                    Entendi, obrigado!
                  </button>
                </div>
              ) : (
                <iframe
                  src={`https://www.instagram.com/p/${activeReelId}/embed/captioned/`}
                  title="Depoimento de Paciente - Instagram Reel"
                  className="w-full h-full border-0 absolute inset-0 bg-white"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
