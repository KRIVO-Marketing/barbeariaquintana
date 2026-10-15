"use client";

import { ArrowPill } from "./ArrowPill";
import { scrollToBooking, useBooking } from "./BookingProvider";

export function BookButton({ serviceId, tone = "outline", className }: { serviceId: string; tone?: "outline" | "light"; className?: string }) {
  const { setService } = useBooking();
  return (
    <ArrowPill
      tone={tone}
      size="sm"
      className={className}
      data-track="select_service"
      data-track-label={serviceId}
      onClick={() => {
        setService(serviceId);
        scrollToBooking();
      }}
    >
      Agendar
    </ArrowPill>
  );
}
