import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { PHONE_LABEL, WHATSAPP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de Privacidade · Barbearia Quintana",
  description: "Como a Barbearia Quintana trata os dados pessoais de quem visita o site e agenda horários.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function Page() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Esta política explica quais dados pessoais a Barbearia Quintana trata quando você visita este site ou agenda um horário, para quê, e quais são os seus direitos, conforme a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018)."
    >
      <section>
        <h2>1. Quem é o responsável</h2>
        <p>
          A responsável pelo tratamento dos seus dados é a Barbearia Quintana, com sede na Av. Nossa Senhora da
          Consolação, 821, Jardim Aurélia, Campinas - SP, CEP 13033-140.
        </p>
        <p>
          Contato para assuntos de privacidade: WhatsApp{" "}
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
            {PHONE_LABEL}
          </a>
          .
        </p>
      </section>

      <section>
        <h2>2. Quais dados tratamos</h2>
        <ul>
          <li>
            <strong>Dados que você informa:</strong> ao montar um agendamento no site, o serviço, o dia, o horário e,
            se quiser, seu nome. Esses dados só saem do site quando você clica para enviar a mensagem pelo WhatsApp.
            Se você contratar um pacote do Clube Quintana, tratamos também os dados necessários para o pacote.
          </li>
          <li>
            <strong>Dados de navegação (somente com seu consentimento):</strong> páginas visitadas, seções vistas,
            cliques em botões como Agendar e WhatsApp, tipo de dispositivo e navegador, origem do acesso e
            localização aproximada, coletados por cookies e tecnologias semelhantes.
          </li>
          <li>
            <strong>Dados técnicos básicos</strong> (como endereço IP e registros de acesso), tratados pela
            hospedagem do site para entrega e segurança.
          </li>
        </ul>
        <p>Não coletamos dados sensíveis, e este site não tem cadastro, login nem pagamento online.</p>
      </section>

      <section>
        <h2>3. Para que usamos e em qual base legal</h2>
        <ul>
          <li>Responder pedidos de agendamento e atender você: execução de contrato ou de procedimentos preliminares (LGPD, art. 7º, V).</li>
          <li>Manter registro do atendimento e cumprir obrigações legais: obrigação legal (art. 7º, II).</li>
          <li>Entender o uso do site e melhorar a experiência: seu consentimento (art. 7º, I).</li>
          <li>Medir o resultado de anúncios e melhorar a divulgação: seu consentimento (art. 7º, I).</li>
        </ul>
        <p>
          Os cookies não essenciais só são ativados depois que você aceita. Você pode mudar de ideia a qualquer
          momento em “Preferências de cookies”, no rodapé do site.
        </p>
      </section>

      <section>
        <h2>4. Com quem compartilhamos</h2>
        <p>Não vendemos seus dados. Eles podem passar por prestadores que viabilizam o serviço:</p>
        <ul>
          <li>
            <strong>WhatsApp (Meta):</strong> quando você envia o agendamento, a conversa passa a ser regida
            também pelos termos e pela política de privacidade do WhatsApp.
          </li>
          <li>
            <strong>Google (Analytics e Maps):</strong> estatísticas de uso, caso você aceite, e o mapa exibido na
            seção de localização.
          </li>
          <li>
            <strong>Meta (Pixel):</strong> medição de anúncios, caso você aceite os cookies de marketing.
          </li>
          <li>
            <strong>Hospedagem e desenvolvimento do site:</strong> empresas que mantêm o site no ar, sob dever de
            confidencialidade.
          </li>
        </ul>
        <p>
          Alguns desses prestadores podem armazenar dados em servidores fora do Brasil. Nesses casos, buscamos
          fornecedores que adotem garantias adequadas, conforme a LGPD.
        </p>
      </section>

      <section>
        <h2>5. Por quanto tempo guardamos</h2>
        <p>
          Mantemos os dados pelo tempo necessário para as finalidades acima e para cumprir obrigações legais. A
          sua escolha de cookies fica guardada por 6 meses. Os dados de estatísticas seguem os prazos
          configurados nas ferramentas de análise.
        </p>
      </section>

      <section>
        <h2>6. Seus direitos</h2>
        <p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
        <ul>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
          <li>portabilidade dos dados;</li>
          <li>informação sobre com quem compartilhamos os dados;</li>
          <li>revogação do consentimento, sem prejudicar o que já foi tratado até então.</li>
        </ul>
        <p>
          Para exercer qualquer direito, fale conosco pelo WhatsApp {PHONE_LABEL}. Você também pode reclamar à
          Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </section>

      <section>
        <h2>7. Cookies</h2>
        <p>
          O uso de cookies está detalhado na <Link href="/politica-de-cookies">Política de Cookies</Link>.
        </p>
      </section>

      <section>
        <h2>8. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados, como conexão segura
          (HTTPS) e acesso restrito. Nenhum sistema é totalmente imune a riscos, mas tratamos qualquer incidente
          conforme a lei.
        </p>
      </section>

      <section>
        <h2>9. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta política. A data da última atualização fica no topo desta página, e mudanças
          relevantes serão destacadas no site.
        </p>
      </section>
    </LegalPage>
  );
}
