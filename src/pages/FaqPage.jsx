import AppShell from "../components/layout/AppShell.jsx";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function FaqPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const source = searchParams.get("source") || "estudiante";

  const modulesTo =
    source === "admin"
      ? "/admin"
      : source === "docente"
        ? "/docente/modulo"
        : "/estudiante/libros";

  const recursosTo =
    source === "admin"
      ? "/admin/gestion-modulos"
      : source === "docente"
        ? "/docente/modulo"
        : "/estudiante/libros";

  const faqTo = `/faq?source=${encodeURIComponent(source)}`;

  return (
    <AppShell
      role="faq"
      className="bg-background-custom text-text-custom antialiased font-display"
    >
      <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-custom shadow-xl overflow-x-hidden">
        <header className="sticky top-0 z-10 flex items-center bg-background-custom/80 backdrop-blur-md p-4 border-b border-primary/10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="ml-2 text-lg font-bold tracking-tight text-text-custom">
            Preguntas Frecuentes y Soporte
          </h1>
        </header>

        <div className="px-4 py-4">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/40">
              search
            </span>
            <input
              className="w-full bg-white border-2 border-primary/10 rounded-xl py-3 pl-11 pr-4 focus:ring-2 focus:ring-accent-blue text-sm outline-none transition-all"
              placeholder="Buscar ayuda..."
              type="text"
            />
          </div>
        </div>

        <main className="flex-1 px-4 pb-24">
          <div className="space-y-3">
            <details
              className="group bg-white rounded-xl overflow-hidden border border-primary/20 shadow-sm"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
                <span className="text-sm font-semibold text-primary">
                  ¿Cómo descargo los materiales?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                  expand_more
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-text-custom/80 leading-relaxed">
                  Puedes descargar los materiales haciendo clic en el icono de descarga junto a cada archivo en la sección de recursos. Todos los archivos están disponibles en formato PDF y optimizados para visualización móvil.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden border border-primary/20 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
                <span className="text-sm font-semibold text-primary">
                  ¿Qué hacer si no tengo internet?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                  expand_more
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-text-custom/80 leading-relaxed">
                  Nuestra plataforma permite el acceso offline a materiales previamente descargados. Asegúrate de descargar el contenido que necesites mientras estés conectado para poder consultarlo más tarde sin conexión.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden border border-primary/20 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
                <span className="text-sm font-semibold text-primary">
                  ¿Dónde subo mis fotos?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                  expand_more
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-text-custom/80 leading-relaxed">
                  Dirígete a la sección 'Mis Entregas' dentro de tu curso. Allí encontrarás un botón azul con el icono de una cámara o clip para subir tus evidencias fotográficas directamente desde tu galería.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden border border-primary/20 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
                <span className="text-sm font-semibold text-primary">
                  ¿Cómo contacto a mi mentor?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                  expand_more
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-text-custom/80 leading-relaxed">
                  Puedes contactar a tu mentor asignado a través del botón de chat en tu perfil o utilizando el formulario de contacto directo al final de esta sección.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-8 space-y-4">
            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">
                info
              </span>
              <p className="text-xs text-text-custom font-medium leading-relaxed">
                ¿No encontraste lo que buscabas? Nuestro equipo de capacitadores está listo para ayudarte personalmente.
              </p>
            </div>
            <button
              type="button"
              className="w-full bg-bright-blue hover:bg-bright-blue/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-bright-blue/20 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">send</span>
              <span className="uppercase text-sm tracking-wide">
                Enviar una nueva pregunta a capacitadores
              </span>
            </button>
          </div>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-white/95 backdrop-blur-md border-t border-primary/10 px-8 py-3 flex items-center justify-between z-20">
          <Link
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-bright-blue transition-colors"
            to={modulesTo}
          >
            <span className="material-symbols-outlined text-2xl">grid_view</span>
            <span className="text-[10px] font-medium uppercase">Módulos</span>
          </Link>
          <Link
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-bright-blue transition-colors"
            to={recursosTo}
          >
            <span className="material-symbols-outlined text-2xl">folder_open</span>
            <span className="text-[10px] font-medium uppercase">Recursos</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-bright-blue transition-colors" to={faqTo}>
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              help
            </span>
            <span className="text-[10px] font-bold uppercase">Q&amp;A</span>
          </Link>
        </nav>
      </div>
    </AppShell>
  );
}

