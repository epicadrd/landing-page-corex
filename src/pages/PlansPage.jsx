import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const whatsappUrl = "https://wa.me/18094061165";
const plansPageUrl = "https://aventrard.com/planes";
const socialImageUrl = "https://aventrard.com/og-aventra.jpg";

export default function PlansPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });

    document.title =
      "Planes y precios de Aventra | Facturación, inventario y POS";

    const updateMetaTag = (selector, attribute, value, content) => {
      let metaTag = document.querySelector(selector);

      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute(attribute, value);
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute("content", content);
    };

    updateMetaTag(
      'meta[name="description"]',
      "name",
      "description",
      "Conoce los planes y precios de Aventra desde US$20 al mes. Facturación electrónica e-CF, inventario, punto de venta POS, contabilidad y gestión para negocios en República Dominicana."
    );

    updateMetaTag(
      'meta[name="robots"]',
      "name",
      "robots",
      "index, follow, max-image-preview:large"
    );

    updateMetaTag(
      'meta[property="og:title"]',
      "property",
      "og:title",
      "Planes y precios de Aventra | Desde US$20 al mes"
    );

    updateMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      "Elige el plan de Aventra ideal para tu negocio. Facturación electrónica e-CF, inventario, POS, contabilidad y más."
    );

    updateMetaTag(
      'meta[property="og:type"]',
      "property",
      "og:type",
      "website"
    );

    updateMetaTag(
      'meta[property="og:url"]',
      "property",
      "og:url",
      plansPageUrl
    );

    updateMetaTag(
      'meta[property="og:image"]',
      "property",
      "og:image",
      socialImageUrl
    );

    updateMetaTag(
      'meta[property="og:image:alt"]',
      "property",
      "og:image:alt",
      "Planes y precios del sistema Aventra"
    );

    updateMetaTag(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      "Aventra"
    );

    updateMetaTag(
      'meta[property="og:locale"]',
      "property",
      "og:locale",
      "es_DO"
    );

    updateMetaTag(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image"
    );

    updateMetaTag(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      "Planes y precios de Aventra | Desde US$20 al mes"
    );

    updateMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      "Conoce los planes de facturación, inventario, POS y gestión empresarial de Aventra."
    );

    updateMetaTag(
      'meta[name="twitter:image"]',
      "name",
      "twitter:image",
      socialImageUrl
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", plansPageUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Aventra",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: plansPageUrl,
      image: socialImageUrl,
      description:
        "Planes de facturación electrónica e-CF, inventario, punto de venta POS, contabilidad y gestión empresarial para negocios en República Dominicana.",
      provider: {
        "@type": "Organization",
        name: "ÉPICA SRL",
        url: "https://aventrard.com/",
        email: "contacto@aventrard.com",
        telephone: "+1-809-406-1165",
        address: {
          "@type": "PostalAddress",
          addressCountry: "DO",
        },
      },
      offers: [
        {
          "@type": "Offer",
          name: "Plan Básico",
          price: "20",
          priceCurrency: "USD",
          url: plansPageUrl,
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Plan PyME",
          price: "45",
          priceCurrency: "USD",
          url: plansPageUrl,
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Plan Pro",
          price: "94",
          priceCurrency: "USD",
          url: plansPageUrl,
          availability: "https://schema.org/InStock",
        },
      ],
    };

    let structuredDataScript = document.querySelector(
      'script[data-seo="aventra-plans"]'
    );

    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.type = "application/ld+json";
      structuredDataScript.setAttribute("data-seo", "aventra-plans");
      document.head.appendChild(structuredDataScript);
    }

    structuredDataScript.textContent = JSON.stringify(structuredData);

    return () => {
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, []);

  const plans = [
    {
      name: "Básico",
      amount: "US$ 20",
      items: [
        "Facturas",
        "Cotizaciones",
        "Recibos",
        "Contabilidad básica",
        "2 usuarios",
        "e-CF",
      ],
    },
    {
      name: "PyME",
      amount: "US$ 45",
      items: [
        "Todo del básico",
        "Inventario completo",
        "Catálogo digital",
        "1 punto de venta con hardware",
        "3 usuarios",
        "Registro de actividades",
      ],
    },
    {
      name: "Pro",
      amount: "US$ 94",
      items: [
        "Todo en PyME",
        "6 usuarios",
        "2 puntos de venta con hardware",
        "Conduces",
        "Órdenes de compra",
        "Gestión de proveedores",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black overflow-hidden selection:bg-[#14c8bb]/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#14c8bb22,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)]" />

      <div className="relative z-10">
        <header className="border-b border-black/5 bg-white/85 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/IconoAventra.png"
                alt="Logo de Aventra"
                className="w-11 h-11 object-contain"
              />

              <div>
                <p className="font-black leading-none text-lg">Aventra</p>
                <p className="text-xs mt-1 text-slate-500">
                  Facturación • Inventario • Ventas
                </p>
              </div>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black hover:bg-slate-50 transition"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div
            data-aos="fade-up"
            className="text-center max-w-4xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14c8bb]/30 bg-[#14c8bb]/10 px-4 py-2 text-sm text-[#0f766e] mb-7 font-bold">
              <Sparkles size={16} />
              Planes flexibles para negocios
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              Planes y precios para gestionar mejor tu negocio.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed">
              Elige el plan de facturación, inventario y punto de venta que
              mejor se adapte a tu empresa. Empieza desde US$20 al mes y escala
              cuando tu negocio crezca.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {plans.map(({ name, amount, items }, index) => (
              <article
                key={name}
                data-aos="flip-left"
                data-aos-delay={index * 120}
                className={`rounded-[2rem] border p-7 shadow-sm ${
                  index === 1
                    ? "bg-black text-white border-black shadow-2xl scale-[1.02]"
                    : "bg-white border-black/5"
                }`}
              >
                {index === 1 && (
                  <p className="inline-flex rounded-full bg-[#14c8bb] text-black px-4 py-1.5 text-xs font-black mb-5">
                    Más recomendado
                  </p>
                )}

                <h2 className="text-3xl font-black">{name}</h2>

                <p className="text-4xl font-black mt-6">{amount}</p>

                <p
                  className={
                    index === 1
                      ? "text-slate-300 text-sm mt-1"
                      : "text-slate-500 text-sm mt-1"
                  }
                >
                  mensual
                </p>

                <ul className="mt-7 space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={20}
                        className={
                          index === 1 ? "text-[#14c8bb]" : "text-[#0f766e]"
                        }
                      />

                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${whatsappUrl}?text=${encodeURIComponent(
                    `Hola, deseo recibir más información sobre el plan ${name} de Aventra.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Solicitar información sobre el plan ${name}`}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-black transition ${
                    index === 1
                      ? "bg-white text-black hover:bg-slate-100"
                      : "bg-black text-white hover:bg-slate-800"
                  }`}
                >
                  Quiero este plan
                  <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}