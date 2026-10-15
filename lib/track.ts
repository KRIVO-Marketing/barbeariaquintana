type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Eventos padrão do GA4 / Meta; os demais viram eventos personalizados.
const GA_STANDARD: Record<string, string> = { lead: "generate_lead" };
const META_STANDARD: Record<string, string> = { lead: "Lead", contact: "Contact" };

/**
 * Envia um evento para as ferramentas que o visitante autorizou.
 * Sem consentimento, os scripts nem são carregados e a chamada não faz nada.
 */
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", GA_STANDARD[event] ?? event, params);
  const meta = META_STANDARD[event];
  if (meta) window.fbq?.("track", meta, params);
  else window.fbq?.("trackCustom", event, params);
}
