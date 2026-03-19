import AppShell from "../components/layout/AppShell.jsx";
import { useNavigate } from "react-router-dom";

export default function AdminReorderPage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="admin"
      className="bg-background-light dark:bg-background-dark font-display text-[#333333] dark:text-slate-100 antialiased"
    >
      <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-white shadow-2xl">
        <header className="flex items-center bg-white border-b border-slate-100 p-4 pb-4 justify-between sticky top-0 z-10">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-primary text-lg font-bold leading-tight tracking-tight flex-1 px-2 text-center mr-10">
            Reordenar Módulos
          </h2>
          <div className="w-10" />
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mb-6">
            <p className="text-[#333333] text-sm font-medium leading-relaxed opacity-80">
              Arrastra los módulos para cambiar el orden que verán las maestras en su panel de ExplorArte.
            </p>
          </div>

          <div className="space-y-3">
            {[
              ["Módulo 01", "Introducción a las Artes Plásticas"],
              ["Módulo 02", "Teoría del Color Aplicada"],
              ["Módulo 03", "Escultura y Modelado Básico"],
              ["Módulo 04", "Historia del Arte Moderno"],
              ["Módulo 05", "Técnicas de Acuarela Experimental"],
            ].map(([modTitle, subtitle]) => (
              <div
                key={modTitle}
                className="flex items-center gap-4 bg-background-light border-2 border-slate-100 rounded-xl p-4 shadow-sm active:scale-[0.98] active:border-primary/30 transition-all cursor-grab"
              >
                <div className="text-primary/60 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">
                    drag_indicator
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/50">
                    {modTitle}
                  </span>
                  <p className="text-[#333333] text-base font-semibold leading-tight truncate">
                    {subtitle}
                  </p>
                </div>
                <div className="text-primary/40">
                  <span className="material-symbols-outlined">reorder</span>
                </div>
              </div>
            ))}

            <div className="h-24" />
          </div>
        </main>

        <footer className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="pointer-events-auto w-full bg-primary text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-primary/90 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">check_circle</span>
            CONFIRMAR NUEVO ORDEN
          </button>
        </footer>
      </div>
    </AppShell>
  );
}

