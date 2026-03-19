import AppShell from "../components/layout/AppShell.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function DocenteModulePage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="docente"
      className="bg-background-light font-display text-text-main min-h-screen"
    >
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl flex flex-col">
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-accent/10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors"
              >
                <span className="material-symbols-outlined text-2xl font-bold">
                  arrow_back
                </span>
              </button>
              <h1 className="text-xl font-bold tracking-tight text-accent">
                Módulo 1
              </h1>
            </div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-primary text-sm font-black tracking-widest uppercase px-3 py-1 hover:bg-primary/5 rounded"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-90">
                  Fundamentos y Primeros Pasos
                </p>
              </div>
            </div>
            <p className="text-text-main/80 text-sm leading-relaxed">
              En este módulo exploraremos las bases conceptuales y las herramientas iniciales para tu formación.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider ml-1">
              Recursos Disponibles
            </h3>

            <div className="flex flex-col gap-3 p-4 bg-background-light rounded-xl border border-accent/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 size-12">
                  <span className="material-symbols-outlined">picture_as_pdf</span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-text-main text-base font-semibold leading-tight">
                    Manual de Actividades
                  </p>
                  <p className="text-text-main/60 text-xs font-normal">
                    Documento PDF • 2.4 MB
                  </p>
                </div>
              </div>
              <button type="button" className="w-full bg-primary text-white text-sm font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                DESCARGAR Y VER
              </button>
            </div>

            <div className="flex flex-col gap-3 p-4 bg-background-light rounded-xl border border-accent/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 size-12">
                  <span className="material-symbols-outlined">play_circle</span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-text-main text-base font-semibold leading-tight">
                    Video Tutorial 1
                  </p>
                  <p className="text-text-main/60 text-xs font-normal">
                    Video MP4 • 15:20 min
                  </p>
                </div>
              </div>
              <button type="button" className="w-full bg-primary text-white text-sm font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                VER VIDEO
              </button>
            </div>

            <div className="flex flex-col gap-3 p-4 bg-background-light rounded-xl border border-accent/5">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 size-12">
                  <span className="material-symbols-outlined">headset</span>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <p className="text-text-main text-base font-semibold leading-tight">
                    Audio Cuento 1
                  </p>
                  <p className="text-text-main/60 text-xs font-normal">
                    Audio MP3 • 8:45 min
                  </p>
                </div>
              </div>
              <button type="button" className="w-full bg-primary text-white text-sm font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
                ESCUCHAR
              </button>
            </div>
          </div>

          <div className="py-6">
            <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary text-white text-sm font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined">download_for_offline</span>
              DESCARGAR TODO EL MÓDULO (45MB)
            </button>
          </div>
        </main>

        <nav className="border-t border-accent/10 bg-white px-4 pb-6 pt-2">
          <div className="flex justify-around items-center">
            <Link
              className="flex flex-1 flex-col items-center gap-1 text-primary"
              to="/docente/modulo"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                book_2
              </span>
              <p className="text-[10px] font-medium uppercase tracking-tighter">
                Módulos
              </p>
            </Link>
            <Link
              className="flex flex-1 flex-col items-center gap-1 text-primary"
              to="/docente/modulo"
            >
              <span className="material-symbols-outlined">folder_open</span>
              <p className="text-[10px] font-medium uppercase tracking-tighter">
                Recursos
              </p>
            </Link>
            <Link
              className="flex flex-1 flex-col items-center gap-1 text-primary"
              to="/faq?source=docente"
            >
              <span className="material-symbols-outlined">quiz</span>
              <p className="text-[10px] font-medium uppercase tracking-tighter">
                Q&amp;A
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </AppShell>
  );
}

