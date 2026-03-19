import { Link, useNavigate } from "react-router-dom";
import AppShell from "../components/layout/AppShell.jsx";
import DocenteModuleCard from "../components/modules/DocenteModuleCard.jsx";
import DocenteResourceCard from "../components/modules/DocenteResourceCard.jsx";

const MODULES = [
  {
    id: 1,
    category: "Psicología",
    title: "Manejo de Emociones",
    icon: "psychology",
    accentColor: "#117899",
  },
  {
    id: 2,
    category: "Social",
    title: "Empatía y Socialización",
    icon: "diversity_3",
    accentColor: "#2ECC71",
  },
  {
    id: 3,
    category: "Innovación",
    title: "Creatividad Crítica",
    icon: "lightbulb",
    accentColor: "#F1C40F",
  },
  {
    id: 4,
    category: "Cívica",
    title: "Ética y Valores",
    icon: "balance",
    accentColor: "#007BFF",
  },
];

const RESOURCES = [
  {
    icon: "picture_as_pdf",
    title: "Guía PDF",
    meta: "Disponible offline",
    color: "#117899",
  },
  {
    icon: "play_circle",
    title: "Video Clase",
    meta: "Video MP4 • 15:20 min",
    color: "#007BFF",
  },
  {
    icon: "headset",
    title: "Audio Cuento",
    meta: "Audio MP3 • 8:45 min",
    color: "#2ECC71",
  },
];

export default function DocenteDashboardPage() {
  const navigate = useNavigate();
  const goToModule = () => navigate("/docente/modulo");

  return (
    <AppShell
      role="docente"
      className="bg-white font-display text-text-main min-h-screen"
    >
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-32">
        <header className="sticky top-0 z-50 flex items-center bg-white border-b-2 border-[#007BFF]/20 p-4 justify-between shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-text-main text-xl font-bold leading-tight tracking-tight">
              ExplorArte - Biblioteca
            </h1>
          </div>
          <button
            type="button"
            className="hover:scale-110 transition-transform p-3 rounded-full bg-black/5 text-custom-text flex items-center justify-center"
          >
            <span className="material-symbols-outlined" data-icon="refresh">
              refresh
            </span>
          </button>
        </header>

        <section className="px-4 pt-8 pb-6 bg-[#F1C40F]/5">
          <div className="flex items-center gap-3 mb-5">
            <span className="material-symbols-outlined text-2xl text-[#007BFF]">
              signal_wifi_off
            </span>
            <h2 className="text-text-main text-base font-extrabold uppercase tracking-widest">
              Materiales Descargados
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {RESOURCES.map((item) => (
              <DocenteResourceCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                meta={item.meta}
                color={item.color}
                onClick={() => {
                  /* TODO: implementar acción real de descarga */
                }}
              />
            ))}
          </div>
        </section>

        <main className="px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-text-main text-lg font-black">
              Módulos de Aprendizaje
            </h2>
            <span className="bg-[#2ECC71] text-white px-3 py-1 rounded-3xl text-xs font-bold">
              Progreso: 4/12
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MODULES.map((module) => (
              <DocenteModuleCard
                key={module.id}
                number={module.id}
                category={module.category}
                title={module.title}
                icon={module.icon}
                accentColor={module.accentColor}
                onClick={goToModule}
              />
            ))}

            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 flex flex-col gap-6 shadow-inner opacity-70">
              <div className="flex items-center gap-5">
                <div className="size-14 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500 font-black text-2xl">
                  5
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-slate-400 font-bold">
                      record_voice_over
                    </span>
                    <span className="text-slate-400 text-xs font-black uppercase tracking-tighter">
                      Comunicación
                    </span>
                  </div>
                  <h3 className="text-slate-600 font-extrabold text-lg leading-tight">
                    Comunicación Asertiva
                  </h3>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-slate-200 text-slate-500 py-4 rounded-xl font-black text-base uppercase tracking-widest"
                disabled
              >
                BLOQUEADO
              </button>
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 flex flex-col gap-6 shadow-inner opacity-70">
              <div className="flex items-center gap-5">
                <div className="size-14 rounded-xl bg-slate-200 flex items-center justify-center text-slate-500 font-black text-2xl">
                  6
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-slate-400 font-bold">
                      school
                    </span>
                    <span className="text-slate-400 text-xs font-black uppercase tracking-tighter">
                      Educación
                    </span>
                  </div>
                  <h3 className="text-slate-600 font-extrabold text-lg leading-tight">
                    Pedagogía Activa
                  </h3>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-slate-200 text-slate-500 py-4 rounded-xl font-black text-base uppercase tracking-widest"
                disabled
              >
                BLOQUEADO
              </button>
            </div>

            <div className="col-span-1 sm:col-span-2 py-8 text-center">
              <p className="text-text-main/50 text-base font-bold italic">
                Desliza para ver los 12 módulos disponibles
              </p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="size-2 rounded-full bg-[#007BFF]" />
                <div className="size-2 rounded-full bg-slate-300" />
                <div className="size-2 rounded-full bg-slate-300" />
              </div>
            </div>
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
