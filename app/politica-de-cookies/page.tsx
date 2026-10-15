import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { OpenCookieSettings } from "@/components/OpenCookieSettings";

export const metadata: Metadata = {
  title: "Política de Cookies · Barbearia Quintana",
  description: "Quais cookies o site da Barbearia Quintana usa, para quê e como gerenciar suas preferências.",
  alternates: { canonical: "/politica-de-cookies" },
};

const ROWS: [string, string, string, string, string][] = [
  ["quintana_consent", "Necessário", "Barbearia Quintana", "Guarda a sua escolha de cookies.", "6 meses"],
  ["_ga, _ga_*", "Estatísticas", "Google Analytics", "Distingue visitantes e mede o uso do site.", "até 2 anos"],
  ["_fbp", "Marketing", "Meta (Pixel)", "Identifica o navegador para medir anúncios.", "até 3 meses"],
];

export default function Page() {
  return (
    <LegalPage
      title="Política de Cookies"
      intro="Cookies são pequenos arquivos guardados no seu navegador. Aqui explicamos quais usamos no site da Barbearia Quintana, para que servem e como você controla cada um."
    >
      <section>
        <h2>1. Como funciona aqui</h2>
        <p>
          Só o cookie necessário é usado desde o início. Os de estatísticas e de marketing ficam desligados até
          você aceitar, e você pode recusar sem perder nenhuma função do site.
        </p>
        <p className="!mt-4">
          <OpenCookieSettings />
        </p>
      </section>

      <section>
        <h2>2. Categorias</h2>
        <ul>
          <li>
            <strong>Necessários:</strong> permitem que o site lembre da sua decisão sobre cookies. Não podem ser
            desligados.
          </li>
          <li>
            <strong>Estatísticas:</strong> mostram como o site é usado, como páginas e seções vistas e cliques em
            Agendar e WhatsApp, para melhorarmos o conteúdo.
          </li>
          <li>
            <strong>Marketing:</strong> medem o resultado dos anúncios da barbearia no Instagram e no Facebook.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Cookies utilizados</h2>
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
            <thead className="bg-sand text-ink">
              <tr>
                {["Cookie", "Categoria", "Origem", "Finalidade", "Duração"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r[0]} className="border-t border-line align-top">
                  {r.map((c, i) => (
                    <td key={i} className="px-4 py-3">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="!mt-4">
          Os cookies de estatísticas e marketing só existem se estiverem ativados pela barbearia e se você
          aceitar. Os nomes e prazos podem variar conforme as ferramentas atualizam seus sistemas.
        </p>
      </section>

      <section>
        <h2>4. Conteúdo de terceiros</h2>
        <p>
          O mapa da seção de localização é fornecido pelo Google Maps, que pode registrar dados de acesso conforme
          a política de privacidade do Google. Os botões que abrem o WhatsApp, o Instagram e a página de
          avaliações do Google levam você a sites de terceiros, com políticas próprias.
        </p>
      </section>

      <section>
        <h2>5. Como mudar ou revogar sua escolha</h2>
        <ul>
          <li>Use “Preferências de cookies” no rodapé do site, a qualquer momento.</li>
          <li>
            Ou apague os cookies nas configurações do seu navegador. Depois disso, o aviso volta a aparecer.
          </li>
        </ul>
        <p>
          Ao revogar o consentimento, limpamos os cookies de estatísticas e marketing e recarregamos a página.
        </p>
      </section>

      <section>
        <h2>6. Mais informações</h2>
        <p>
          Veja também a <Link href="/politica-de-privacidade">Política de Privacidade</Link> para saber como
          tratamos seus dados pessoais e como exercer seus direitos.
        </p>
      </section>
    </LegalPage>
  );
}
