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
  Store,
  Truck,
  Sparkles,
} from "lucide-react";

const whatsappUrl = "https://wa.me/18094061165";

export default function SolutionsPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });
  }, []);

  const solutions = [
    {
      icon: Store,
      title: "Tiendas",
      text: "Controla ventas, inventario, clientes, facturas y recibos desde una sola plataforma.",
      items: ["Inventario organizado", "Facturas rápidas", "Clientes registrados"],
    },
    {
      icon: Building2,
      title: "Distribuidoras",
      text: "Gestiona productos, conduces, cuentas por cobrar y reportes para operar con más control.",
      items: ["Conduces", "Cuentas por cobrar", "Reportes de venta"],
    },
    {
      icon: Truck,
      title: "Suplidores",
      text: "Organiza pedidos, entregas, clientes, documentos y balances pendientes con mayor claridad.",
      items: ["Despachos organizados", "Documentos claros", "Historial de clientes"],
    },
    {
      icon: CreditCard,
      title: "Servicios",
      text: "Crea cotizaciones, conviértelas en facturas y registra pagos sin complicarte.",
      items: ["Cotizaciones", "Facturación", "Registro de pagos"],
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
          <div data-aos="fade-up" className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14c8bb]/30 bg-[#14c8bb]/10 px-4 py-2 text-sm text-[#0f766e] mb-7 font-bold">
              <Sparkles size={16} /> Soluciones por tipo de negocio
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              Corex se adapta a diferentes operaciones.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed">
              Desde tiendas hasta distribuidoras, Corex te ayuda a facturar,
              organizar inventario, controlar clientes y manejar documentos de
              forma más profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 120}
                  className="rounded-[2rem] border border-black/5 bg-white p-7 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#14c8bb]/15 text-[#0f766e] flex items-center justify-center mb-6">
                    <Icon size={30} />
                  </div>

                  <h2 className="text-3xl font-black">{solution.title}</h2>

                  <p className="text-slate-600 mt-4 leading-relaxed">
                    {solution.text}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="text-[#0f766e]" size={21} />
                        <span className="font-semibold text-slate-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappUrl}
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-6 py-4 font-black hover:bg-slate-800 transition"
                  >
                    Solicitar demo
                    <ArrowRight size={18} />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer/>
    </main>
  );
}