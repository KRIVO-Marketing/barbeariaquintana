"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { SERVICES } from "@/lib/data";

type Ctx = { service: string; setService: (id: string) => void };
const BookingCtx = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [service, setService] = useState(SERVICES[0].id);
  return <BookingCtx.Provider value={{ service, setService }}>{children}</BookingCtx.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking fora do BookingProvider");
  return ctx;
}

export function scrollToBooking() {
  const el = document.getElementById("agendar");
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 12, behavior: "smooth" });
}
