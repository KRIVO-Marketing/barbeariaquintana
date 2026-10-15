export const WHATSAPP = "5519991522327";
export const PHONE_LABEL = "(19) 99152-2327";
export const PHONE_TEL = "+5519991522327";
export const INSTAGRAM_URL = "https://www.instagram.com/barbearia_quintana/";
export const GOOGLE_PLACE_ID = "ChIJCb-LrdrJyJQRS_iGaQnf6BM";
export const GOOGLE_PLACE_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`;
export const GOOGLE_REVIEW_URL = "https://g.page/r/CUv4hmkJ3-gTEBM/review";
export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Barbearia+Quintana+Av.+Nossa+Senhora+da+Consola%C3%A7%C3%A3o+821+Campinas";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Nossa+Senhora+da+Consola%C3%A7%C3%A3o,+821,+Campinas+-+SP&output=embed";

/** Vídeo opcional do hero (loop horizontal). Vazio = usa a foto. */
export const HERO_VIDEO = "";

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: u("1585747860715-2ba37e788b70", 2000),
  avo: u("1567894340315-735d7c361db0"),
  antes: u("1517832606299-7ae9b720a186"),
  g1: u("1503951914875-452162b0f3f1"),
  g2: u("1622286342621-4bd786c2447c"),
  g3: u("1599351431202-1e0f0137899a"),
  g4: u("1512690459411-b9245aed614b"),
};

export type Service = {
  id: string;
  name: string;
  price: string;
  duration: string;
  img: string;
  alt: string;
  desc: string;
};

export const SERVICES: Service[] = [
  {
    id: "corte",
    name: "Corte",
    price: "R$ 60",
    duration: "45 min",
    img: u("1621605815971-fbc98d665033"),
    alt: "Corte de cabelo sendo finalizado com máquina",
    desc: "Tesoura e máquina, lavagem e finalização com pomada ou óleo.",
  },
  {
    id: "barba",
    name: "Barba",
    price: "R$ 50",
    duration: "30 min",
    img: u("1605497788044-5a32c7078486"),
    alt: "Barba sendo feita na navalha",
    desc: "Toalha quente, navalha e balm, com o desenho respeitando o seu rosto.",
  },
  {
    id: "combo",
    name: "Corte e barba",
    price: "R$ 100",
    duration: "1h15",
    img: u("1593702275687-f8b402bf1fb5"),
    alt: "Cliente com corte e barba feitos",
    desc: "Os dois serviços na mesma cadeira, com o ritual completo de toalha quente.",
  },
  {
    id: "acabamento",
    name: "Acabamento",
    price: "R$ 25",
    duration: "15 min",
    img: u("1634449571010-02389ed0f9b0"),
    alt: "Contorno e pezinho sendo alinhados",
    desc: "Contorno e pezinho para manter o corte entre uma visita e outra.",
  },
];

export const PILLARS = [
  { t: "Navalha e toalha quente", d: "As técnicas que vieram do avô, em cada barba." },
  { t: "Hora marcada", d: "Você chega e é atendido, sem fila." },
  { t: "Ar-condicionado e café", d: "E música boa enquanto você está na cadeira." },
];

export const REVIEWS = [
  { name: "Gabriel Moura", text: "Ambiente muito agradável, com ar condicionado, café e música boa." },
  { name: "Gabriel Martins", text: "O dono é muito profissional, ambiente limpo e materiais de qualidade." },
  { name: "Marcos Rogério C. Monteiro", text: "Ótimo atendimento, espaço agradável, excelente trabalho." },
];

export const FAQS: [string, string][] = [
  [
    "Quanto custa um corte de cabelo na Barbearia Quintana?",
    "O corte custa R$ 60. Os valores de barba, corte e barba e acabamento estão na seção de serviços.",
  ],
  [
    "Como agendar um horário?",
    "Pelo WhatsApp (19) 99152-2327. Aqui no site você escolhe serviço, dia e horário de preferência e a mensagem já vai pronta.",
  ],
  [
    "Qual o horário de funcionamento?",
    "De terça a sábado, das 8h às 19h. Domingo e segunda a barbearia fica fechada.",
  ],
  [
    "Onde fica a barbearia em Campinas?",
    "Av. Nossa Senhora da Consolação, 821, Jardim Aurélia, Campinas - SP, CEP 13033-140.",
  ],
  [
    "Quanto tempo dura o atendimento?",
    "O corte leva cerca de 45 minutos. Corte e barba, cerca de 1h15.",
  ],
  [
    "Preciso agendar ou posso ir direto?",
    "O atendimento é com hora marcada, para que você não espere. Se houver horário livre, encaixamos.",
  ],
];

export const TIMES = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
];

export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BarberShop",
      name: "Barbearia Quintana",
      foundingDate: "2016",
      founder: "João Navero Quintana",
      telephone: "+55 19 99152-2327",
      priceRange: "R$ 60",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Nossa Senhora da Consolação, 821",
        addressLocality: "Campinas",
        addressRegion: "SP",
        postalCode: "13033-140",
        addressCountry: "BR",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "44" },
      sameAs: [INSTAGRAM_URL],
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
