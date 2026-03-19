import AppShell from "../components/layout/AppShell.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function DocenteModulePage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="docente"
      className="bg-[#F8FCFF] font-display text-[#0F172A] min-h-screen"
    >
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-32">
        <header className="sticky top-0 z-10 bg-white border-b-2 border-[#007BFF]/20 shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-[#007BFF] bg-[#007BFF]/10 hover:bg-[#007BFF]/20 p-2 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-2xl font-bold">
                  arrow_back
                </span>
              </button>
              <h1 className="text-xl font-bold tracking-tight text-[#0F172A]">
                Módulo 1
              </h1>
            </div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-[#007BFF] text-white text-sm font-black tracking-widest uppercase px-3 py-1 rounded hover:bg-[#0069e0] transition-colors"
            >
              VOLVER
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="mb-6">
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 shadow-sm">
              <img
                alt="Education and Learning"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8G_Mpur64Yn_0b_hGjC0GRK8nngKIybjh1DmrQkSaHGz7VIBqjOn6G68hkT7I5G4ZgtTz15zhSjnXHPELku9Iw_tZgJU_wfzPEWFnqxzCL8Y_gWtqChPf_y8_5ZkLSo_dBk1ZnXx8M57W4kb-f5EhU6s2-ZL5sYRp4MaezQ7OYbjae-388zSmAOgg_fkwDXeEhkLZ2hAN8Y5qnVAfWgyk4JTxZCciTbtPNU3-5jiVVWhd5bJzgFMB-plfguPs38wAWbCWDGMISOYu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-95">
                  Fundamentos y Primeros Pasos
                </p>
              </div>
            </div>
            <p className="text-[#334155] text-sm leading-relaxed">
              En este módulo exploraremos las bases conceptuales y las
              herramientas iniciales para tu formación.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#007BFF] uppercase tracking-wider ml-1">
              Recursos Disponibles
            </h3>

            {[
              {
                icon: "picture_as_pdf",
                title: "Manual de Actividades",
                meta: "Documento PDF • 2.4 MB",
                color: "#007BFF",
              },
              {
                icon: "play_circle",
                title: "Video Tutorial 1",
                meta: "Video MP4 • 15:20 min",
                color: "#007BFF",
              },
              {
                icon: "headset",
                title: "Audio Cuento 1",
                meta: "Audio MP3 • 8:45 min",
                color: "#007BFF",
              },
            ].map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col gap-3 p-4 bg-white rounded-xl border border-[#007BFF]/20 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-lg bg-[#007BFF]/10 text-[#007BFF] size-12">
                    <span className="material-symbols-outlined">
                      {resource.icon}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-[#0F172A] text-base font-semibold leading-tight">
                      {resource.title}
                    </p>
                    <p className="text-[#64748B] text-xs font-normal">
                      {resource.meta}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#007BFF] text-white text-sm font-bold py-3 rounded-lg hover:bg-[#0069e0] transition-colors shadow-sm"
                >
                  {resource.icon === "picture_as_pdf"
                    ? "DESCARGAR Y VER"
                    : resource.icon === "play_circle"
                      ? "VER VIDEO"
                      : "ESCUCHAR"}
                </button>
              </div>
            ))}
          </div>

          <div className="py-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#007BFF] text-white text-sm font-bold py-4 rounded-xl shadow-lg hover:bg-[#0069e0] transition-colors"
            >
              <span className="material-symbols-outlined">
                download_for_offline
              </span>
              DESCARGAR TODO EL MÓDULO (45MB)
            </button>
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
