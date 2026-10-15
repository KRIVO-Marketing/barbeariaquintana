"use client";

import type { ReactNode } from "react";
import { scrollToBooking, useBooking } from "./BookingProvider";

/** Botão que seleciona o serviço e leva ao formulário de agendamento. */
export function BookLink({
  serviceId,
  className,
  children,
}: {
  serviceId: string;
  className?: string;
  children: ReactNode;
}) {
  const { setService } = useBooking();
  return (
    <button
      type="button"
      className={className}
      data-track="select_service"
      data-track-label={serviceId}
      onClick={() => {
        setService(serviceId);
        scrollToBooking();
      }}
    >
      {children}
    </button>
  );
}
