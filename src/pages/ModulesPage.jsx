import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileText,
  Package,
  ReceiptText,
  ShieldCheck,
  Truck,
  Users,
  Wallet,
  Sparkles,
} from "lucide-react";

const whatsappUrl = "https://wa.me/18094061165";

export default function ModulesPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 90,
    });
  }, []);

  const modules = [
    {
      icon: FileText,
      title: "Facturación",
      text: "Emite facturas profesionales, controla balances y administra documentos de venta.",
      items: [
        "Facturas rápidas",
        "Balances pendientes",
        "Historial de facturación",
      ],
    },

    {
      icon: Package,
      title: "Inventario",
      text: "Gestiona productos, stock, movimientos y alertas para mantener el control.",
      items: [
        "Control de stock",
        "Movimientos",
        "Alertas de inventario",
      ],
    },

    {
      icon: ClipboardList,
      title: "Cotizaciones",
      text: "Crea propuestas comerciales y conviértelas en facturas fácilmente.",
      items: [
        "Cotizaciones rápidas",
        "Conversión a factura",
        "Clientes organizados",
      ],
    },

    {
      icon: Truck,
      title: "Conduces",
      text: "Organiza entregas y documentos operativos para tus clientes.",
      items: [
        "Documentos claros",
        "Historial de entregas",
        "Operación organizada",
      ],
    },

    {
      icon: ReceiptText,
      title: "Recibos y pagos",
      text: "Registra pagos, abonos y balances pendientes con mayor claridad.",
      items: [
        "Pagos parciales",
        "Historial",
        "Control de balances",
      ],
    },

    {
      icon: BarChart3,
      title: "Dashboard",
      text: "Consulta ventas, inventario y actividad del negocio desde un solo lugar.",
      items: [
        "Resumen de ventas",
        "Indicadores",
        "Visualización rápida",
      ],
    },

    {
      icon: Users,
      title: "Usuarios y roles",
      text: "Define accesos y permisos según el rol de cada usuario.",
      items: [
        "Roles personalizados",
        "Permisos",
        "Control de acceso",
      ],
    },

    {
      icon: Wallet,
      title: "Cuentas por cobrar",
      text: "Mantén control sobre balances pendientes y pagos recibidos.",
      items: [
        "Balances",
        "Clientes pendientes",
        "Pagos registrados",
      ],
    },

    {
      icon: ShieldCheck,
      title: "Control empresarial",
      text: "Opera con más orden, organización y seguridad en tu negocio.",
      items: [
        "Mayor control",
        "Documentos organizados",
        "Operación centralizada",
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
              <Sparkles size={16} /> Módulos del sistema
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              Todo lo que necesitas para operar mejor.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed">
              Corex integra herramientas para ventas, inventario, facturación,
              clientes y operación diaria desde una sola plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
            {modules.map((module, index) => {
              const Icon = module.icon;

              return (
                <div
                  key={module.title}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 70}
                  className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#14c8bb]/15 text-[#0f766e] flex items-center justify-center mb-6">
                    <Icon size={30} />
                  </div>

                  <h2 className="text-3xl font-black">{module.title}</h2>

                  <p className="text-slate-600 mt-4 leading-relaxed">
                    {module.text}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {module.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2
                          className="text-[#0f766e]"
                          size={20}
                        />

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