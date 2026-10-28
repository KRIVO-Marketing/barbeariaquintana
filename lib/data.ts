import { SITE_URL } from "./site";

export const WHATSAPP = "5519991522327";
export const PHONE_LABEL = "(19) 99152-2327";
export const PHONE_TEL = "+5519991522327";
export const FACEBOOK_URL = "https://www.facebook.com/barbeariaquintana";
export const INSTAGRAM_URL = "https://www.instagram.com/barbearia_quintana/";
export const GOOGLE_PLACE_ID = "ChIJCb-LrdrJyJQRS_iGaQnf6BM";
export const GOOGLE_PLACE_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;
export const GOOGLE_REVIEW_URL = "https://g.page/r/CUv4hmkJ3-gTEBM/review";
export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Barbearia+Quintana+Av.+Nossa+Senhora+da+Consola%C3%A7%C3%A3o+821+Campinas";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Nossa+Senhora+da+Consola%C3%A7%C3%A3o,+821,+Campinas+-+SP&output=embed";

/** Nota do Google (atualize junto com o perfil). */
export const RATING = { value: "4,9", ratingValue: "4.9", count: 44 };

/** Google Analytics 4 (carregado em components/Analytics.tsx, após o aceite de estatísticas). */
export const GA_ID = "G-Z1F7L3DBNR";

/** Vídeo opcional do hero (loop horizontal). Vazio = usa a foto. */
export const HERO_VIDEO = "";

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  // alternativa: "/assets/fachada-rua.webp" (enquadramento mais aberto)
  hero: "/assets/fachada.webp",
  avo: u("1567894340315-735d7c361db0"),
  antes: u("1517832606299-7ae9b720a186"),
  g1: u("1503951914875-452162b0f3f1"),
  g2: u("1622286342621-4bd786c2447c"),
  g3: u("1599351431202-1e0f0137899a"),
  g4: u("1512690459411-b9245aed614b"),
  // fotos próprias da barbearia (public/assets)
  cadeiraAvo: "/assets/cadeira-do-avo.webp",
  joao: "/assets/joao-quintana.webp",
  interior: "/assets/barbearia-interior.webp",
  maquinaNuca: "/assets/maquina-nuca.webp",
  maquinaLateral: "/assets/maquina-lateral.webp",
  vitrolaDetalhes: "/assets/vitrola-detalhes.webp",
  armadura: "/assets/armadura-parede.webp",
  som: "/assets/aparelho-de-som.webp",
};

export type Service = {
  id: string;
  name: string;
  note?: string;
  price: number;
  desc: string;
};

export const SERVICES: Service[] = [
  { id: "corte", name: "Corte de cabelo", price: 60, desc: "Seu corte, do seu jeito." },
  { id: "corte-maquina", name: "Corte de cabelo", note: "máquina nº 0", price: 50, desc: "Rápido e na régua." },
  { id: "barba", name: "Barba", price: 60, desc: "Navalha e toalha quente, como manda a tradição." },
  { id: "combo", name: "Cabelo e barba", price: 115, desc: "O visual completo, numa só visita." },
  { id: "acabamento", name: "Acabamento", price: 30, desc: "O corte sempre em dia." },
  { id: "acabamento-barba", name: "Acabamento de barba", price: 30, desc: "Contorno limpo e alinhado." },
  { id: "sobrancelha", name: "Sobrancelha", price: 20, desc: "Olhar mais marcado." },
  { id: "epilacao-nasal", name: "Epilação nasal", price: 20, desc: "Detalhe que faz diferença." },
  { id: "epilacao-auricular", name: "Epilação auricular", price: 20, desc: "Capricho até nos detalhes." },
  { id: "progressiva", name: "Progressiva", note: "franja", price: 100, desc: "Controle da franja." },
];

export const FEATURED_IDS = ["corte", "barba", "combo"];
export const EXTRA_GROUPS: { title: string; ids: string[] }[] = [
  { title: "Acabamentos", ids: ["acabamento", "acabamento-barba"] },
  { title: "Detalhes", ids: ["sobrancelha", "epilacao-nasal", "epilacao-auricular"] },
  { title: "Transformação", ids: ["progressiva"] },
];

export const brl = (n: number) => `R$ ${n}`;

