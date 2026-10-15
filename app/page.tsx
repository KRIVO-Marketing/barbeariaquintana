import { Booking } from "@/components/Booking";
import { BookingProvider } from "@/components/BookingProvider";
import { Club } from "@/components/Club";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { History } from "@/components/History";
import { Location } from "@/components/Location";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Summary } from "@/components/Summary";
import { JSON_LD } from "@/lib/data";

export default function Home() {
  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />
      <main className="min-h-svh overflow-x-clip bg-cream text-ink">
        <Hero />
        <Summary />
        <History />
        <Services />
        <Club />
        <Booking />
        <Reviews />
        <Gallery />
        <Faq />
        <Location />
      </main>
      <Footer />
    </BookingProvider>
  );
}
