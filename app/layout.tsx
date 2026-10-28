import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Plus_Jakarta_Sans, Rye } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { ConsentProvider } from "@/components/ConsentProvider";
import { CookieBanner } from "@/components/CookieBanner";
import { CONSENT_MODE_SCRIPT } from "@/lib/consent-mode";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const GTM_ID = "GTM-N777QPFQ";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-jakarta",
  display: "swap",
});
const rye = Rye({ subsets: ["latin"], weight: "400", variable: "--f-rye", display: "swap", preload: false });
const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-caslon",
  display: "swap",
});

const TITLE = "Barbearia em Campinas | Corte e Barba no Jardim Aurélia · Quintana";
const DESCRIPTION =
  "Barbearia no Jardim Aurélia, em Campinas: corte, barba e Clube Quintana com hora marcada. Tradição de avô para neto desde 2016. Agende pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Barbearia Quintana",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FCFAF7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${rye.variable} ${caslon.variable}`}>
      <head>
        {/* Consent Mode v2: precisa vir ANTES do GTM. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_SCRIPT }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-svh bg-cream font-sans text-ink">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}[data-fill]{--p:100%!important}`}</style>
        </noscript>
        <ConsentProvider>
          {children}
          <CookieBanner />
          <Analytics />
        </ConsentProvider>
      </body>
    </html>
  );
}
