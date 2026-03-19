import AppShell from "../components/layout/AppShell.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="login"
      className="bg-custom-bg text-custom-text min-h-screen"
    >
      <div className="font-display min-h-screen flex flex-col items-center">
        <header className="w-full max-w-[480px] flex items-center justify-between p-4 sticky top-0 z-10 bg-custom-bg">
          <h1 className="text-xl font-black tracking-tight flex-1 text-center uppercase">
            ExplorArte
          </h1>
          <div className="flex items-center justify-end size-12">
            <button
              type="button"
              className="hover:scale-110 transition-transform p-3 rounded-full bg-black/5 text-custom-text flex items-center justify-center"
            >
              <span className="material-symbols-outlined" data-icon="refresh">
                refresh
              </span>
            </button>
          </div>
        </header>

        <main className="flex-1 w-full max-w-[480px] flex flex-col px-6 py-6 gap-6 items-center justify-center">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-black leading-tight tracking-tight">
              ¡Hola, Bienvenido/a!
            </h2>
            <p className="text-xl font-semibold opacity-80">
              ¿Cómo quieres ingresar hoy?
            </p>
          </div>

          <div className="flex flex-col w-full gap-4">
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="group flex flex-col items-center justify-center w-full gap-3 p-6 bg-[#000080] hover:brightness-110 text-white rounded-2xl shadow-xl shadow-[#000080]/20 transition-all border-b-4 border-black/20 active:border-b-0 active:translate-y-1"
            >
              <div className="bg-white/20 rounded-full p-3 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-5xl p-0"
                  data-icon="settings"
                >
                  settings
                </span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-black tracking-wider uppercase block leading-none">
                  Soy Capacitador
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => navigate("/docente/modulo")}
              className="group flex flex-col items-center justify-center w-full gap-3 p-6 bg-[#007BFF] hover:brightness-110 text-white rounded-2xl shadow-xl shadow-[#007BFF]/20 transition-all border-b-4 border-black/20 active:border-b-0 active:translate-y-1"
            >
              <div className="bg-white/20 rounded-full p-3 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-5xl"
                  data-icon="school"
                >
                  school
                </span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-black tracking-wider uppercase block">
                  Soy Docente
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => navigate("/estudiante/libros")}
              className="group flex flex-col items-center justify-center w-full gap-3 p-6 bg-[#5DADE2] hover:brightness-110 text-white rounded-2xl shadow-xl shadow-[#5DADE2]/20 transition-all border-b-4 border-black/20 active:border-b-0 active:translate-y-1"
            >
              <div className="bg-white/20 rounded-full p-3 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-5xl"
                  data-icon="menu_book"
                >
                  menu_book
                </span>
              </div>
              <div className="text-center">
                <span className="text-2xl font-black tracking-wider uppercase block">
                  Soy Estudiante
                </span>
                <span className="text-sm font-bold opacity-90 block mt-1">
                  Solo para ver mis libros en PDF
                </span>
              </div>
            </button>
          </div>

          <div className="mt-2 opacity-60 flex gap-6">
            <span className="material-symbols-outlined text-5xl">draw</span>
            <span className="material-symbols-outlined text-5xl">
              auto_stories
            </span>
            <span className="material-symbols-outlined text-5xl">
              theater_comedy
            </span>
          </div>
        </main>

        <footer className="w-full max-w-[480px] p-6 text-center">
          <button
            onClick={() => navigate("/faq")}
            type="button"
            className="text-custom-text font-black text-base flex items-center justify-center gap-2 w-full py-4 hover:text-primary-orange transition-colors"
          >
            <span className="material-symbols-outlined text-xl">help</span>
            ¿Problemas para ingresar? Contacto
          </button>
          <div className="h-6" />
        </footer>
      </div>
    </AppShell>
  );
}
