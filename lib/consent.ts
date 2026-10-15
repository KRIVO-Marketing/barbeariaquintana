export const CONSENT_COOKIE = "quintana_consent";
export const CONSENT_EVENT = "quintana:consent";
export const CONSENT_OPEN_EVENT = "quintana:consent-open";
const MAX_AGE = 60 * 60 * 24 * 180; // 6 meses

export type Consent = { analytics: boolean; marketing: boolean };

/** Leitura crua do cookie (string estável, serve de snapshot para useSyncExternalStore). */
export function readRaw(): string {
  const hit = document.cookie.split("; ").find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
  return hit ? hit.slice(CONSENT_COOKIE.length + 1) : "";
}

export function parseConsent(raw: string): Consent | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(decodeURIComponent(raw));
    if (v?.v !== 1) return null;
    return { analytics: v.a === true, marketing: v.m === true };
  } catch {
    return null;
  }
}

export function writeConsent(c: Consent) {
  const value = encodeURIComponent(JSON.stringify({ v: 1, a: c.analytics, m: c.marketing, t: Date.now() }));
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${
    location.protocol === "https:" ? "; Secure" : ""
  }`;
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Remove cookies de terceiros (Google Analytics e Meta) deste domínio. */
export function clearTrackingCookies() {
  const host = location.hostname;
  const domains = [host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const part of document.cookie.split("; ")) {
    const name = part.split("=")[0];
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name === "_fbp" || name === "_fbc") {
      for (const d of domains) document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${d}`;
      document.cookie = `${name}=; Max-Age=0; Path=/`;
    }
  }
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
