/**
 * URL pública do site. Defina NEXT_PUBLIC_SITE_URL no .env / painel da hospedagem
 * (ex.: https://www.seudominio.com.br). Na Vercel, usa o domínio de produção.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "http://localhost:3000"
).replace(/\/$/, "");
