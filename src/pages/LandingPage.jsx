import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  ArrowRight,
  BarChart3,
  ChevronUp,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  CreditCard,
  FileText,
  Menu,
  Package,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Store,
  TrendingUp,
  Truck,
  X,
  Zap,
} from "lucide-react";

const contactEmail = "info@corexrd.com.com";
const whatsappUrl = "https://wa.me/18094061165";
const loginUrl = "https://app.corexrd.com/login";
const registerUrl = "https://app.corexrd.com/registro";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

 useEffect(() => {
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    offset: 90,
    mirror: false,
  });

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 500);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Soluciones", href: "/soluciones", route: true },
    { label: "Módulos", href: "/modulos", route: true },
    { label: "Seguridad", href: "#seguridad" },
    { label: "Planes", href: "/planes", route: true },
    { label: "Contacto", href: "/contacto", route: true },
  ];

  const handleMenuClick = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-white text-black overflow-hidden selection:bg-[#14c8bb]/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#14c8bb22,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)]" />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-5">
            <a href="#inicio" className="flex items-center gap-3 shrink-0">
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

            <nav className="hidden xl:flex items-center gap-1 text-sm text-slate-600 rounded-full border border-black/5 bg-white/80 p-1 shadow-sm">
              {navItems.map((item) =>
                item.route ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="rounded-full px-4 py-2 hover:bg-[#14c8bb]/10 hover:text-[#0f766e] transition font-bold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 hover:bg-[#14c8bb]/10 hover:text-[#0f766e] transition font-bold"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            <div className="hidden md:flex items-center gap-3">
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black hover:bg-slate-50 transition"
                >
                  Iniciar sesión
                </a>

                <a
                  href={registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-black hover:bg-slate-800 transition shadow-xl"
                >
                  Regístrate <ArrowRight size={16} />
                </a>

              </div>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="xl:hidden w-11 h-11 rounded-2xl bg-black/5 flex items-center justify-center border border-black/5"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="xl:hidden border-t border-black/5 bg-white px-6 py-4 grid gap-2">
              {navItems.map((item) =>
                item.route ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleMenuClick}
                    className="rounded-2xl px-4 py-3 bg-slate-50 text-slate-700 font-bold hover:bg-[#14c8bb]/10 hover:text-[#0f766e] transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleMenuClick}
                    className="rounded-2xl px-4 py-3 bg-slate-50 text-slate-700 font-bold hover:bg-[#14c8bb]/10 hover:text-[#0f766e] transition"
                  >
                    {item.label}
                  </a>
                )
              )}

              <div className="grid grid-cols-2 gap-3 pt-3">
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMenuClick}
                  className="rounded-2xl px-4 py-3 bg-white border border-black/10 text-center font-black"
                >
                  Iniciar sesión
                </a>

                <a
                  href={registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMenuClick}
                  className="rounded-2xl px-4 py-3 bg-black text-white text-center font-black"
                >
                  Regístrate
                </a>
              </div>
            </nav>
          )}
        </header>

        <section
          id="inicio"
          className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[1.02fr_0.98fr] gap-14 items-center scroll-mt-28"
        >
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14c8bb]/30 bg-[#14c8bb]/10 px-4 py-2 text-sm text-[#0f766e] mb-7 font-bold">
              <Sparkles size={16} /> Software de gestión para negocios en RD
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              e-CF, POS e inventario para negocios en RD.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Corex te ayuda a emitir e-CF, controlar inventario, vender desde punto
              de venta, gestionar gastos, cuentas por cobrar y cuentas por pagar
              desde una sola plataforma.
            </p>
            
           <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-8 py-4 font-black text-white hover:bg-slate-800 transition shadow-2xl"
              >
                Crear cuenta ahora
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-8 py-4 font-black hover:bg-slate-50 transition shadow-sm"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="rounded-[2.2rem] border border-black/5 bg-white p-6 shadow-2xl"
          >
            <p className="text-2xl font-black">Dashboard</p>
            <p className="text-sm text-slate-500 mb-5">
              Resumen de ventas y operación
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-slate-50 p-5 border border-black/5">
                <p className="text-slate-500 text-sm">Ventas del mes</p>
                <p className="text-3xl font-black mt-2">RD$ 284,500</p>
                <p className="text-emerald-600 text-xs mt-3 flex items-center gap-1">
                  <TrendingUp size={14} /> +18% este mes
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5 border border-black/5">
                <p className="text-slate-500 text-sm">Balance pendiente</p>
                <p className="text-3xl font-black mt-2">RD$ 32,900</p>
                <p className="text-amber-600 text-xs mt-3">
                  6 facturas por cobrar
                </p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5 border border-black/5 col-span-2">
                <p className="font-black mb-3">Facturas recientes</p>

                {[
                  ["E32000100128", "Distribuidora Méndez", "RD$ 18,500", "Pagada"],
                  ["E31000100127", "Comercial Rivera", "RD$ 12,900", "Pendiente"],
                  ["E32000100126", "Servicios Nova", "RD$ 27,300", "Pagada"],
                ].map((row) => (
                  <div
                    key={row[0]}
                    className="flex items-center justify-between py-3 border-t border-black/5"
                  >
                    <div>
                      <p className="font-bold">{row[0]}</p>
                      <p className="text-xs text-slate-500">{row[1]}</p>
                    </div>

                    <div className="text-right">
                      <p className="font-black">{row[2]}</p>
                      <p
                        className={
                          row[3] === "Pagada"
                            ? "text-xs text-emerald-600"
                            : "text-xs text-amber-600"
                        }
                      >
                        {row[3]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="soluciones"
          className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
        >
          <div data-aos="fade-up">
            <p className="text-[#0f766e] font-black mb-3">SOLUCIONES</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-10">
              Hecho para negocios que venden, entregan y cobran.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              [Store, "Tiendas", "Ventas, inventario y recibos al día."],
              [Building2, "Distribuidoras", "Conduces, clientes y cuentas por cobrar."],
              [Truck, "Suplidores", "Despachos organizados y documentos claros."],
              [CreditCard, "Servicios", "Cotizaciones, facturas y pagos en orden."],
            ].map(([Icon, title, text], index) => (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <Icon className="text-[#0f766e] mb-5" size={30} />
                <p className="font-black text-xl">{title}</p>
                <p className="text-slate-600 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="modulos"
          className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
        >
          <div data-aos="fade-up">
            <p className="text-[#0f766e] font-black mb-3">
              MÓDULOS PRINCIPALES
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-10">
              Todo lo que necesitas para operar mejor.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
                [
                  FileText,
                  "Facturación electrónica e-CF",
                  "Emite facturas electrónicas con e-NCF, QR DGII, ITBIS, recibos y control de pagos.",
                ],
                [
                  CreditCard,
                  "Punto de venta POS",
                  "Vende rápido desde caja, imprime tickets, usa lector de códigos y controla cierres diarios.",
                ],
                [
                  Package,
                  "Inventario completo",
                  "Controla productos, servicios, stock, movimientos, mínimos, conteos e historial.",
                ],
                [
                  ReceiptText,
                  "Contabilidad básica",
                  "Registra gastos, recibos, cuentas por cobrar, cuentas por pagar y balances pendientes.",
                ],
                [
                  Truck,
                  "Compras y proveedores",
                  "Gestiona proveedores, órdenes de compra, conduces y operaciones del negocio.",
                ],
                [
                  BarChart3,
                  "Reportes y control",
                  "Consulta ventas, inventario, actividad por usuario y métricas clave de tu empresa.",
                ],
              ].map(([Icon, title, text], index) => (
              <div
                key={title}
                data-aos="zoom-in-up"
                data-aos-delay={index * 80}
                className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <Icon className="text-[#0f766e] mb-5" size={32} />
                <h3 className="text-2xl font-black mb-3">{title}</h3>
                <p className="text-slate-600">{text}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0f766e]">
                  Incluido <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="proceso"
          className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
        >
          <div
            data-aos="zoom-in"
            className="rounded-[2.5rem] bg-black text-white p-8 md:p-12"
          >
            <p className="text-[#14c8bb] font-black mb-3">IMPLEMENTACIÓN</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Empieza rápido, sin complicarte.
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                ["1. Configura tu empresa", "Logo, colores, datos fiscales, usuarios y preferencias."],
                ["2. Subes clientes y productos", "Organizamos la información base para empezar rápido."],
                ["3. Empiezas a operar", "Facturas, cotizas, registras pagos y controlas inventario."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  className="rounded-3xl bg-white/10 border border-white/10 p-6"
                >
                  <p className="text-xl font-black">{title}</p>
                  <p className="text-slate-300 mt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="seguridad"
          className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
        >
          <div className="grid lg:grid-cols-3 gap-5">
            {[
              [Zap, "Implementación rápida", "Empieza con tus productos, clientes y documentos principales."],
              [Smartphone, "Acceso desde la web", "Gestiona tu negocio desde laptop, tablet o móvil."],
              [ShieldCheck, "Control por roles", "Define qué puede ver y hacer cada usuario."],
            ].map(([Icon, title, text], index) => (
              <div
                key={title}
                data-aos={index === 1 ? "zoom-in" : "fade-up"}
                data-aos-delay={index * 120}
                className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm"
              >
                <Icon className="text-[#0f766e] mb-5" size={34} />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="text-slate-600 mt-3">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
  <div
    data-aos="fade-up"
    className="rounded-[2.5rem] border border-black/5 bg-white p-8 md:p-12 shadow-xl"
  >
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-[#0f766e] font-black mb-3">
          COBERTURA NACIONAL
        </p>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Diseñado para negocios en toda República Dominicana.
        </h2>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Corex ayuda a empresas a controlar inventario, emitir e-CF,
          gestionar ventas, compras y operaciones desde una sola plataforma.
          Pensado para negocios dominicanos que quieren crecer con orden y
          tecnología.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {[
            ["+10", "módulos integrados"],
            ["24/7", "acceso desde la web"],
            ["e-CF", "facturación electrónica"],
            ["RD", "enfoque local"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-black/5 bg-slate-50 p-5"
            >
              <p className="text-3xl font-black">{value}</p>
              <p className="text-slate-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="rounded-[2rem] border border-black/5 bg-gradient-to-br from-[#14c8bb]/15 via-white to-slate-100 p-10 shadow-inner">
          <div className="text-center">
            <div className="text-7xl mb-6">🇩🇴</div>

            <h3 className="text-3xl font-black">
              Disponible en todo el país
            </h3>

            <p className="text-slate-600 mt-4">
              Santo Domingo, Santiago, La Vega, San Cristóbal,
              San Pedro de Macorís, Higüey, Puerto Plata y más.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "Colmados",
                "Ferreterías",
                "Tiendas",
                "Repuestos",
                "Restaurantes",
                "Servicios",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white border border-black/5 px-4 py-2 text-sm font-bold shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section
          id="planes"
          className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
        >
          <div
            data-aos="fade-up"
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-[#0f766e] font-black mb-3">PLANES</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Planes simples para empezar rápido.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
                [
                  "Básico",
                  "US$ 20",
                  [
                    "Facturas",
                    "Cotizaciones",
                    "Recibos",
                    "Contabilidad básica",
                    "2 usuarios",
                    "e-CF",
                  ],
                ],
                [
                  "PyME",
                  "US$ 45",
                  [
                    "Todo en básico",
                    "Inventario completo",
                    "Catálogo digital",
                    "1 punto de venta con hardware",
                    "3 usuarios",
                    "Registro de actividades",
                  ],
                ],
                [
                  "Pro",
                  "US$ 94",
                  [
                    "Todo en PyME",
                    "6 usuarios",
                    "2 puntos de venta con hardware",
                    "Conduces",
                    "Órdenes de compra",
                    "Gestión de proveedores",
                  ],
                ],
              ].map(([name, amount, items], index) => (
              <div
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

                <h3 className="text-3xl font-black">{name}</h3>
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
                  href={whatsappUrl}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-black transition ${
                    index === 1
                      ? "bg-white text-black hover:bg-slate-100"
                      : "bg-black text-white hover:bg-slate-800"
                  }`}
                >
                  Quiero este plan <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="max-w-6xl mx-auto px-6 py-24 text-center scroll-mt-28"
        >
          <div
            data-aos="zoom-in-up"
            className="rounded-[3rem] border border-black/5 bg-black text-white p-8 md:p-16"
          >
            <div className="mx-auto w-16 h-16 rounded-3xl bg-[#14c8bb]/20 text-[#14c8bb] flex items-center justify-center mb-7">
              <Star size={34} />
            </div>

            <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[0.95]">
              Haz que tu negocio opere como una empresa grande.
            </h2>

            <p className="mt-7 text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
              Solicita una demo y mira cómo Corex puede ayudarte a facturar más
              rápido, controlar mejor tu inventario y organizar tu operación
              diaria.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#14c8bb] text-black px-8 py-4 font-black hover:opacity-90 transition shadow-2xl"
              >
                Solicitar demo por WhatsApp <ArrowRight size={20} />
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-black hover:bg-white/15 transition"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      
      {showScrollTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-black text-white shadow-2xl flex items-center justify-center hover:bg-slate-800 transition animate-bounce"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </main>
  );
}