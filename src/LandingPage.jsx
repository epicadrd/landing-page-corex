import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Package,
  ReceiptText,
  BarChart3,
  ShieldCheck,
  ClipboardList,
  CreditCard,
  Menu,
  Zap,
  Store,
  Building2,
  Truck,
  Bell,
  Lock,
  TrendingUp,
  Smartphone,
  ChevronRight,
  Star,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  const modules = [
    {
      icon: FileText,
      title: "Facturación",
      text: "Emite facturas profesionales, organiza clientes, pagos, balances y documentos desde una plataforma moderna.",
    },
    {
      icon: Package,
      title: "Inventario",
      text: "Controla productos, stock, códigos, alertas de bajo inventario y movimientos sin depender de hojas sueltas.",
    },
    {
      icon: ClipboardList,
      title: "Cotizaciones",
      text: "Crea propuestas rápidas, claras y profesionales para convertirlas fácilmente en ventas.",
    },
    {
      icon: Truck,
      title: "Conduces",
      text: "Gestiona entregas, productos despachados y documentos operativos sin duplicar procesos.",
    },
    {
      icon: ReceiptText,
      title: "Recibos y pagos",
      text: "Registra abonos, pagos parciales, balances pendientes e historial de cobros por cliente.",
    },
    {
      icon: BarChart3,
      title: "Dashboard ejecutivo",
      text: "Visualiza ventas, facturas recientes, cuentas pendientes y actividad del negocio en segundos.",
    },
  ];

  const benefits = [
    "Reduce errores al facturar",
    "Ahorra tiempo operativo",
    "Controla mejor el inventario",
    "Mejora la imagen de tu negocio",
    "Centraliza ventas, clientes y pagos",
    "Trabaja desde cualquier lugar",
    "Gestiona usuarios y permisos",
    "Toma decisiones con mejores datos",
  ];

  const businessTypes = [
    { icon: Store, name: "Tiendas" },
    { icon: Building2, name: "Distribuidoras" },
    { icon: Truck, name: "Suplidores" },
    { icon: CreditCard, name: "Servicios" },
  ];

  const plans = [
    {
      name: "Básico",
      description: "Para negocios que quieren empezar a organizar sus ventas.",
      price: "Desde",
      amount: "RD$ 1,995",
      items: ["Facturación", "Cotizaciones", "Clientes", "Inventario básico", "Soporte inicial"],
    },
    {
      name: "Profesional",
      description: "Para empresas que necesitan más control, reportes y documentos.",
      price: "Desde",
      amount: "RD$ 3,995",
      popular: true,
      items: ["Todo en Básico", "Inventario avanzado", "Conduces", "Recibos", "Reportes", "Usuarios"],
    },
    {
      name: "Premium",
      description: "Para negocios con equipos, roles y procesos internos.",
      price: "Desde",
      amount: "RD$ 6,995",
      items: ["Todo en Profesional", "Roles avanzados", "Dashboard avanzado", "Personalización", "Soporte prioritario"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black overflow-hidden selection:bg-[#14c8bb]/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#14c8bb22,transparent_35%),linear-gradient(180deg,#ffffff,#f8fafc)]" />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#14c8bb] text-white flex items-center justify-center font-black text-xl shadow-xl">
                C
              </div>
              <div>
                <p className="font-black leading-none text-lg">Corex</p>
                <p className="text-xs mt-1 text-slate-500">Facturación • Inventario • Ventas</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-600">
              <a href="#modulos" className="hover:text-black transition">Módulos</a>
              <a href="#beneficios" className="hover:text-black transition">Beneficios</a>
              <a href="#planes" className="hover:text-black transition">Planes</a>
              <a href="#demo" className="hover:text-black transition">Demo</a>
            </nav>

            <a
              href="#demo"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-black hover:bg-slate-800 transition shadow-xl"
            >
              Solicitar demo <ArrowRight size={16} />
            </a>

            <button className="lg:hidden w-11 h-11 rounded-2xl bg-black/5 flex items-center justify-center border border-black/5">
              <Menu size={20} />
            </button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-[1.02fr_0.98fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14c8bb]/30 bg-[#14c8bb]/10 px-4 py-2 text-sm text-[#0f766e] mb-7 backdrop-blur font-bold">
              <Sparkles size={16} /> Plataforma moderna de gestión empresarial
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              Control real para tu negocio.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Corex centraliza facturación, inventario, cotizaciones, conduces,
              recibos, reportes y usuarios en una sola plataforma moderna para
              negocios que quieren operar con más orden.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/18096391170"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-8 py-4 font-black text-white hover:bg-slate-800 transition shadow-2xl"
              >
                Solicitar demo gratis <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#planes"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-8 py-4 font-black hover:bg-slate-50 transition shadow-sm"
              >
                Ver planes
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <p className="text-3xl font-black">+6</p>
                <p className="text-sm text-slate-500 mt-1">Módulos clave</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <p className="text-3xl font-black">24/7</p>
                <p className="text-sm text-slate-500 mt-1">Acceso web</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <p className="text-3xl font-black">RD</p>
                <p className="text-sm text-slate-500 mt-1">Pensado local</p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="absolute -inset-10 rounded-[4rem] bg-[#14c8bb]/20 blur-3xl" />
            <div className="relative rounded-[2.2rem] border border-black/5 bg-white p-4 shadow-2xl">
              <div className="rounded-[1.7rem] bg-[#f8fafc] border border-black/5 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="rounded-full bg-[#14c8bb]/15 text-[#0f766e] px-3 py-1 text-xs font-bold">
                    Operación activa
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-2xl font-black">Dashboard</p>
                      <p className="text-sm text-slate-500">Resumen de ventas y operación</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#14c8bb]/15 flex items-center justify-center text-[#0f766e]">
                      <BarChart3 size={24} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-white p-5 border border-black/5 shadow-sm">
                      <p className="text-slate-500 text-sm">Ventas del mes</p>
                      <p className="text-3xl font-black mt-2">RD$ 284,500</p>
                      <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full w-[72%] bg-[#14c8bb] rounded-full" />
                      </div>
                      <p className="text-emerald-600 text-xs mt-3 flex items-center gap-1">
                        <TrendingUp size={14} /> +18% este mes
                      </p>
                    </div>

                    <div className="rounded-3xl bg-white p-5 border border-black/5 shadow-sm">
                      <p className="text-slate-500 text-sm">Balance pendiente</p>
                      <p className="text-3xl font-black mt-2">RD$ 32,900</p>
                      <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full w-[38%] bg-amber-400 rounded-full" />
                      </div>
                      <p className="text-amber-600 text-xs mt-3">6 facturas por cobrar</p>
                    </div>

                    <div className="rounded-3xl bg-white p-5 border border-black/5 col-span-2 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-black">Facturas recientes</p>
                        <FileText size={18} className="text-[#0f766e]" />
                      </div>
                      {[
                        ["FAC-000128", "Distribuidora Méndez", "RD$ 18,500", "Pagada"],
                        ["FAC-000127", "Comercial Rivera", "RD$ 12,900", "Pendiente"],
                        ["FAC-000126", "Servicios Nova", "RD$ 27,300", "Pagada"],
                      ].map((row) => (
                        <div key={row[0]} className="flex items-center justify-between py-3 border-t border-black/5">
                          <div>
                            <p className="font-bold">{row[0]}</p>
                            <p className="text-xs text-slate-500">{row[1]}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-black">{row[2]}</p>
                            <p className={row[3] === "Pagada" ? "text-xs text-emerald-600" : "text-xs text-amber-600"}>
                              {row[3]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -left-4 top-20 rounded-2xl border border-black/5 bg-white p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                  <Bell size={20} />
                </div>
                <div>
                  <p className="font-black text-sm">Alerta de inventario</p>
                  <p className="text-xs text-slate-500">5 productos bajos</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -right-3 bottom-16 rounded-2xl border border-black/5 bg-white p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/5 text-black flex items-center justify-center">
                  <Lock size={20} />
                </div>
                <div>
                  <p className="font-black text-sm">Roles seguros</p>
                  <p className="text-xs text-slate-500">Acceso controlado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-4 gap-4">
            {businessTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.name} className="rounded-3xl border border-black/5 bg-white p-6 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#14c8bb]/15 flex items-center justify-center text-[#0f766e]">
                    <Icon size={24} />
                  </div>
                  <p className="font-black text-lg">{type.name}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="modulos" className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <p className="text-[#0f766e] font-black mb-3">MÓDULOS PRINCIPALES</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Todo lo que necesitas para operar mejor.
            </h2>
            <p className="mt-5 text-slate-600 text-lg">
              Una plataforma simple, moderna y completa para gestionar ventas, documentos, clientes, productos y pagos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="group rounded-[2rem] border border-black/5 bg-white p-7 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-[#14c8bb]/15 text-[#0f766e] flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0f766e]">
                    Ver más <ChevronRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="beneficios" className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <p className="text-[#0f766e] font-black mb-3">BENEFICIOS</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Menos desorden. Más control. Más ventas.
            </h2>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Corex ayuda a que tu negocio trabaje con información clara, procesos más rápidos y una imagen más profesional.
            </p>
            <div className="mt-8 rounded-3xl border border-[#14c8bb]/20 bg-[#14c8bb]/10 p-5">
              <p className="font-black text-[#0f766e]">Resultado:</p>
              <p className="text-slate-700 mt-1">Un negocio más organizado, medible y fácil de manejar.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-2xl bg-white border border-black/5 p-5 shadow-sm hover:shadow-md transition">
                <CheckCircle2 className="text-[#0f766e] shrink-0" size={23} />
                <span className="font-bold text-slate-800">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-[2.5rem] bg-black text-white p-8 md:p-12 grid lg:grid-cols-3 gap-8 items-center overflow-hidden relative">
            <div className="absolute right-0 top-0 w-72 h-72 bg-[#14c8bb]/30 rounded-full blur-3xl" />
            <div className="relative lg:col-span-2">
              <p className="text-[#14c8bb] font-black mb-3">PENSADO PARA VENDER MÁS</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Tu sistema también debe vender profesionalismo.
              </h2>
              <p className="mt-5 text-slate-300 text-lg max-w-3xl leading-relaxed">
                Cuando tu negocio factura rápido, entrega documentos claros y controla sus procesos,
                tus clientes perciben más confianza, orden y seriedad.
              </p>
            </div>
            <div className="relative flex lg:justify-end">
              <a
                href="https://wa.me/18096391170"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black px-8 py-4 font-black hover:bg-slate-100 transition shadow-xl"
              >
                Agendar presentación <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        <section id="planes" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#0f766e] font-black mb-3">PLANES</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Planes simples para empezar rápido.
            </h2>
            <p className="mt-5 text-slate-600 text-lg">
              Puedes iniciar con lo esencial y crecer según las necesidades de tu operación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[2rem] border p-7 shadow-sm ${
                  plan.popular
                    ? "bg-black text-white border-black shadow-2xl scale-[1.02]"
                    : "bg-white border-black/5"
                }`}
              >
                {plan.popular && (
                  <p className="inline-flex rounded-full bg-[#14c8bb] text-black px-4 py-1.5 text-xs font-black mb-5">
                    Más recomendado
                  </p>
                )}

                <h3 className="text-3xl font-black">{plan.name}</h3>
                <p className={`mt-3 leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.description}
                </p>

                <div className="mt-7">
                  <p className={plan.popular ? "text-slate-300 text-sm font-bold" : "text-slate-500 text-sm font-bold"}>
                    {plan.price}
                  </p>
                  <p className="text-4xl font-black mt-1">{plan.amount}</p>
                  <p className={plan.popular ? "text-slate-300 text-sm mt-1" : "text-slate-500 text-sm mt-1"}>
                    mensual
                  </p>
                </div>

                <ul className="mt-7 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className={plan.popular ? "text-[#14c8bb]" : "text-[#0f766e]"} />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/18096391170"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-black transition ${
                    plan.popular
                      ? "bg-white text-black hover:bg-slate-100"
                      : "bg-black text-white hover:bg-slate-800"
                  }`}
                >
                  Quiero este plan <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-6 text-sm">
            Los precios pueden ajustarse según usuarios, módulos y nivel de personalización.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
              <Zap className="text-[#0f766e] mb-5" size={34} />
              <h3 className="text-2xl font-black">Implementación rápida</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Empieza con tus productos, clientes y documentos principales sin procesos complicados.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
              <Smartphone className="text-[#0f766e] mb-5" size={34} />
              <h3 className="text-2xl font-black">Acceso desde la web</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Gestiona tu negocio desde laptop, tablet o móvil con una interfaz moderna.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
              <ShieldCheck className="text-[#0f766e] mb-5" size={34} />
              <h3 className="text-2xl font-black">Control por roles</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">
                Define qué puede ver y hacer cada usuario dentro del sistema.
              </p>
            </div>
          </div>
        </section>

        <section id="demo" className="max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="rounded-[3rem] border border-black/5 bg-black text-white p-8 md:p-16 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#14c8bb] to-transparent" />
            <div className="mx-auto w-18 h-18 rounded-3xl bg-[#14c8bb]/20 text-[#14c8bb] flex items-center justify-center mb-7">
              <Star size={34} />
            </div>

            <h2 className="text-4xl md:text-7xl font-black tracking-tight leading-[0.95]">
              Haz que tu negocio opere como una empresa grande.
            </h2>

            <p className="mt-7 text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Solicita una demo y mira cómo Corex puede ayudarte a facturar más rápido,
              controlar mejor tu inventario y organizar tu operación diaria.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/18096391170"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#14c8bb] text-black px-8 py-4 font-black hover:opacity-90 transition shadow-2xl"
              >
                Solicitar demo por WhatsApp <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </a>

              <a
                href="mailto:epica@epicadm.com"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-black hover:bg-white/15 transition"
              >
                Escribir por correo
              </a>
            </div>
          </div>
        </section>

        <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-black/5 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#14c8bb] text-white flex items-center justify-center font-black">
              C
            </div>
            <p>© {new Date().getFullYear()} Corex. Todos los derechos reservados.</p>
          </div>

          <div className="flex items-center gap-5">
            <a href="mailto:epica@epicadm.com" className="hover:text-black">epica@epicadm.com</a>
            <a href="https://epicadm.com" className="hover:text-black">epicadm.com</a>
          </div>
        </footer>
      </div>
    </main>
  );
}