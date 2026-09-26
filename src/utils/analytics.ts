declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    posthog?: any;
    GA_MEASUREMENT_ID?: string;
  }
}

// Measurement ID do Google Analytics 4 (injetado via Vite env ou fallback padrão)
export const GA_MEASUREMENT_ID: string =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string) ||
  (typeof window !== "undefined" ? window.GA_MEASUREMENT_ID || "G-M2L8CBZD2V" : "G-M2L8CBZD2V");

/**
 * Envia um evento customizado tanto para o Google Analytics quanto para o PostHog
 */
export function trackEvent(
  eventName: string,
  eventParams: Record<string, any> = {}
) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
    if (
      typeof window !== "undefined" &&
      window.posthog &&
      typeof window.posthog.capture === "function"
    ) {
      window.posthog.capture(eventName, eventParams);
    }
  } catch (err) {
    console.debug("Analytics event dispatch error:", err);
  }
}

/**
 * Rastreia cliques nos links do WhatsApp (Conversão de Lead / Agendamento)
 */
export function trackWhatsAppClick(section?: string, label?: string) {
  trackEvent("generate_lead", {
    event_category: "Conversion",
    event_label: label || "Contato via WhatsApp",
    channel: "WhatsApp",
    section: section || "Global",
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });

  trackEvent("click_whatsapp", {
    section: section || "Global",
    label: label || "WhatsApp CTA",
  });
}

/**
 * Inicializa auto-rastreamento de interações cruciais (WhatsApp, Maps, Instagram)
 */
export function initAutoAnalytics() {
  if (typeof window === "undefined") return;

  document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;

    const href = target.getAttribute("href") || "";

    // Detecção de WhatsApp (Conversão Principal)
    if (href.includes("wa.me") || href.includes("whatsapp.com")) {
      const section = target.closest("section")?.id || "geral";
      const buttonText = target.innerText?.trim() || "WhatsApp";
      trackWhatsAppClick(section, buttonText);
    }

    // Detecção de Google Maps / Como Chegar
    if (href.includes("google.com/maps") || href.includes("share.google")) {
      trackEvent("click_mapa_localizacao", {
        event_category: "Engagement",
        event_label: "Abrir Google Maps Clínica",
      });
    }

    // Detecção de Redes Sociais / Instagram
    if (href.includes("instagram.com")) {
      trackEvent("click_instagram", {
        event_category: "Social",
        event_label: "Instagram Dra. Roberta Quinn",
      });
    }
  });
}
