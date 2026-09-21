import { GOOGLE_MAPS_URL, INSTAGRAM_URL, WHATSAPP_NUMBER } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-roxo-dark pt-12 pb-8 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-display text-cream">ROBERTA QUINN</span>
          <span className="ml-2 text-xs tracking-widest text-cream/50">CORPO &amp; MOVIMENTO</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-coral transition-colors duration-200">
            Google Maps
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-coral transition-colors duration-200">
            Instagram
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-coral transition-colors duration-200"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-xs text-cream/40">
          Itaim Bibi, São Paulo — presencial e online
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-8 border-t border-cream/10 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-cream/30">
          <p>© {new Date().getFullYear()} Roberta Quinn. Todos os direitos reservados.</p>
          <p className="transition-colors duration-200">
            Desenvolvido pelo{" "}
            <a
              href="https://unicain.com.br"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-cream/40 hover:text-coral transition-all duration-200 underline underline-offset-4 decoration-cream/10 hover:decoration-coral"
            >
              Jacson Marcelo, com Inteligência e IA. (unicain.com.br)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
