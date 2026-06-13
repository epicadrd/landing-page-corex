import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Clock,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const contactEmail = "info@corexrd.com.com";
const whatsappUrl = "https://wa.me/18094061165";
const whatsappNumber = "+1 (809) 406-1165";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });
  }, []);

  return (
    <main className="min-h-screen bg-white text-black overflow-hidden selection:bg-[#14c8bb]/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#14c8bb22,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)]" />

      <div className="relative z-10">
        <header className="border-b border-black/5 bg-white/85 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-5">
            <a href="/" className="flex items-center gap-3">
              <img
                  src="/corexicon.png"
                  alt="Corex"
                  className="w-11 h-11 object-contain"
                />
              <div>
                <p className="font-black leading-none text-lg">Corex</p>
                <p className="text-xs mt-1 text-slate-500">
                  Facturación • Inventario • Ventas
                </p>
              </div>
            </a>

            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black hover:bg-slate-50 transition"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </a>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14c8bb]/30 bg-[#14c8bb]/10 px-4 py-2 text-sm text-[#0f766e] mb-7 font-bold">
              <MessageCircle size={16} /> Hablemos de tu negocio
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              Solicita una demo de Corex.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Cuéntanos qué necesitas y te mostramos cómo Corex puede ayudarte
              a facturar, controlar inventario, organizar clientes y manejar tu
              operación desde una sola plataforma.
            </p>

            <div className="mt-9 grid sm:grid-cols-2 gap-4">
              {[
                "Demo personalizada",
                "Orientación según tu negocio",
                "Planes flexibles",
                "Soporte para empezar",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#0f766e]" size={22} />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="rounded-[2.5rem] border border-black/5 bg-white p-7 md:p-9 shadow-2xl"
          >
            <h2 className="text-3xl font-black mb-2">Contacto directo</h2>
            <p className="text-slate-500 mb-8">
              Escríbenos y coordinamos una demostración.
            </p>

            <div className="space-y-4">
              <a
                href={whatsappUrl}
                className="group flex items-center justify-between gap-5 rounded-3xl bg-black text-white p-5 hover:bg-slate-800 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="font-black">WhatsApp</p>
                    <p className="text-sm text-slate-300">{whatsappNumber}</p>
                  </div>
                </div>
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="group flex items-center justify-between gap-5 rounded-3xl border border-black/5 bg-slate-50 p-5 hover:bg-[#14c8bb]/10 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#14c8bb]/15 text-[#0f766e] flex items-center justify-center">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-black">Correo electrónico</p>
                    <p className="text-sm text-slate-500">{contactEmail}</p>
                  </div>
                </div>
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </a>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-3xl border border-black/5 bg-white p-5">
                  <Clock className="text-[#0f766e] mb-4" size={25} />
                  <p className="font-black">Horario</p>
                  <p className="text-sm text-slate-500 mt-1">
                    Lunes a viernes
                  </p>
                </div>

                <div className="rounded-3xl border border-black/5 bg-white p-5">
                  <MapPin className="text-[#0f766e] mb-4" size={25} />
                  <p className="font-black">Disponible</p>
                  <p className="text-sm text-slate-500 mt-1">
                    República Dominicana
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#14c8bb]/10 border border-[#14c8bb]/20 p-5">
              <p className="font-black text-[#0f766e]">
                Recomendado para negocios que necesitan más orden.
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Tiendas, distribuidoras, suplidores, negocios de servicios y
                empresas que manejan inventario, facturas y cuentas por cobrar.
              </p>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </main>
  );
}