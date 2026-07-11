import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

const contactEmail = "contacto@aventrard.com.";
const whatsappUrl = "https://wa.me/18094061165";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-[1.2fr_0.8fr_0.8fr] gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/IconoAventra.png"
              alt="Aventra"
              className="w-12 h-12 object-contain"
            />

            <div>
              <p className="font-black text-lg">Aventra by Épica</p>
              <p className="text-sm text-slate-500">
                Facturación • Inventario • Ventas
              </p>
            </div>
          </div>

          <p className="mt-5 text-slate-600 leading-relaxed max-w-md">
            Software creado por Épica para ayudar a negocios a facturar,
            controlar inventario y operar con más organización.
          </p>
        </div>

        <div>
          <p className="font-black mb-4">Navegación</p>

          <div className="grid gap-3 text-sm text-slate-600">
            <Link to="/" className="hover:text-black">
              Inicio
            </Link>
            <Link to="/soluciones" className="hover:text-black">
              Soluciones
            </Link>
            <Link to="/modulos" className="hover:text-black">
              Módulos
            </Link>
            <Link to="/planes" className="hover:text-black">
              Planes
            </Link>
            <Link to="/contacto" className="hover:text-black">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <p className="font-black mb-4">Contacto</p>

          <div className="grid gap-3">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-black"
            >
              <Mail size={16} />
              {contactEmail}
            </a>

            <a
              href={whatsappUrl}
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-black"
            >
              <MessageCircle size={16} />
              +1 (809) 406-1165
            </a>

            <Link
              to="/contacto"
              className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-black text-white px-5 py-3 text-sm font-black hover:bg-slate-800 transition w-fit"
            >
              Solicitar demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Aventra by Épica. Todos los derechos reservados.</p>
          <p>Desarrollado por Épica SRL.</p>
        </div>
      </div>
    </footer>
  );
}