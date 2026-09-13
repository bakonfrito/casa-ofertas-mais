import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, LogOut, Store, CheckCircle2, Smartphone, Gift, ShoppingCart, Flame, ArrowRight } from "lucide-react";

import logoAsset from "@/assets/logo-ofertas-lar-doce-lar.png.asset.json";

import produtoOrganizadorGavetas from "@/assets/casa-ofertas/produto-organizador-gavetas.jpg";
import produtoLuminariaLed from "@/assets/casa-ofertas/produto-luminaria-led.jpg";
import produtoPotesHermeticos from "@/assets/casa-ofertas/produto-potes-hermeticos.jpg";
import produtoFitaLedRgb from "@/assets/casa-ofertas/produto-fita-led-rgb.jpg";
import produtoSuporteMultiuso from "@/assets/casa-ofertas/produto-suporte-multiuso.jpg";
import produtoTapeteHigienico from "@/assets/casa-ofertas/produto-tapete-higienico.jpg";
import produtoOrganizadorCloset from "@/assets/casa-ofertas/produto-organizador-closet.jpg";
import produtoUtensiliosCozinha from "@/assets/casa-ofertas/produto-utensilios-cozinha.jpg";

const WHATSAPP_LINK = "https://chat.whatsapp.com/BB8fzz59ZKXIOvvy2tIQog?s=cl&p=a&mlu=4&ilr=4";
const PRODUCT_LINK = "https://meli.la/1d2LDEy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ofertas Lar Doce Lar | Ofertas e Cupons de Acessórios para Casa" },
      {
        name: "description",
        content:
          "Entre no grupo Ofertas Lar Doce Lar e receba os melhores preços e cupons exclusivos de acessórios para casa no Mercado Livre e Shopee. 100% gratuito.",
      },
      { property: "og:title", content: "Ofertas Lar Doce Lar | Ofertas e Cupons de Acessórios para Casa" },
      {
        property: "og:description",
        content:
          "Receba os melhores preços e cupons exclusivos de organizadores, iluminação, utensílios de cozinha e decoração.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <StoreBadges />
        <FeaturedOffers />
        <MiddleCta />
        <HowItWorks />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground">
          <img src={logoAsset.url} alt="Ofertas Lar Doce Lar" className="h-10 w-auto" />
          <span>Ofertas Lar Doce Lar</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-cta inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-cta-foreground transition-all hover:scale-[1.02] hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <MessageCircle className="h-4 w-4" />
          Entrar no Grupo
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-bg pb-20 pt-32 sm:pt-40">
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, color-mix(in oklab, var(--cta) 25%, transparent) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-hero-surface px-4 py-1.5 text-sm text-hero-muted">
              <Flame className="h-4 w-4 text-cta" />
              Grupo exclusivo no WhatsApp
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              CHEGA DE PAGAR CARO EM{" "}
              <span className="text-cta">ACESSÓRIOS PARA CASA!</span>
            </h1>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-cta blink-cta inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-cta-foreground transition-all hover:scale-[1.03] hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Flame className="h-5 w-5" />
                ENTRAR NA COMUNIDADE
              </a>
              <span className="text-sm text-hero-muted">É grátis. Saia quando quiser.</span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-hero-muted sm:text-lg">
              Entre na comunidade que descobre os melhores preços e cupons exclusivos de organizadores,
              iluminação, utensílios de cozinha e decoração — tudo vendido nas lojas oficiais do{" "}
              <strong className="text-foreground">Mercado Livre</strong> e{" "}
              <strong className="text-foreground">Shopee</strong>.
            </p>

          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl border border-border bg-hero-surface p-6">
              <div className="grid grid-cols-2 gap-4">
                <OfferCardCompact
                  image={produtoLuminariaLed}
                  title="Luminária LED de Mesa"
                  price="R$ 89,90"
                  oldPrice="R$ 159,90"
                  discount="-44%"
                  link={PRODUCT_LINK}
                />
                <OfferCardCompact
                  image={produtoPotesHermeticos}
                  title="Kit Potes Herméticos"
                  price="R$ 49,90"
                  oldPrice="R$ 99,90"
                  discount="-50%"
                  link={PRODUCT_LINK}
                />
                <OfferCardCompact
                  image={produtoFitaLedRgb}
                  title="Fita LED RGB 5m"
                  price="R$ 29,90"
                  oldPrice="R$ 69,90"
                  discount="-57%"
                  link={PRODUCT_LINK}
                />
                <OfferCardCompact
                  image={produtoUtensiliosCozinha}
                  title="Jogo de Utensílios"
                  price="R$ 39,90"
                  oldPrice="R$ 79,90"
                  discount="-50%"
                  link={PRODUCT_LINK}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferCardCompact({
  image,
  title,
  price,
  oldPrice,
  discount,
  link,
}: {
  image: string;
  title: string;
  price: string;
  oldPrice: string;
  discount: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card block overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-hero-bg">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" width={300} height={300} />
        <span className="absolute left-2 top-2 rounded-md bg-cta px-2 py-0.5 text-xs font-bold text-cta-foreground">
          {discount}
        </span>
      </div>
      <div className="p-3">
        <p className="truncate text-sm font-medium text-foreground">{title}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm font-bold text-cta">{price}</span>
          <span className="text-xs text-hero-muted line-through">{oldPrice}</span>
        </div>
      </div>
    </a>
  );
}


function TrustBadges() {
  const badges = [
    { icon: Gift, title: "100% GRATUITO", desc: "Sem mensalidade ou taxa de entrada" },
    { icon: LogOut, title: "Saia quando quiser", desc: "Sem compromisso, sem burocracia" },
    { icon: ShieldCheck, title: "Lojas oficiais", desc: "Divulgamos ofertas somente do Mercado Livre e Shopee" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {badges.map((b) => (
          <div
            key={b.title}
            className="surface-card flex flex-col items-center rounded-2xl p-6 text-center transition-colors hover:border-cta/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cta/10 text-cta">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">{b.title}</h3>
            <p className="mt-2 text-sm text-hero-muted">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StoreBadges() {
  return (
    <section className="border-y border-border bg-hero-surface py-12">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-hero-muted">Ofertas das maiores lojas do Brasil</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-bold text-foreground">
            <Store className="h-5 w-5 text-cta" />
            Mercado Livre
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-base font-bold text-foreground">
            <Store className="h-5 w-5 text-cta" />
            Shopee
          </span>
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    image: produtoOrganizadorGavetas,
    title: "Organizador de Gavetas Ajustável",
    oldPrice: "R$ 79,90",
    price: "R$ 39,90",
    discount: "-50%",
  },
  {
    image: produtoLuminariaLed,
    title: "Luminária LED de Mesa Moderna",
    oldPrice: "R$ 159,90",
    price: "R$ 89,90",
    discount: "-44%",
  },
  {
    image: produtoPotesHermeticos,
    title: "Kit 3 Potes Herméticos de Vidro",
    oldPrice: "R$ 99,90",
    price: "R$ 49,90",
    discount: "-50%",
  },
  {
    image: produtoFitaLedRgb,
    title: "Fita LED RGB 5m com Controle",
    oldPrice: "R$ 69,90",
    price: "R$ 29,90",
    discount: "-57%",
  },
  {
    image: produtoSuporteMultiuso,
    title: "Suporte Multiuso de Parede",
    oldPrice: "R$ 59,90",
    price: "R$ 29,90",
    discount: "-50%",
  },
  {
    image: produtoTapeteHigienico,
    title: "Tapete Higiênico Super Absorvente",
    oldPrice: "R$ 89,90",
    price: "R$ 44,90",
    discount: "-50%",
  },
  {
    image: produtoOrganizadorCloset,
    title: "Organizador de Closet Suspenso",
    oldPrice: "R$ 129,90",
    price: "R$ 69,90",
    discount: "-46%",
  },
  {
    image: produtoUtensiliosCozinha,
    title: "Jogo de Utensílios de Cozinha",
    oldPrice: "R$ 79,90",
    price: "R$ 39,90",
    discount: "-50%",
  },
];

function FeaturedOffers() {
  return (
    <section id="ofertas" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ofertas em destaque</h2>
        <p className="mx-auto mt-4 max-w-2xl text-hero-muted">
          Exemplos de produtos que já apareceram no grupo. Preços e itens são ilustrativos e podem ser editados pelo dono do site.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.title}
            className="surface-card group overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-cta/30"
          >
            <div className="relative aspect-square overflow-hidden bg-hero-bg">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={400}
                height={400}
              />
              <span className="absolute left-3 top-3 rounded-full bg-cta px-3 py-1 text-sm font-bold text-cta-foreground">
                {p.discount}
              </span>
            </div>
            <div className="p-5">
              <h3 className="min-h-[3rem] text-base font-semibold leading-snug text-foreground">{p.title}</h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-2xl font-bold text-cta">{p.price}</span>
                <span className="mb-1 text-sm text-hero-muted line-through">{p.oldPrice}</span>
              </div>
              <a
                href={PRODUCT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-cta mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-cta-foreground transition-all hover:bg-cta-hover"
              >
                Ver oferta no grupo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MiddleCta() {
  return (
    <section className="relative overflow-hidden bg-hero-surface py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--cta) 22%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Não perca a próxima oferta do seu acessório favorito
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-hero-muted">
          As melhores promoções de organizadores, iluminação e decoração chegam primeiro no nosso grupo.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-cta glow-cta mt-8 inline-flex items-center gap-2 rounded-full px-10 py-4 text-lg font-bold text-cta-foreground transition-all hover:scale-[1.03] hover:bg-cta-hover"
        >
          <MessageCircle className="h-5 w-5" />
          Entrar na Comunidade
        </a>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      step: "1",
      title: "Entre no grupo grátis",
      desc: "Clique no botão e faça parte da comunidade no WhatsApp em segundos.",
    },
    {
      icon: Gift,
      step: "2",
      title: "Receba ofertas todos os dias",
      desc: "Nossos membros compartilham os melhores preços e cupons exclusivos.",
    },
    {
      icon: ShoppingCart,
      step: "3",
      title: "Compre com desconto",
      desc: "Acesse os links oficiais do Mercado Livre e Shopee e finalize sua compra.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Como funciona</h2>
        <p className="mx-auto mt-4 max-w-2xl text-hero-muted">Três passos simples para começar a economizar.</p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <div key={s.step} className="relative flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10 text-cta">
              <s.icon className="h-7 w-7" />
            </div>
            <span className="absolute right-4 top-4 text-4xl font-black text-foreground/10">{s.step}</span>
            <h3 className="mt-6 text-xl font-bold text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-hero-muted">{s.desc}</p>
            {s.step !== "3" && (
              <div className="hidden lg:absolute lg:right-0 lg:top-1/2 lg:block lg:-translate-y-1/2 lg:translate-x-1/2">
                <ArrowRight className="h-6 w-6 text-cta" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-hero-bg py-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2 text-xl font-bold text-foreground">
          <span>🏠</span> Casa Ofertas
        </a>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-hero-muted">
          Casa Ofertas é um canal independente de divulgação de ofertas. Não somos afiliados oficiais do Mercado
          Livre ou da Shopee. Os preços e produtos exibidos são meramente ilustrativos e podem ser alterados a
          qualquer momento.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-hero-muted">
          <CheckCircle2 className="h-4 w-4 text-success" />
          Conteúdo 100% editável pelo administrador
        </div>
        <p className="mt-8 text-xs text-hero-muted">© {new Date().getFullYear()} Casa Ofertas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar no grupo do WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cta text-cta-foreground shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
