import AppShell from "../components/layout/AppShell.jsx";
import { useNavigate } from "react-router-dom";

export default function AdminValidateCodePage() {
  const navigate = useNavigate();

  return (
    <AppShell
      role="admin"
      className="font-display bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 overflow-hidden"
    >
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-sm bg-modal-bg rounded-xl shadow-2xl flex flex-col overflow-hidden">
        <div className="pt-8 px-6 text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">
              lock
            </span>
          </div>
          <h2 className="text-text-main text-2xl font-bold leading-tight">
            Acceso de Seguridad
          </h2>
          <p className="text-text-main/70 text-sm font-normal mt-2">
            Por favor, ingresa tu código de 6 dígitos para agregar nuevo material.
          </p>
        </div>

        <div className="flex justify-center gap-2 px-6 py-8">
          <input
            className="w-10 h-14 text-center text-xl font-bold border-b-2 border-teal-accent bg-transparent focus:border-primary focus:ring-0 text-text-main"
            maxLength={1}
            type="text"
            defaultValue="8"
          />
          <input
            className="w-10 h-14 text-center text-xl font-bold border-b-2 border-teal-accent bg-transparent focus:border-primary focus:ring-0 text-text-main"
            maxLength={1}
            type="text"
            defaultValue="4"
          />
          <input
            className="w-10 h-14 text-center text-xl font-bold border-b-2 border-teal-accent bg-transparent focus:border-primary focus:ring-0 text-text-main"
            maxLength={1}
            placeholder="·"
            type="text"
          />
          <input
            className="w-10 h-14 text-center text-xl font-bold border-b-2 border-teal-accent bg-transparent focus:border-primary focus:ring-0 text-text-main"
            maxLength={1}
            placeholder="·"
            type="text"
          />
          <input
            className="w-10 h-14 text-center text-xl font-bold border-b-2 border-teal-accent bg-transparent focus:border-primary focus:ring-0 text-text-main"
            maxLength={1}
            placeholder="·"
            type="text"
          />
          <input
            className="w-10 h-14 text-center text-xl font-bold border-b-2 border-teal-accent bg-transparent focus:border-primary focus:ring-0 text-text-main"
            maxLength={1}
            placeholder="·"
            type="text"
          />
        </div>

        <div className="bg-black/5 p-4 grid grid-cols-3 gap-2">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0"].map((v, idx) => (
            <button
              key={`${v}-${idx}`}
              type="button"
              className="h-14 flex items-center justify-center text-xl font-semibold text-text-main hover:bg-black/10 rounded-lg"
              aria-hidden={v ? undefined : true}
            >
              {v ? v : null}
            </button>
          ))}
          <button
            type="button"
            className="h-14 flex items-center justify-center text-xl font-semibold text-text-main hover:bg-black/10 rounded-lg"
          >
            <span className="material-symbols-outlined">backspace</span>
          </button>
        </div>

        <div className="p-6 space-y-3">
          <button
            type="button"
            onClick={() => navigate("/admin/gestion-modulos")}
            className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
          >
            VALIDAR CÓDIGO
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="w-full text-text-main/60 font-medium py-2 hover:text-text-main transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </AppShell>
  );
}

