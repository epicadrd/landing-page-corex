import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  Package,
  Play,
  ReceiptText,
  Settings2,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const tutorials = [
  {
    id: "primeros-pasos",
    step: "01",
    title: "Primeros pasos en Aventra",
    shortDescription: "Configura tu empresa y conoce el panel principal.",
    description:
      "Aprende a completar los datos iniciales de tu negocio, personalizar tu cuenta y navegar por las herramientas principales de Aventra.",
    duration: "6 min",
    icon: Sparkles,
    youtubeId: "uFVilaQboYQ",
    topics: [
      "Configuración inicial de la empresa",
      "Recorrido por el dashboard",
      "Preferencias generales de la cuenta",
    ],
  },
  {
    id: "facturacion",
    step: "02",
    title: "Cómo crear una factura",
    shortDescription: "Emite tu primera factura paso a paso.",
    description:
      "Descubre cómo seleccionar un cliente, agregar productos o servicios, aplicar impuestos y emitir una factura correctamente.",
    duration: "8 min",
    icon: FileText,
    youtubeId: "",
    topics: [
      "Selección o creación del cliente",
      "Productos, servicios e impuestos",
      "Emisión e impresión de la factura",
    ],
  },
  {
    id: "inventario",
    step: "03",
    title: "Control de inventario",
    shortDescription: "Organiza productos, existencias y movimientos.",
    description:
      "Conoce cómo registrar productos, configurar el stock mínimo, consultar movimientos y mantener las existencias de tu negocio actualizadas.",
    duration: "9 min",
    icon: Package,
    youtubeId: "",
    topics: [
      "Creación de productos y categorías",
      "Entradas, salidas y ajustes",
      "Alertas de stock mínimo",
    ],
  },
  {
    id: "pos",
    step: "04",
    title: "Ventas desde el punto de venta",
    shortDescription: "Cobra más rápido desde el módulo POS.",
    description:
      "Aprende a abrir una caja, registrar ventas, seleccionar métodos de pago, imprimir tickets y realizar el cierre del día.",
    duration: "10 min",
    icon: ShoppingCart,
    youtubeId: "",
    topics: [
      "Apertura y asignación de caja",
      "Registro de ventas y pagos",
      "Cierre y resumen de caja",
    ],
  },
  {
    id: "gastos",
    step: "05",
    title: "Gastos y control financiero",
    shortDescription: "Registra gastos y consulta tus resultados.",
    description:
      "Mira cómo organizar los gastos del negocio, consultar balances y utilizar la información financiera para tomar mejores decisiones.",
    duration: "7 min",
    icon: ReceiptText,
    youtubeId: "",
    topics: [
      "Registro y clasificación de gastos",
      "Consulta del resumen contable",
      "Exportación de información",
    ],
  },
  {
    id: "configuracion",
    step: "06",
    title: "Usuarios y configuración avanzada",
    shortDescription: "Personaliza Aventra para tu equipo.",
    description:
      "Configura usuarios, roles, permisos y preferencias para que cada integrante de tu negocio trabaje con el acceso adecuado.",
    duration: "8 min",
    icon: Settings2,
    youtubeId: "",
    topics: [
      "Creación de usuarios",
      "Roles y permisos",
      "Personalización de documentos",
    ],
  },
];

export default function TutorialsSection() {
  const [selectedId, setSelectedId] = useState(tutorials[0].id);

  const selectedTutorial =
    tutorials.find((tutorial) => tutorial.id === selectedId) || tutorials[0];

  return (
    <section
      id="tutoriales"
      className="max-w-7xl mx-auto px-6 py-20 scroll-mt-28"
    >
      <div
        data-aos="fade-up"
        className="max-w-3xl mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#14c8bb]/25 bg-[#14c8bb]/10 px-4 py-2 text-sm font-black text-[#0f766e]">
          <BookOpen size={16} />
          CENTRO DE APRENDIZAJE
        </div>

        <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight">
          Aprende a usar Aventra, paso a paso.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Selecciona el tema que te interesa y mira un tutorial práctico para
          aprovechar cada herramienta de la plataforma.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-8">
        <div
          data-aos="fade-right"
          className="relative rounded-[2rem] border border-black/5 bg-white p-4 shadow-xl shadow-slate-900/5 md:p-5"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[43px] top-10 w-px bg-gradient-to-b from-[#14c8bb] via-[#14c8bb]/35 to-slate-200 md:left-[47px]"
          />

          <div
            className="relative grid gap-2"
            role="tablist"
            aria-label="Temas de tutoriales"
          >
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;
              const isSelected = tutorial.id === selectedTutorial.id;

              return (
                <button
                  key={tutorial.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="tutorial-panel"
                  onClick={() => setSelectedId(tutorial.id)}
                  className={`group grid w-full grid-cols-[48px_minmax(0,1fr)] gap-3 rounded-2xl p-3 text-left transition-all md:grid-cols-[52px_minmax(0,1fr)] ${
                    isSelected
                      ? "bg-black text-white shadow-xl"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border transition ${
                      isSelected
                        ? "border-[#14c8bb] bg-[#14c8bb] text-black"
                        : "border-slate-200 bg-white text-[#0f766e] group-hover:border-[#14c8bb]/50"
                    }`}
                  >
                    <Icon size={21} strokeWidth={2.2} />
                  </span>

                  <span className="min-w-0 self-center">
                    <span
                      className={`block text-[11px] font-black tracking-[0.16em] ${
                        isSelected ? "text-[#14c8bb]" : "text-slate-400"
                      }`}
                    >
                      PASO {tutorial.step}
                    </span>

                    <span className="mt-1 block font-black leading-tight">
                      {tutorial.title}
                    </span>

                    <span
                      className={`mt-1 hidden text-xs leading-relaxed sm:block ${
                        isSelected ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {tutorial.shortDescription}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <article
          id="tutorial-panel"
          role="tabpanel"
          data-aos="fade-left"
          className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl shadow-slate-900/10"
        >
          <div className="relative aspect-video overflow-hidden bg-slate-950">
            {selectedTutorial.youtubeId ? (
              <iframe
                key={selectedTutorial.youtubeId}
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${selectedTutorial.youtubeId}?rel=0`}
                title={selectedTutorial.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden px-6 text-center text-white">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#14c8bb55,transparent_34%),linear-gradient(135deg,#071b1f,#0f172a)]"
                />

                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                  <Play
                    size={34}
                    className="ml-1 text-[#14c8bb]"
                    fill="currentColor"
                  />
                </div>

                <p className="relative z-10 mt-6 text-xs font-black tracking-[0.18em] text-[#14c8bb]">
                  VIDEO TUTORIAL
                </p>

                <p className="relative z-10 mt-2 text-2xl font-black md:text-3xl">
                  {selectedTutorial.title}
                </p>

                <p className="relative z-10 mt-3 max-w-md text-sm text-slate-300">
                  Próximamente disponible en nuestro canal de YouTube.
                </p>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black tracking-[0.16em] text-[#0f766e]">
                  TUTORIAL {selectedTutorial.step}
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                  {selectedTutorial.title}
                </h3>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                <Clock3 size={16} />
                {selectedTutorial.duration}
              </span>
            </div>

            <p className="mt-5 leading-relaxed text-slate-600">
              {selectedTutorial.description}
            </p>

            <div className="mt-7 grid gap-3 border-t border-black/5 pt-6 sm:grid-cols-3">
              {selectedTutorial.topics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-start gap-2 rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-700"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#0f766e]"
                  />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}