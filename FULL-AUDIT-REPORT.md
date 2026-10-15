# Auditoria SEO / AEO / GEO / Performance: Barbearia Quintana

- **Escopo:** build local de produção (`next build` + `next start`), HTML renderizado e código-fonte. O site ainda não tem domínio de produção informado.
- **Data:** 15/10/2026
- **Tipo de negócio:** serviço local (barbearia, Campinas-SP)
- **Nota estimada: 58/100.** É estimativa de laboratório sobre o código. Não há dados de campo (CrUX/PageSpeed), Search Console nem Google Business Profile, então a categoria Performance não foi medida.

## O que já está bom

- HTML estático pré-renderizado, com `lang="pt-BR"`, viewport, um único H1 e hierarquia H2 coerente.
- Conteúdo, preços e FAQ ficam no HTML (o FAQ só é recolhido por CSS), então rastreadores e IAs leem tudo.
- Imagem do hero com `priority` e preload, formatos AVIF/WebP, imagens abaixo da dobra com lazy-load, mapa em iframe lazy.
- Fontes self-hosted via `next/font`. Scripts de GA e Meta só carregam após consentimento, sem custo para quem recusa.
- JSON-LD `BarberShop` com endereço, horário, telefone, nota e FAQ.

## Crítico

**C1. Sem `robots.txt` e sem `sitemap.xml` (ambos retornam 404).**
- Observação: `curl /robots.txt` e `/sitemap.xml` retornam 404.
- Ação: criar `app/robots.ts` e `app/sitemap.ts` (home, privacidade e cookies), com o sitemap referenciado no robots.
- Falhou se: o Search Console não listar o sitemap como "Sucesso" em até 1 semana.
- Indicador antecedente: páginas indexadas no Search Console.

**C2. Fotos são de banco de imagens (Unsplash) com legendas que afirmam ser da barbearia.**
- Observação: alts como "Retrato do avô na parede da barbearia", "A sala antes da reforma" e "Fachada da barbearia" apontam para fotos genéricas, com selo "Foto via Unsplash" visível. Isso derruba confiança (E-E-A-T), engajamento e o sinal local, e pode enganar o visitante.
- Ação: substituir por fotos reais de Gustavo/João: fachada, cadeira, o barbeiro, cortes feitos. Salvar em `/public` (AVIF/WebP), com alt descritivo verdadeiro. Depois remover o crédito Unsplash.
- Falhou se: as fotos reais não aumentarem cliques em Agendar/WhatsApp (evento já rastreado).
- Indicador antecedente: taxa de clique no WhatsApp por visita.

## Alto

**A1. Sem domínio canônico, `metadataBase`, canonical nem imagem de compartilhamento.**
- Observação: não há `<link rel="canonical">` nem `og:image`; `twitter:card` está como `summary` sem imagem.
- Ação: definir `metadataBase` com o domínio real, `alternates.canonical`, `og:url`, `og:image` (1200×630 com logo e fachada) e `twitter:card=summary_large_image`.
- Dependência: precisa do domínio final.
- Falhou se: o link colado no WhatsApp/Instagram não mostrar a prévia com imagem.

**A2. H1 e título não carregam a palavra-chave nem a cidade.**
- Observação: o H1 é "Seu corte, na hora marcada."; "Campinas" só aparece no parágrafo abaixo. O title é "Barbearia Quintana · Barbearia no Jardim Aurélia, Campinas".
- Ação: manter a copy de marca no H1 e acrescentar acima ou abaixo um subtítulo/kicker com "Barbearia em Campinas · Jardim Aurélia". Title sugerido: "Barbearia em Campinas | Corte e Barba no Jardim Aurélia · Quintana" (até ~60 caracteres).
- Falhou se: a posição para "barbearia jardim aurélia / barbearia campinas" não melhorar em 4-8 semanas.

**A3. Dados estruturados curtos.**
- Observação: o JSON-LD não tem `url`, `@id`, `image`/`logo`, `geo`, `hasMap`, `areaServed`, catálogo de serviços com preços, nem o Clube. A nota 4,9 / 44 avaliações está fixa no código e vai ficar desatualizada.
- Ação: adicionar `url`, `@id`, `image`, `logo`, `geo`, `hasMap`, `sameAs` (Instagram + perfil do Google Maps), `hasOfferCatalog` com os 10 serviços e preços, os 6 pacotes do clube como `Offer`, e `founder` como `Person`. Manter `aggregateRating` coerente com a nota atual do Google.
- Observação sobre FAQPage: o Google parou de exibir rich results de FAQ em 7/05/2026. É informativo: manter, sem esperar ganho de SERP ou citação.
- Falhou se: o Teste de Resultados Rich / Schema Validator acusar erro, ou a nota do JSON-LD divergir da exibida na página.