/** Nome para mensagens e resumos, ex.: "Corte de cabelo (máquina nº 0)". */
export const serviceLabel = (s: Service) => (s.note ? `${s.name} (${s.note})` : s.name);

export type Plan = {
  id: string;
  name: string;
  items: string;
  price: number;
  validity: string;
  perk: boolean;
};

export const CLUB_PLANS: Plan[] = [
  { id: "essential", name: "Quintana Essential", items: "2 cortes", price: 110, validity: "20 dias", perk: false },
  { id: "reserva", name: "Quintana Reserva", items: "3 cortes", price: 150, validity: "30 dias", perk: false },
  { id: "classico", name: "Quintana Clássico", items: "4 cortes", price: 190, validity: "30 dias", perk: true },
  { id: "barba", name: "Quintana Barba", items: "4 barbas", price: 190, validity: "30 dias", perk: true },
  { id: "duo", name: "Quintana Duo", items: "2 cortes + 2 barbas", price: 190, validity: "30 dias", perk: true },
  { id: "signature", name: "Quintana Signature", items: "4 cortes + 4 barbas", price: 360, validity: "30 dias", perk: true },
];

export const CLUB_RULES = [
  { t: "Pagamento antecipado", d: "Você paga o pacote antes e tem mais economia nos serviços." },
  { t: "Ausência na semana", d: "O serviço é considerado realizado no pacote mensal, sem direito à reposição ou reembolso." },
  { t: "Uso individual", d: "Todos os pacotes são de uso exclusivo de uma pessoa. Não é permitido transferir ou compartilhar." },
];

export const PILLARS = [
  { t: "Ofício de família", d: "Navalha e toalha quente, o jeito que João aprendeu com o avô, barbeiro no Jardim Aurélia." },
  { t: "Hora marcada", d: "Você chega e é atendido, sem fila." },
  { t: "Ambiente acolhedor", d: "Ar-condicionado, café e música boa, como os clientes contam nas avaliações." },
];

/** Avaliações reais do Perfil da Empresa no Google (transcritas; trechos cortados marcados com …). */
export const REVIEWS = [
  { name: "Fellipe Paula", text: "Excelente profissional, barbearia impecável, com ar condicionado, serviço muito bom, preço justo e um ótimo atendimento!" },
  { name: "Guilherme Albuquerque", text: "Sou muito grato pelo ótimo atendimento e pelo corte de cabelo excelente! Preço justo, bem localizado e ambiente muito agradável!" },
  { name: "Marcelo Resck", text: "Já faço barba a anos com o João. Excelente profissional, super experiente e cobra um preço justo. Recomendo." },
  { name: "Gilberto Akamatsu", text: "A barbearia é bacana, com alguns itens de decoração \"raiz\", e música ambiente de bom gosto. Sem contar a simpatia do profissional!" },
  { name: "Gabriel Moura", text: "Ambiente muito agradável, com ar condicionado, café, e música boa. Excelente profissional, indico!" },
  { name: "Beto Blues", text: "Joãozinho é gente boa e manda bem demais no corte. Recomendo." },
];

