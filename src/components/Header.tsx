import { whatsappLink } from "../data/site";

const NAV_ITEMS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#diferenciais" },
  { label: "Roberta", href: "#sobre" },
  { label: "Equipe", href: "#equipe" },
  { label: "Espaço", href: "#espaco" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Onde atendo", href: "#localizacao" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-roxo/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="leading-none">
          <span className="block font-display text-lg tracking-wide text-roxo">
            ROBERTA QUINN
          </span>
          <span className="block text-[10px] font-body tracking-[0.3em] text-coral">
            CORPO &amp; MOVIMENTO
          </span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-roxo/80 transition-colors hover:text-coral"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-coral px-5 py-2 text-sm font-bold text-cream shadow-sm transition-transform hover:scale-105"
        >
          Agendar avaliação
        </a>
      </div>
    </header>
  );
}
