import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../../components/Footer";
import TutorialsSection from "../components/TutorialsSection";

const tutorialsPageUrl = "https://aventrard.com/tutoriales";
const socialImageUrl = "https://aventrard.com/og-aventra.jpg";

export default function TutorialsPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
      mirror: false,
    });

    window.scrollTo(0, 0);

    document.title =
      "Tutoriales de Aventra | Aprende facturación, inventario y POS";

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
      "Aprende a utilizar Aventra con tutoriales paso a paso sobre facturación, inventario, punto de venta POS, gastos, usuarios y configuración."
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
      "Tutoriales de Aventra | Centro de aprendizaje"
    );

    updateMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      "Videos y guías para aprender a utilizar las herramientas de facturación, inventario, POS y gestión de Aventra."
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
      tutorialsPageUrl
    );

    updateMetaTag(
      'meta[property="og:image"]',
      "property",
      "og:image",
      socialImageUrl
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
      "Tutoriales de Aventra | Centro de aprendizaje"
    );

    updateMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      "Aprende a usar Aventra con videos prácticos sobre facturación, inventario, POS y gestión empresarial."
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

    canonicalLink.setAttribute("href", tutorialsPageUrl);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black selection:bg-[#14c8bb]/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#14c8bb22,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)]" />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/IconoAventra.png"
                alt="Aventra"
                className="h-11 w-11 object-contain"
              />

              <div>
                <p className="text-lg font-black leading-none">Aventra</p>
                <p className="mt-1 text-xs text-slate-500">
                  Centro de aprendizaje
                </p>
              </div>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black transition hover:bg-slate-50"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Volver al inicio</span>
              <span className="sm:hidden">Volver</span>
            </Link>
          </div>
        </header>

        <TutorialsSection />

        <section className="mx-auto max-w-5xl px-6 pb-24 text-center">
          <div
            data-aos="zoom-in-up"
            className="rounded-[2.5rem] bg-black px-7 py-12 text-white shadow-2xl md:px-12"
          >
            <p className="text-sm font-black tracking-[0.15em] text-[#14c8bb]">
              ¿NECESITAS MÁS AYUDA?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Nuestro equipo está para ayudarte.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-300">
              Si tienes una pregunta que todavía no aparece en nuestros
              tutoriales, escríbenos y te ayudaremos a resolverla.
            </p>

            <a
              href="https://wa.me/18094061165"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#14c8bb] px-7 py-4 font-black text-black transition hover:opacity-90"
            >
              Hablar con soporte
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}