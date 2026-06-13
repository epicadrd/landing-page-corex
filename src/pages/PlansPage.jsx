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
  Star,
} from "lucide-react";

const whatsappUrl = "https://wa.me/18094061165";

export default function PlansPage() {
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
          <div
            data-aos="fade-up"
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14c8bb]/30 bg-[#14c8bb]/10 px-4 py-2 text-sm text-[#0f766e] mb-7 font-bold">
              <Sparkles size={16} /> Planes flexibles para negocios
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95]">
              Elige el plan ideal para tu empresa.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-600 leading-relaxed">
              Empieza con el plan que mejor se adapte a tu operación y escala
              cuando tu negocio crezca.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
                     {[
                         [
                           "Emprendedor",
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
                             "Todo en Emprendedor",
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
      </div>
      <Footer/>
    </main>
  );
}