**A4. Falta um bloco de resposta direta para o resumo de IA (AI Overviews/Gemini).**
- Observação: não há um trecho curto e autossuficiente com endereço, horário, preços principais e como agendar. Essas informações estão espalhadas em seções.
- Ação: criar uma seção "Em resumo" com ~130-160 palavras perto do topo, por exemplo: "A Barbearia Quintana fica na Av. Nossa Senhora da Consolação, 821, Jardim Aurélia, Campinas. Abre de terça a sábado, das 8h às 19h. Corte de cabelo R$ 60, barba R$ 60, cabelo e barba R$ 115. Agende pelo WhatsApp (19) 99152-2327." Escrever em texto corrido, não só em cards.
- Falhou se: a página não for citada para "quanto custa corte de cabelo em Campinas" após indexação.
- Aviso honesto: AI Overviews usam os mesmos sistemas do Google Search. Não há como garantir citação.

**A5. Google Business Profile é a maior alavanca para busca local e para a resposta do Gemini.**
- Observação: não verificado (sem acesso ao perfil). O site já usa o `place_id` ChIJCb-LrdrJyJQRS_iGaQnf6BM.
- Ação: no perfil, conferir categoria principal "Barbearia", serviços com preços (igual ao site), horário, fotos reais, link para o site, perguntas e respostas, posts quinzenais, e responder todas as avaliações. Manter nome, endereço e telefone idênticos ao site (NAP).
- Indicador antecedente: visualizações e ligações/rotas no perfil.

## Médio

**M1. Performance do LCP.**
- Observação: a imagem principal (Unsplash, `w=2000`) passa pelo otimizador do Next em cada novo tamanho, buscando em origem externa. A primeira visita fria paga esse custo. O HTML tem ~137 KB sem compressão (muito texto de classes Tailwind e payload RSC).
- Ação: com a foto real em `/public`, usar `priority` e `fetchPriority="high"`, e um `placeholder="blur"`. Confirmar compressão gzip/brotli no host.
- Meta: LCP ≤ 2,5 s no mobile (a medir no PageSpeed Insights após o deploy). INP ≤ 200 ms e CLS ≤ 0,1: não medidos.

**M2. Fontes.**
- Observação: Plus Jakarta Sans carrega 4 pesos (300/400/500/600) e há mais duas famílias (Rye e Libre Caslon). Os pesos 300 e 600 podem não estar em uso.
- Ação: auditar o uso e remover pesos sobrando. Não verificado quais classes usam `font-light`/`font-semibold`.

**M3. Mapa do Google.**
- Observação: o iframe é lazy, mas carrega scripts e cookies do Google ao entrar na tela, sem consentimento.
- Ação: trocar por uma "fachada" (imagem com botão "Ver mapa") que só carrega o iframe após clique/consentimento. Melhora performance e conformidade.

**M4. Ícones e manifesto.**
- Observação: só existe `favicon.ico`. Sem `icon.png`, `apple-icon` nem `manifest`.
- Ação: gerar a partir de `logo-q.png` (já em `/public`).

**M5. FAQ e conteúdo para perguntas reais.**
- Observação: há 6 perguntas, bem escritas. Faltam as que as pessoas pesquisam: formas de pagamento, estacionamento, atende crianças, como funciona o Clube.
- Ação: adicionar somente o que o cliente confirmar (não inventar). Cada resposta com 40-80 palavras, direta.
- Falhou se: as perguntas novas não gerarem impressões no Search Console.

**M6. Presença fora do site (GEO).**
- Observação: só o Instagram está no `sameAs`.
- Ação: manter perfis consistentes (Google Maps, Instagram, Facebook, Apple Maps, Bing Places, diretórios locais). Fontes independentes que mencionem a barbearia reforçam a entidade.

## Baixo

- **B1.** `llms.txt` não é hoje alavanca de citação no Google. Pode ser criado por conveniência, sem prioridade.
- **B2.** Definir no `robots.txt` o que fazer com crawlers de IA (OAI-SearchBot, PerplexityBot, ClaudeBot, GPTBot). Decisão do cliente: permitir aumenta chance de aparecer em respostas de IA.
- **B3.** Usar a tag semântica `<address>` no bloco de localização.
- **B4.** Páginas de política já são indexáveis. Considerar manter fora do foco (sem destaque no sitemap) ou `noindex`, a critério do cliente.
- **B5.** Se o cliente quiser crescer em busca, páginas separadas por serviço (ex.: "Barba na navalha em Campinas") só valem se tiverem conteúdo próprio e útil. Evitar páginas-cópia por bairro (risco de doorway).

## Plano em ordem de dependência

1. Definir o domínio de produção. Destrava A1, C1 e todo o resto.
2. C1 (robots, sitemap) e A1 (canonical, og:image, metadataBase).
3. C2 (fotos reais). Destrava M1 e a prévia de compartilhamento.
4. A2 (H1/title), A3 (JSON-LD completo) e A4 (bloco "Em resumo").
5. A5 (Google Business Profile), em paralelo e sem código.
6. M1-M4 (performance, fontes, mapa, ícones).
7. Medir: PageSpeed Insights, Search Console, eventos do site (WhatsApp, Agendar, Clube).

## Não verificado

- Domínio e HTTPS de produção, cabeçalhos reais do host e compressão.
- Core Web Vitals de campo (CrUX) e posições atuais no Google.
- Conteúdo do Google Business Profile e consistência de NAP em diretórios.
- Se a nota 4,9 / 44 avaliações ainda bate com o Google.
