import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Barbearia Quintana",
    short_name: "Quintana",
    description: "Barbearia no Jardim Aurélia, Campinas. Corte, barba e Clube Quintana com hora marcada.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfaf7",
    theme_color: "#2a211b",
    lang: "pt-BR",
    icons: [{ src: "/icon.png", sizes: "150x150", type: "image/png" }],
  };
}
