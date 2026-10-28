import { SITE_URL } from "@/lib/site";
import {
  CLUB_PLANS,
  FAQS,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  GOOGLE_PLACE_URL,
  MAPS_DIRECTIONS_URL,
  PHONE_LABEL,
  RATING,
  SERVICES,
  brl,
  serviceLabel,
} from "@/lib/data";

export const dynamic = "force-static";

/** Resumo do site em Markdown para assistentes de IA (padrão llmstxt.org), gerado dos mesmos dados da página. */
export function GET() {
  const body = `# Barbearia Quintana

> Barbearia no Jardim Aurélia, em Campinas (SP), aberta em 2016 por João Navero Quintana, que aprendeu o ofício com o avô, barbeiro na mesma região. Atendimento com hora marcada, agendamento pelo WhatsApp.

## Informações práticas

- Endereço: Av. Nossa Senhora da Consolação, 821, Jardim Aurélia, Campinas - SP, CEP 13033-140
- Horário: terça a sexta, das 8h às 19h; sábado, das 8h às 17h; fechado domingo e segunda
- WhatsApp: ${PHONE_LABEL}
- Atendimento: somente com hora marcada
- Pagamento: cartões de crédito e débito e pagamento por aproximação (NFC)
- Avaliação no Google: nota ${RATING.value} em ${RATING.count} avaliações

## Serviços e preços

${SERVICES.map((s) => `- ${serviceLabel(s)}: ${brl(s.price)}. ${s.desc}`).join("\n")}

## Clube Quintana (pacotes mensais, pagamento antecipado)

${CLUB_PLANS.map((p) => `- ${p.name}: ${p.items}, ${brl(p.price)}, validade de ${p.validity}`).join("\n")}

Regras: uso individual (não transferível); ausência na semana conta como serviço realizado, sem reposição ou reembolso.

## Perguntas frequentes

${FAQS.map(([q, a]) => `### ${q}\n${a}`).join("\n\n")}

## Links

- [Site](${SITE_URL}/): serviços, clube, agendamento e avaliações
- [Instagram](${INSTAGRAM_URL})
- [Facebook](${FACEBOOK_URL})
- [Perfil no Google](${GOOGLE_PLACE_URL})
- [Como chegar](${MAPS_DIRECTIONS_URL})
- [Política de privacidade](${SITE_URL}/politica-de-privacidade)
- [Política de cookies](${SITE_URL}/politica-de-cookies)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
