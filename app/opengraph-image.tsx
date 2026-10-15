import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Barbearia Quintana, barbearia no Jardim Aurélia, Campinas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(path.join(process.cwd(), "public/logo-q.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 96px",
          background: "#2a211b",
          color: "#fcfaf7",
        }}
      >
        <img src={src} width={220} height={220} alt="" style={{ borderRadius: 110 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 88, lineHeight: 1.05, fontWeight: 700 }}>Barbearia Quintana</div>
          <div style={{ fontSize: 38, color: "#de8a6e" }}>Corte e barba · Jardim Aurélia, Campinas</div>
          <div style={{ fontSize: 30, color: "#a89a8c" }}>Desde 2016 · Agende pelo WhatsApp</div>
        </div>
      </div>
    ),
    size,
  );
}
