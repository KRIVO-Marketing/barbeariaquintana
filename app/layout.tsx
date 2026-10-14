import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Plus_Jakarta_Sans, Rye } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--f-jakarta",
  display: "swap",
});
const rye = Rye({ subsets: ["latin"], weight: "400", variable: "--f-rye", display: "swap" });
const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-caslon",
  display: "swap",
});

const DESCRIPTION =
  "Barbearia Quintana, desde 2016 no Jardim Aurélia, Campinas. Corte, barba e acabamento com hora marcada. Agende pelo WhatsApp (19) 99152-2327.";

export const metadata: Metadata = {
  title: "Barbearia Quintana · Barbearia no Jardim Aurélia, Campinas",
  description: DESCRIPTION,
  openGraph: {
    title: "Barbearia Quintana · Barbearia no Jardim Aurélia, Campinas",
    description: DESCRIPTION,
    locale: "pt_BR",
    type: "website",
  },
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
      <body className="min-h-svh bg-cream font-sans text-ink">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}[data-fill]{--p:100%!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
