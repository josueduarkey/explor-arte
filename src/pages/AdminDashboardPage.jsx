import AppShell from "../components/layout/AppShell.jsx";
import { Link, useNavigate } from "react-router-dom";
import { clearCapacitadorUnlocked } from "../lib/capacitadorAuth.js";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="admin"
      className="bg-[#EFF4FF] font-display text-[#000080]  min-h-screen pb-24"
    >
      <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">
              dashboard_customize
            </span>
            <h1 className="text-xl font-bold tracking-tight text-[#000070] ">
              ExplorArte - Panel Capacitador
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#000080] uppercase tracking-wide">
            Gestionar Módulos
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => navigate("/admin/ordenar-modulos")}
              className="p-2 rounded-lg bg-[#000080] border border-[#000080]/20 shadow-sm text-white hover:bg-[#000066] transition-colors"
            >
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/gestion-modulos")}
              className="p-2 rounded-lg bg-[#000080] border border-[#000080]/20 shadow-sm text-white hover:bg-[#000066] transition-colors"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Module 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/5 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full bg-primary/5 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Classic renaissance painting gallery interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2EjB8Lu8PBNN9OLHQTWApZ3IG1gxapoV_TbuhtkKzKmf6kbwEa9srjipJOst25Kh7aAq-42wkJsmVoMBgyA5NOqEKaDQuwF9yFmE59Aok_YJ2kKnfaAxUrkUMvqZulC76D49AQhwNA90KW2Vybwb3yOV5KRC7kMYkV0hCY8oUl_Xs5jkTXhz-4ogC4jSDu6ejGJktSHtdyTyAeBxFxJubx36_8_OG9ibGH91vq1APGJ0JcA6rfmiyM3dI-7tJ4SvUUNKlCEwNNYgw"
              />
              <div className="absolute top-2 right-2 p-2 bg-white/90 dark:bg-slate-900/90 rounded-lg cursor-grab active:cursor-grabbing text-primary">
                <span className="material-symbols-outlined">
                  drag_indicator
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-tight">
                  Módulo 1: Historia del Arte
                </h3>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                  ACTIVO
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                Exploración cronológica desde el arte rupestre hasta el
                neoclasicismo.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/admin/gestion-modulos")}
                  className="flex-1 py-2 bg-[#000080]  text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#000050]/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                  EDITAR
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/docente/modulo")}
                  className="flex justify-center items-center px-3 py-2 border border-[#000080]/20 rounded-lg text-[#000080] hover:bg-[#000080]/5"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/5 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full bg-primary/5 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Brushes and colorful paint palettes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoMJcsPyYwLFz_gjp5LXvGPwElFPqAe_O1wzJDzKgQDMtTWeX9e-JlySWp0Ys1o7LsTydbBa7cRlBr-UEvcRKtYGnEERRvt8Hes4Wh_cQf1rArwTowaapHLM4TtaUEMQXnCWxYH1yP-K3AhMFdJ_bqNDTnpGBXbfiF_N55N3OzQ4WFx_e9ukJADWuyhz-dTt02UsFBpZ86Nm0b2yPmjzMSH4KdA_7iv2mdBarwjQWDJMetPl3_ELVa92bIheLHMoQa6UeMTqgZU4HA"
              />
              <div className="absolute top-2 right-2 p-2 bg-white/90 dark:bg-slate-900/90 rounded-lg cursor-grab text-primary">
                <span className="material-symbols-outlined">
                  drag_indicator
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-tight">
                  Módulo 2: Técnicas
                </h3>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                  ACTIVO
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                Óleo, acuarela, acrílico y técnicas mixtas contemporáneas.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/admin/gestion-modulos")}
                  className="flex-1 py-2 bg-[#000080]  text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#000050]/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                  EDITAR
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/docente/modulo")}
                  className="flex justify-center items-center px-3 py-2 border border-[#000080]/20 rounded-lg text-[#000080] hover:bg-[#000080]/5"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/5 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full bg-primary/5 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Shelves with various art supplies"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBamJ219b543t7hf-yF077wD0bIDv8ljp6q2stykC4vtFG2Yet6JNPyd0PKKd1o6T_duUsbAgvzQnNOLgfHWtOqHe-Bie67D3kd8UQGru8mUzkcckeg0jSzRHkR_rOSiXEd9BXDsfIAhp77d9Pki2QFZnfL14-c8Xjr54GR_JnRKUtHoajTiiTAum9sfWsvNMj70hkYkThtoXEtqbqVo9frgxsSaypHAky8Eyew1JYTYCDJKQzmR9JaHp_n_5kmWTmimaxOIwB2NLQ1"
              />
              <div className="absolute top-2 right-2 p-2 bg-white/90 dark:bg-slate-900/90 rounded-lg cursor-grab text-primary">
                <span className="material-symbols-outlined">
                  drag_indicator
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-tight">
                  Módulo 3: Materiales
                </h3>
                <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">
                  BORRADOR
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                Guía completa sobre soportes, pigmentos y herramientas
                profesionales.
              </p>{" "}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/admin/gestion-modulos")}
                  className="flex-1 py-2 bg-[#000080]  text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#000050]/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                  EDITAR
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/docente/modulo")}
                  className="flex justify-center items-center px-3 py-2 border border-[#000080]/20 rounded-lg text-[#000080] hover:bg-[#000080]/5"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          </div>

          {/* Module 4 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/5 overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative h-48 w-full bg-primary/5 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Vibrant color theory wheel graphic"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnQ_hFgCayB-kFHVjFnfC03r8sp1IuUumrdCFR-5PFFMPFZaLVG-gzErA3WBZRAIrqI41f-oSN4vPQv3KfzVJW5FRaeS5BW_tS5DsvO7gJQ-jL1CX6aKF0I_CAyHCxHI2o2KwN648otESizdhA2t5F8lZxW2IRJx3RKnZUm1YkZTWf34l75afAcftR2cIckInaxl5Hk0ROlX0eq8Zl7RrdbRFK-eTEBRNqIsR5-zXs__o9WwG9kapzbsF9K2VIPCZESzZvwr8_pDne"
              />
              <div className="absolute top-2 right-2 p-2 bg-white/90 dark:bg-slate-900/90 rounded-lg cursor-grab text-primary">
                <span className="material-symbols-outlined">
                  drag_indicator
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-tight">
                  Módulo 4: Color
                </h3>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                  ACTIVO
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                Teoría cromática, psicología del color y armonías visuales.
              </p>              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/admin/gestion-modulos")}
                  className="flex-1 py-2 bg-[#000080]  text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#000050]/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                  EDITAR
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/docente/modulo")}
                  className="flex justify-center items-center px-3 py-2 border border-[#000080]/20 rounded-lg text-[#000080] hover:bg-[#000080]/5"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add Module Button */}
        <div className="mt-12 flex justify-center pb-8">
          <button
            type="button"
            onClick={() => navigate("/admin/gestion-modulos")}
            className="group flex items-center gap-3 bg-[#000080] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#000066] hover:shadow-[#000080]/30 hover:scale-[1.02] transition-all"
          >
            <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform">
              add_circle
            </span>
            AÑADIR NUEVO MÓDULO
          </button>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-primary/10 px-4 pb-safe pt-2 z-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Link
            to="/login"
            onClick={() => clearCapacitadorUnlocked()}
            className="flex flex-1 flex-col items-center gap-1 text-primary"
          >
            <span className="material-symbols-outlined text-2xl font-fill">
              home
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Inicio
            </span>
          </Link>
          <Link
            className="flex flex-1 flex-col items-center gap-1 text-primary"
            to="/admin"
          >
            <span className="material-symbols-outlined text-2xl font-fill">
              grid_view
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Módulos
            </span>
          </Link>
          <Link
            className="flex flex-1 flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"
            to="/faq?source=admin"
          >
            <span className="material-symbols-outlined text-2xl">settings</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              Configuración
            </span>
          </Link>
        </div>
      </nav>
    </AppShell>
  );
}
