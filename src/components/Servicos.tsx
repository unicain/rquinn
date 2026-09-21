import { services, gruposOrdenados } from "../data/services";
import { whatsappLink } from "../data/site";
import { useTexts } from "../context/TextContext";

export default function Servicos() {
  const { t } = useTexts();

  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-coral">
          {t("services_eyebrow", "Serviços")}
        </p>
        <h2 className="mt-3 font-display text-2xl text-roxo sm:text-3xl">
          {t("services_title", "Cada atendimento parte de uma avaliação — não de um pacote pronto")}
        </h2>
        <p className="mt-4 text-ink/70">
          {t("services_subtitle", "Esta é a mesma lista de serviços cadastrada no Perfil da Empresa da clínica no Google. Escolha o que mais se aproxima do seu momento — a avaliação define o plano exato.")}
        </p>
      </div>

      {gruposOrdenados.map((grupo) => {
        // Gera uma chave simplificada para o grupo (ex: service_group_fisioterapia)
        const grupoSlug = grupo
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // remove acentos
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "_")
          .substring(0, 30);

        return (
          <div key={grupo} className="mb-14 last:mb-0">
            <h3 className="mb-5 border-b border-roxo/10 pb-2 font-display text-sm uppercase tracking-widest text-roxo/70">
              {t(`service_group_${grupoSlug}`, grupo)}
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.grupo === grupo)
                .map((service) => (
                  <a
                    key={service.id}
                    href={whatsappLink(
                      `Olá! Tenho interesse em: ${t(`service_item_${service.id}_nome`, service.nome)}. Pode me passar mais informações?`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col rounded-2xl border border-roxo/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-coral/40 hover:shadow-md"
                  >
                    <h4 className="font-display text-base text-roxo group-hover:text-coral">
                      {t(`service_item_${service.id}_nome`, service.nome)}
                    </h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                      {t(`service_item_${service.id}_desc`, service.descricao)}
                    </p>
                    <span className="mt-4 text-xs font-bold uppercase tracking-wide text-coral">
                      {t("services_action_text", "Falar sobre este serviço →")}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

