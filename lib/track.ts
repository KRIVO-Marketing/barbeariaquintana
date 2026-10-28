type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Eventos padrão do GA4; os demais viram eventos personalizados.
const GA_STANDARD: Record<string, string> = { lead: "generate_lead" };

/**
 * Envia o evento ao GA4 (gtag) e ao dataLayer do GTM. GA4 e Meta Pixel são tags do container: quem decide se
 * disparam é o Consent Mode (analytics_storage / ad_storage). Mapeamento para eventos padrão
 * (lead -> generate_lead / Lead, contact -> Contact) é feito nas tags, no GTM.
 * Só é chamado depois que o visitante aceitou alguma categoria (ver components/Analytics.tsx).
 */
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", GA_STANDARD[event] ?? event, params);
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}
