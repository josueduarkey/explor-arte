import AppShell from "../components/layout/AppShell.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function StudentBooksPage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="estudiante"
      className="bg-background-light dark:bg-background-dark font-display text-student-text dark:text-slate-100 min-h-screen flex flex-col"
    >
      <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-primary/10 px-4 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5DADE2]/10 text-[#5DADE2] hover:bg-[#5DADE2]/20 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">
              arrow_back
            </span>
          </button>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#5DADE2]">
            Mis Libros - ExplorArte
          </h1>
        </div>
        <button
          type="button"
          className="w-12 h-12 flex items-center justify-center text-student-text dark:text-slate-100"
        ></button>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Libros de Estudiantes</h2>
          <p className="text-lg opacity-80">
            Explora y lee tus materiales educativos favoritos.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border-2 border-[#5DADE2]/20 p-6 flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              className="flex-shrink-0 w-70 h-50 rounded-lg border border-[#5DADE2]/10 relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url(/caperucita)" }}
            ></div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2 text-student-text dark:text-white">
                Caperucita Roja
              </h3>
              <button
                type="button"
                className="w-full md:w-auto px-3 py-4 bg-[#5DADE2] text-white text-md font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#5DADE2]/80 active:scale-95 transition-all shadow-lg shadow-[#5DADE2]/20"
              >
                <span className="material-symbols-outlined text-3xl">
                  picture_as_pdf
                </span>
                ABRIR LIBRO (PDF)
              </button>
            </div>
          </div>

          {/* Book Item 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border-2 border-[#5DADE2]/20 p-6 flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              className="flex-shrink-0 w-70 h-50 rounded-lg border border-[#5DADE2]/10 relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url(/patito-feo.jpg)" }}
            ></div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2 text-student-text dark:text-white">
                El Patito Feo
              </h3>
              <button
                type="button"
                className="w-full md:w-auto px-3 py-4 bg-[#5DADE2] text-white text-md font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#5DADE2]/80 active:scale-95 transition-all shadow-lg shadow-[#5DADE2]/20"
              >
                <span className="material-symbols-outlined text-3xl">
                  picture_as_pdf
                </span>
                ABRIR LIBRO (PDF)
              </button>
            </div>
          </div>

          {/* Book Item 3 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border-2 border-[#5DADE2]/20 p-6 flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              className="flex-shrink-0 w-70 h-50 rounded-lg border border-[#5DADE2]/10 relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url(/tres-cerdos.jpeg)" }}
            ></div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2 text-student-text dark:text-white">
                Los Tres Cerditos
              </h3>
              <button
                type="button"
                className="w-full md:w-auto px-3 py-4 bg-[#5DADE2] text-white text-md font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#5DADE2]/80 active:scale-95 transition-all shadow-lg shadow-[#5DADE2]/20"
              >
                <span className="material-symbols-outlined text-3xl">
                  picture_as_pdf
                </span>
                ABRIR LIBRO (PDF)
              </button>
            </div>
          </div>
          {/* Book Item 4 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border-2 border-[#5DADE2]/20 p-6 flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              className="flex-shrink-0 w-70 h-50 rounded-lg border border-[#5DADE2]/10 relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url(/blancanieve.jpg)" }}
            ></div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2 text-student-text dark:text-white">
                Blancanieves
              </h3>
              <button
                type="button"
                className="w-full md:w-auto px-3 py-4 bg-[#5DADE2] text-white text-md font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#5DADE2]/80 active:scale-95 transition-all shadow-lg shadow-[#5DADE2]/20"
              >
                <span className="material-symbols-outlined text-3xl">
                  picture_as_pdf
                </span>
                ABRIR LIBRO (PDF)
              </button>
            </div>
          </div>
        </div>
      </main>

      <nav className="bg-white dark:bg-background-dark border-t border-[#5DADE2]/10 px-4 pb-6 pt-3 flex justify-around items-center z-50">
        <Link
          className="flex flex-col items-center gap-1 text-[#5DADE2]/60 hover:text-[#5DADE2] transition-colors"
          to="/login"
        >
          <span className="material-symbols-outlined text-3xl">home</span>
          <span className="text-xs font-semibold">Inicio</span>
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-[#5DADE2]"
          to="/estudiante/libros"
        >
          <span className="material-symbols-outlined text-3xl font-fill">
            menu_book
          </span>
          <span className="text-xs font-bold">Mis Libros</span>
        </Link>
      </nav>
    </AppShell>
  );
}