export const FAQS: [string, string][] = [
  [
    "Quanto custa corte e barba em Campinas na Barbearia Quintana?",
    "Na Barbearia Quintana, no Jardim Aurélia, em Campinas, o corte de cabelo custa R$ 60 (R$ 50 na máquina nº 0). A barba custa R$ 60 e o combo de cabelo e barba, R$ 115. Os demais valores estão na seção de serviços.",
  ],
  [
    "Quais serviços a Barbearia Quintana oferece e quanto custam?",
    "A Barbearia Quintana oferece: " +
      SERVICES.map((x) => `${serviceLabel(x)} ${brl(x.price)}`).join("; ") +
      ". Há ainda o Clube Quintana, com pacotes mensais de cortes e barbas.",
  ],
  [
    "Como agendar um horário?",
    "Para agendar na Barbearia Quintana, escolha o serviço, o dia e o horário aqui no site e envie a mensagem pronta pelo WhatsApp (19) 99152-2327. O atendimento é com hora marcada.",
  ],
  [
    "Qual o horário de funcionamento?",
    "A Barbearia Quintana abre de terça a sexta, das 8h às 19h, e aos sábados, das 8h às 17h. Fecha aos domingos e às segundas.",
  ],
  [
    "Quais as formas de pagamento?",
    "A Barbearia Quintana aceita cartões de crédito e débito e pagamento por aproximação no celular (NFC).",
  ],
  [
    "Qual a história da Barbearia Quintana?",
    "A Barbearia Quintana nasceu de avô para neto. O avô de João Navero Quintana foi barbeiro no Jardim Aurélia por muitos anos. João fez o curso de barbeiro aos 13 anos e, aos 16, em 2016, abriu a própria barbearia em Campinas. A cadeira, as tesouras e outros itens antigos do avô ficam expostos no espaço.",
  ],
  [
    "Onde fica a barbearia no Jardim Aurélia, em Campinas?",
    "A Barbearia Quintana fica na Av. Nossa Senhora da Consolação, 821, Jardim Aurélia, Campinas - SP, CEP 13033-140. Abre de terça a sábado. Se você procura uma barbearia perto de você na região, a Quintana fica na Av. Nossa Senhora da Consolação, com rotas no Google Maps.",
  ],
  [
    "O que é o Clube Quintana?",
    "O Clube Quintana é o plano de pacotes mensais de cortes e barbas da Barbearia Quintana, com pagamento antecipado e mais economia. Há seis opções, a partir de R$ 110. Veja todas na seção do clube.",
  ],
  [
    "Preciso agendar ou posso ir direto?",
    "O atendimento na Barbearia Quintana é com hora marcada, para que você não espere. A forma mais simples de agendar é pelo WhatsApp (19) 99152-2327, escolhendo serviço, dia e horário aqui no site.",
  ],
];

const ALL_TIMES = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
];

/** Horários oferecidos: terça a sexta até as 19h, sábado até as 17h. */
export const timesFor = (weekday: number | null) =>
  weekday === 6 ? ALL_TIMES.filter((t) => t < "17:00") : ALL_TIMES;

export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Barbearia Quintana",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#barbershop` },
    },
    {
      "@type": "BarberShop",
      "@id": `${SITE_URL}/#barbershop`,
      name: "Barbearia Quintana",
      url: `${SITE_URL}/`,
      description:
        "Barbearia no Jardim Aurélia, em Campinas, aberta em 2016 por João Navero Quintana, neto de barbeiro. Corte, barba, acabamento e Clube Quintana, com hora marcada.",
      image: `${SITE_URL}/opengraph-image`,
      logo: `${SITE_URL}/icon.png`,
      foundingDate: "2016-03-30",
      founder: { "@type": "Person", name: "João Navero Quintana", jobTitle: "Barbeiro" },
      telephone: "+55 19 99152-2327",
      priceRange: "R$ 20 - R$ 360",
      currenciesAccepted: "BRL",
      hasMap: GOOGLE_PLACE_URL,
      geo: { "@type": "GeoCoordinates", latitude: -22.904257, longitude: -47.097501 },
      areaServed: { "@type": "City", name: "Campinas" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Nossa Senhora da Consolação, 821",
        addressLocality: "Campinas",
        addressRegion: "SP",
        postalCode: "13033-140",
        addressCountry: "BR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "17:00",
        },
      ],
      paymentAccepted: "Cartão de crédito, cartão de débito, NFC",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: RATING.ratingValue,
        reviewCount: String(RATING.count),
        bestRating: "5",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços e Clube Quintana",
        itemListElement: [
          ...SERVICES.map((x) => ({
            "@type": "Offer",
            priceCurrency: "BRL",
            price: String(x.price),
            itemOffered: { "@type": "Service", name: serviceLabel(x) },
          })),
          ...CLUB_PLANS.map((x) => ({
            "@type": "Offer",
            priceCurrency: "BRL",
            price: String(x.price),
            itemOffered: {
              "@type": "Service",
              name: `${x.name} (${x.items}, validade ${x.validity})`,
            },
          })),
        ],
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Estacionamento gratuito na rua", value: true },
        { "@type": "LocationFeatureSpecification", name: "Bom para ir com crianças", value: true },
        { "@type": "LocationFeatureSpecification", name: "Banheiro", value: true },
        { "@type": "LocationFeatureSpecification", name: "Atendimento com hora marcada", value: true },
      ],
      sameAs: [INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_PLACE_URL],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};
