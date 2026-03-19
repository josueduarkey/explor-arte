import AppShell from "../components/layout/AppShell.jsx";
import { useNavigate } from "react-router-dom";
import AdminResourceRow from "../components/modules/AdminResourceRow.jsx";

export default function AdminModulesPage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="admin"
      className="bg-background-light dark:bg-background-dark font-display text-[#333333] dark:text-slate-100 min-h-screen"
    >
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-primary/10 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center p-4 justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold flex-1 text-primary">
            Editar Módulo 1
          </h1>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">admin_panel_settings</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
        <section>
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4 px-1">
            Subir Nuevo Recurso
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              type="button"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white dark:bg-slate-800 border-2 border-dashed border-primary/20 hover:border-primary hover:bg-primary/5 rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">
                picture_as_pdf
              </span>
              <span className="font-bold text-sm tracking-wide">SUBIR PDF</span>
            </button>
            <button
              type="button"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white dark:bg-slate-800 border-2 border-dashed border-primary/20 hover:border-primary hover:bg-primary/5 rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">
                movie
              </span>
              <span className="font-bold text-sm tracking-wide">SUBIR VIDEO</span>
            </button>
            <button
              type="button"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white dark:bg-slate-800 border-2 border-dashed border-primary/20 hover:border-primary hover:bg-primary/5 rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">
                audiotrack
              </span>
              <span className="font-bold text-sm tracking-wide">SUBIR AUDIO</span>
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase">
              Recursos Actuales
            </h2>
            <span className="text-xs font-medium text-slate-500">
              4 recursos en total
            </span>
          </div>

          <div className="space-y-3">
            {/* Resource Item 1 */}
            <AdminResourceRow
              icon="description"
              title="Introducción al Renacimiento"
              meta="Documento PDF • 2.4 MB"
              onEdit={() => {}}
              onDelete={() => {}}
            />

            {/* Resource Item 2 */}
            <AdminResourceRow
              icon="play_circle"
              title="Técnicas de Fresco en el Siglo XV"
              meta="Video • 12:45 min"
              onEdit={() => {}}
              onDelete={() => {}}
            />

            {/* Resource Item 3 */}
            <AdminResourceRow
              icon="headphones"
              title="Análisis de la Capilla Sixtina"
              meta="Audio • 4.1 MB"
              onEdit={() => {}}
              onDelete={() => {}}
            />

            {/* Resource Item 4 */}
            <AdminResourceRow
              icon="quiz"
              title="Cuestionario de Repaso - Módulo 1"
              meta="Evaluación • 10 Preguntas"
              onEdit={() => {}}
              onDelete={() => {}}
            />
          </div>
        </section>

        <div className="pt-6 pb-12">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">save</span>
            GUARDAR CAMBIOS
          </button>
          <p className="text-center text-sm text-slate-500 mt-4">
            Última edición hoy a las 14:32
          </p>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-primary text-white py-1.5 px-4 text-[10px] uppercase tracking-widest font-bold flex justify-between items-center">
        <span>Modo Administrador</span>
        <span className="opacity-70">v2.4.0 • ExplorArte</span>
      </footer>
    </AppShell>
  );
}

