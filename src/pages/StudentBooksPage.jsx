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
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">arrow_back</span>
          </button>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-primary">
            Mis Libros - ExplorArte
          </h1>
        </div>
        <button type="button" className="w-12 h-12 flex items-center justify-center text-student-text dark:text-slate-100">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Libros de Estudiantes</h2>
          <p className="text-lg opacity-80">
            Explora y lee tus materiales educativos favoritos.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Book Item 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border-2 border-primary/20 p-6 flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 w-32 h-40 bg-primary/5 rounded-lg flex items-center justify-center border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <span className="material-symbols-outlined text-primary/40 text-4xl">
                  picture_as_pdf
                </span>
              </div>
              <span className="material-symbols-outlined text-primary text-7xl">book_5</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2 text-student-text dark:text-white">
                Libro de Lectura 1
              </h3>
              <p className="text-lg text-student-text/70 dark:text-slate-400 mb-6">
                Material oficial de lectura para primer grado. Aventuras y cuentos clásicos.
              </p>
              <button type="button" className="w-full md:w-auto px-8 py-5 bg-primary text-white text-xl font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-primary-dark active:scale-95 transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-3xl">
                  picture_as_pdf
                </span>
                ABRIR LIBRO (PDF)
              </button>
            </div>
          </div>

          {/* Book Item 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border-2 border-primary/20 p-6 flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 w-32 h-40 bg-primary/5 rounded-lg flex items-center justify-center border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <span className="material-symbols-outlined text-primary/40 text-4xl">
                  picture_as_pdf
                </span>
              </div>
              <span className="material-symbols-outlined text-primary text-7xl">psychology</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2 text-student-text dark:text-white">
                Bitácora de Emociones
              </h3>
              <p className="text-lg text-student-text/70 dark:text-slate-400 mb-6">
                Cuaderno de actividades interactivas para el autoconocimiento y la empatía.
              </p>
              <button type="button" className="w-full md:w-auto px-8 py-5 bg-primary text-white text-xl font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-primary-dark active:scale-95 transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                ABRIR LIBRO (PDF)
              </button>
            </div>
          </div>

          {/* Book Item 3 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl border-2 border-primary/20 p-6 flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex-shrink-0 w-32 h-40 bg-primary/5 rounded-lg flex items-center justify-center border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <span className="material-symbols-outlined text-primary/40 text-4xl">
                  picture_as_pdf
                </span>
              </div>
              <span className="material-symbols-outlined text-primary text-7xl">palette</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2 text-student-text dark:text-white">
                Taller de Arte y Color
              </h3>
              <p className="text-lg text-student-text/70 dark:text-slate-400 mb-6">
                Guía técnica y creativa para explorar diferentes materiales artísticos.
              </p>
              <button type="button" className="w-full md:w-auto px-8 py-5 bg-primary text-white text-xl font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-primary-dark active:scale-95 transition-all shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                ABRIR LIBRO (PDF)
              </button>
            </div>
          </div>
        </div>

        <div className="h-24" />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-primary/10 px-4 pb-6 pt-3 flex justify-around items-center z-50">
        <Link className="flex flex-col items-center gap-1 text-primary/60 hover:text-primary transition-colors" to="/estudiante/libros">
          <span className="material-symbols-outlined text-3xl">home</span>
          <span className="text-xs font-semibold">Inicio</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-primary" to="/estudiante/libros">
          <span className="material-symbols-outlined text-3xl font-fill">menu_book</span>
          <span className="text-xs font-bold">Mis Libros</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-primary/60 hover:text-primary transition-colors" to="/docente/modulo">
          <span className="material-symbols-outlined text-3xl">explore</span>
          <span className="text-xs font-semibold">Explorar</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 text-primary/60 hover:text-primary transition-colors" to="/faq?source=estudiante">
          <span className="material-symbols-outlined text-3xl">account_circle</span>
          <span className="text-xs font-semibold">Perfil</span>
        </Link>
      </nav>
    </AppShell>
  );
}

