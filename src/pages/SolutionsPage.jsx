import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  Sparkles,
  Store,
  Truck,
} from "lucide-react";

const whatsappUrl = "https://wa.me/18094061165";
const solutionsPageUrl = "https://aventrard.com/soluciones";
const socialImageUrl = "https://aventrard.com/og-aventra.jpg";

export default function SolutionsPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });

    document.title =
      "Soluciones para negocios en RD | Facturación, inventario y POS";

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
      "Descubre las soluciones de Aventra para tiendas, distribuidoras, suplidores y empresas de servicios en República Dominicana. Facturación electrónica e-CF, inventario, POS, clientes y control administrativo."
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
      "Soluciones de Aventra para negocios en República Dominicana"
    );

    updateMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      "Gestiona ventas, inventario, facturación electrónica e-CF, clientes, cobros y operaciones desde una sola plataforma."
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
      solutionsPageUrl
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
      "Soluciones de facturación, inventario y punto de venta de Aventra"
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
      "Soluciones de Aventra para negocios en RD"
    );

    updateMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      "Facturación electrónica e-CF, inventario, POS, clientes, cobros y control administrativo para negocios dominicanos."
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

    canonicalLink.setAttribute("href", solutionsPageUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Soluciones empresariales de Aventra",
      url: solutionsPageUrl,
      image: socialImageUrl,
      description:
        "Soluciones de facturación electrónica e-CF, inventario, punto de venta POS, clientes, cuentas por cobrar y gestión administrativa para negocios en República Dominicana.",
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
      areaServed: {
        "@type": "Country",
        name: "República Dominicana",
      },
      serviceType: [
        "Sistema de facturación electrónica e-CF",
        "Sistema de inventario",
        "Punto de venta POS",
        "Gestión de clientes",
        "Cuentas por cobrar",
        "Gestión administrativa",
      ],
      audience: [
        {
          "@type": "Audience",
          audienceType: "Tiendas",
        },
        {
          "@type": "Audience",
          audienceType: "Distribuidoras",
        },
        {
          "@type": "Audience",
          audienceType: "Suplidores",
        },
        {
          "@type": "Audience",
          audienceType: "Empresas de servicios",
        },
      ],
    };

    let structuredDataScript = document.querySelector(
      'script[data-seo="aventra-solutions"]'
    );

    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.type = "application/ld+json";
      structuredDataScript.setAttribute(
        "data-seo",
        "aventra-solutions"
      );
      document.head.appendChild(structuredDataScript);
    }

    structuredDataScript.textContent = JSON.stringify(structuredData);

    return () => {
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, []);

  const solutions = [
    {
      icon: Store,
      title: "Solución para tiendas",
      shortTitle: "Tiendas",
      text: "Controla ventas, inventario, clientes, facturas electrónicas e-CF y recibos desde una sola plataforma.",
      items: [
        "Inventario y stock organizado",
        "Facturación rápida",
        "Clientes e historial de compras",
      ],
    },
    {
      icon: Building2,
      title: "Solución para distribuidoras",
      shortTitle: "Distribuidoras",
      text: "Gestiona productos, conduces, cuentas por cobrar, clientes y reportes para operar con mayor control.",
      items: [
        "Conduces y despachos",
        "Cuentas por cobrar",
        "Reportes de ventas",
      ],
    },
    {
      icon: Truck,
      title: "Solución para suplidores",
      shortTitle: "Suplidores",
      text: "Organiza pedidos, entregas, compras, clientes, documentos y balances pendientes con mayor claridad.",
      items: [
        "Despachos organizados",
        "Órdenes y documentos",
        "Historial de clientes",
      ],
    },
    {
      icon: CreditCard,
      title: "Solución para empresas de servicios",
      shortTitle: "Servicios",
      text: "Crea cotizaciones, conviértelas en facturas, registra pagos y administra tus servicios sin complicaciones.",
      items: [
        "Cotizaciones profesionales",
        "Facturación electrónica",
        "Registro y control de pagos",
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14c8bb]/30 bg-[#14c8bb]/10 px-4 py-2 text-sm text-[#0f766e] mb-7 font-bold">
              <Sparkles size={16} />
              Soluciones para diferentes tipos de negocio
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              Soluciones de facturación, inventario y POS para negocios en RD.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed">
              Aventra ayuda a tiendas, distribuidoras, suplidores y empresas de
              servicios a controlar ventas, inventario, clientes, cobros y
              documentos desde una sola plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              const whatsappMessage = encodeURIComponent(
                `Hola, deseo solicitar una demo de Aventra para ${solution.shortTitle.toLowerCase()}.`
              );

              return (
                <article
                  key={solution.title}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 120}
                  className="rounded-[2rem] border border-black/5 bg-white p-7 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#14c8bb]/15 text-[#0f766e] flex items-center justify-center mb-6">
                    <Icon size={30} />
                  </div>

                  <h2 className="text-3xl font-black">
                    {solution.title}
                  </h2>

                  <p className="text-slate-600 mt-4 leading-relaxed">
                    {solution.text}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2
                          className="text-[#0f766e] shrink-0"
                          size={21}
                        />

                        <span className="font-semibold text-slate-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${whatsappUrl}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Solicitar demo de Aventra para ${solution.shortTitle}`}
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-6 py-4 font-black hover:bg-slate-800 transition"
                  >
                    Solicitar demo
                    <ArrowRight size={18} />
                  </a>
                </article>
              );
            })}
          </div>

          <div
            data-aos="fade-up"
            className="mt-16 rounded-[2.5rem] bg-black text-white p-8 md:p-12 text-center"
          >
            <p className="text-[#14c8bb] font-black mb-3">
              UNA PLATAFORMA COMPLETA
            </p>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Organiza tu negocio y reduce los procesos manuales.
            </h2>

            <p className="mt-5 text-slate-300 text-lg max-w-3xl mx-auto">
              Centraliza la facturación, el inventario, las ventas, los pagos y
              la información de tus clientes para trabajar con más orden y
              tomar mejores decisiones.
            </p>

            <a
              href={`${whatsappUrl}?text=${encodeURIComponent(
                "Hola, deseo solicitar una demo gratuita de Aventra."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#14c8bb] text-black px-8 py-4 font-black hover:opacity-90 transition"
            >
              Solicitar demo gratuita
              <ArrowRight size={19} />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}