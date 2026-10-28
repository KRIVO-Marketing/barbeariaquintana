import { CONSENT_COOKIE } from "./consent";

/**
 * Script inline que roda no <head>, ANTES do GTM:
 * 1. cria dataLayer/gtag;
 * 2. define o padrão do Consent Mode v2 (tudo que envolve cookies de medição e anúncios = negado);
 * 3. se o visitante já decidiu antes (cookie de consentimento), aplica a escolha na hora,
 *    para que quem volta não fique preso em "denied".
 * O leitor do cookie espelha parseConsent() de lib/consent.ts (formato {v:1, a, m}).
 */
export const CONSENT_MODE_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',personalization_storage:'granted',security_storage:'granted',wait_for_update:500});try{var m=document.cookie.match(/(?:^|; )${CONSENT_COOKIE}=([^;]*)/);if(m){var v=JSON.parse(decodeURIComponent(m[1]));if(v&&v.v===1){var a=v.a===true?'granted':'denied',k=v.m===true?'granted':'denied';gtag('consent','update',{analytics_storage:a,ad_storage:k,ad_user_data:k,ad_personalization:k});}}}catch(e){}`;
