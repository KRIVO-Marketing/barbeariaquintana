"use client";

import { ArrowPill } from "./ArrowPill";
import { scrollToBooking, useBooking } from "./BookingProvider";

export function BookButton({ serviceId }: { serviceId: string }) {
  const { setService } = useBooking();
  return (
    <ArrowPill
      tone="outline"
      size="sm"
      onClick={() => {
        setService(serviceId);
        scrollToBooking();
      }}
    >
      Agendar
    </ArrowPill>
  );
}
