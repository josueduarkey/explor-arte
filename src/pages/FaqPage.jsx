import AppShell from "../components/layout/AppShell.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function FaqPage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="faq"
      className="bg-[#F8FCFF] text-[#0F172A] antialiased font-display"
    >
      <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#F8FCFF] shadow-xl overflow-x-hidden">
        <header className="sticky top-0 z-10 flex items-center bg-white/90 backdrop-blur-md p-4 border-b border-[#007BFF]/10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              arrow_back
            </span>
          </button>
          <h1 className="ml-2 text-lg font-bold tracking-tight text-text-custom">
            Preguntas Frecuentes y Soporte
          </h1>
        </header>

        <div className="px-4 py-4">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#007BFF]/40">
              search
            </span>
            <input
              className="w-full bg-white border-2 border-[#007BFF]/20 rounded-xl py-3 pl-11 pr-4 focus:ring-2 focus:ring-[#007BFF] text-sm outline-none transition-all"
              placeholder="Buscar ayuda..."
              type="text"
            />
          </div>
        </div>

        <main className="flex-1 px-4 pb-24">
          <div className="space-y-3">
            <details
              className="group bg-white rounded-xl overflow-hidden border border-[#007BFF]/20 shadow-sm"
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
                  Puedes descargar los materiales haciendo clic en el icono de
                  descarga junto a cada archivo en la sección de recursos. Todos
                  los archivos están disponibles en formato PDF y optimizados
                  para visualización móvil.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden border border-[#007BFF]/20 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
                <span className="text-sm font-semibold text-[#007BFF]">
                  ¿Qué hacer si no tengo internet?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                  expand_more
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-text-custom/80 leading-relaxed">
                  Nuestra plataforma permite el acceso offline a materiales
                  previamente descargados. Asegúrate de descargar el contenido
                  que necesites mientras estés conectado para poder consultarlo
                  más tarde sin conexión.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden border border-[#007BFF]/20 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
                <span className="text-sm font-semibold text-[#007BFF]">
                  ¿Dónde subo mis fotos?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                  expand_more
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-text-custom/80 leading-relaxed">
                  Dirígete a la sección 'Mis Entregas' dentro de tu curso. Allí
                  encontrarás un botón azul con el icono de una cámara o clip
                  para subir tus evidencias fotográficas directamente desde tu
                  galería.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-xl overflow-hidden border border-[#007BFF]/20 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-4 list-none">
                <span className="text-sm font-semibold text-[#007BFF]">
                  ¿Cómo contacto a mi mentor?
                </span>
                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-primary">
                  expand_more
                </span>
              </summary>
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-text-custom/80 leading-relaxed">
                  Puedes contactar a tu mentor asignado a través del botón de
                  chat en tu perfil o utilizando el formulario de contacto
                  directo al final de esta sección.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-8 space-y-4">
            <div className="p-4 bg-[#007BFF]/5 rounded-xl border border-[#007BFF]/10 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#007BFF] mt-0.5">
                info
              </span>
              <p className="text-xs text-[#0F172A] font-medium leading-relaxed">
                ¿No encontraste lo que buscabas? Nuestro equipo de capacitadores
                está listo para ayudarte personalmente.
              </p>
            </div>
            <a
              className="w-full bg-[#007BFF] hover:bg-[#0069e0] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-[#007BFF]/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              href="https://wa.me/50376753999?text=Hola, tengo una duda con respecto al programa de ExplorArte"
              target="_blank"
            >
              <span className="material-symbols-outlined">send</span>
              <span className="uppercase text-center text-sm tracking-wide">
                Hacer una pregunta a capacitadores
              </span>
            </a>
          </div>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#007BFF] px-2 pb-4 pt-2 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
          <div className="max-w-lg mx-auto flex justify-around items-center">
            <Link
              to="/login"
              className="flex flex-1 flex-col items-center gap-1 text-primary"
            >
              <div className="flex w-12 h-12 items-center justify-center rounded-2xl text-text-main/40 hover:bg-[#007BFF]/10 transition-colors">
                <span className="material-symbols-outlined text-2xl font-fill">
                  home
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">
                Inicio
              </p>
            </Link>
            <Link
              className="flex flex-1 flex-col items-center gap-1 text-primary"
              to="/docente/dashboard"
            >
              <div className="flex w-12 h-12 items-center justify-center rounded-2xl text-text-main/40 hover:bg-[#007BFF]/10 transition-colors">
                <span className="material-symbols-outlined text-2xl font-fill">
                  auto_stories
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">
                Módulos
              </p>
            </Link>
            <Link
              className="flex flex-1 flex-col items-center gap-1 text-primary"
              to="/faq"
            >
              <button
                className="flex flex-1 flex-col items-center gap-2"
                type="button"
              >
                <div className="flex w-12 h-12 items-center justify-center rounded-2xl text-text-main/40 hover:bg-[#007BFF]/10 transition-colors">
                  <span className="material-symbols-outlined text-4xl">
                    contact_support
                  </span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-text-main/60">
                  Q&A
                </p>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </AppShell>
  );
}
