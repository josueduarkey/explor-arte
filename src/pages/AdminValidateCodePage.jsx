import AppShell from "../components/layout/AppShell.jsx";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  clearCapacitadorUnlocked,
  setCapacitadorUnlocked,
} from "../lib/capacitadorAuth.js";

export default function AdminValidateCodePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectTarget = useMemo(() => {
    const raw = searchParams.get("redirect");
    if (!raw) return "/admin/gestion-modulos";
    try {
      const decoded = decodeURIComponent(raw);
      return decoded.startsWith("/") ? decoded : "/admin/gestion-modulos";
    } catch {
      return "/admin/gestion-modulos";
    }
  }, [searchParams]);

  const CORRECT_CODE = "102026";
  const [enteredCode, setEnteredCode] = useState("");
  const [error, setError] = useState("");

  const addDigit = (digit) => {
    setEnteredCode((prev) => {
      if (prev.length >= 6) return prev;
      setError("");
      return prev + digit;
    });
  };

  const backspace = () => {
    setEnteredCode((prev) => prev.slice(0, -1));
    setError("");
  };

  const onValidate = () => {
    if (enteredCode.length !== 6) {
      setError("Ingresa los 6 dígitos");
      return;
    }

    if (enteredCode === CORRECT_CODE) {
      setCapacitadorUnlocked();
      navigate(redirectTarget, { replace: true });
      return;
    }

    setError("Código incorrecto");
    setEnteredCode("");
  };

  const onCancel = () => {
    clearCapacitadorUnlocked();
    navigate("/login", { replace: true });
  };

  return (
    <AppShell
      role="admin"
      className="font-display bg-background-light dark:bg-background-dark  flex items-center justify-center p-4 overflow-hidden"
    >
      <div className="z-0" />

      <div className="relative z-10 w-full max-w-sm bg-modal-bg rounded-xl flex flex-col border overflow-hidden">
        <div className="pt-8 px-6 text-center">
          <div className="mx-auto w-12 h-12 bg-[#000080]/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-[#000080] text-3xl">
              lock
            </span>
          </div>
          <h2 className="text-text-main text-2xl font-bold leading-tight">
            Acceso de Seguridad
          </h2>
          <p className="text-text-main/70 text-sm font-normal mt-2">
            Por favor, ingresa tu código de 6 dígitos para agregar nuevo
            material.
          </p>
        </div>

        <div className="flex justify-center gap-2 px-6 py-4">
          {Array.from({ length: 6 }).map((_, idx) => {
            const digit = enteredCode[idx] ?? "";
            return (
              <input
                key={idx}
                className="w-10 h-14 text-center text-xl font-bold border-b-2 border-teal-accent bg-transparent focus:border-[#000080] focus:ring-0 text-text-main"
                maxLength={1}
                type="text"
                value={digit}
                placeholder="·"
                readOnly
              />
            );
          })}
        </div>

        <div className="bg-black/5 p-4 grid grid-cols-3 gap-2">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0"].map(
            (v, idx) => {
              const isEmpty = v === "";
              return (
                <button
                  key={v ? `digit-${v}` : `empty-${idx}`}
                  type="button"
                  onClick={() => {
                    if (isEmpty) return;
                    addDigit(v);
                  }}
                  className="h-14 flex items-center justify-center text-xl font-semibold text-text-main hover:bg-black/10 rounded-lg"
                  aria-hidden={isEmpty ? true : undefined}
                >
                  {isEmpty ? null : v}
                </button>
              );
            },
          )}
          <button
            type="button"
            onClick={backspace}
            className="h-14 flex items-center justify-center text-xl font-semibold text-text-main hover:bg-black/10 rounded-lg"
          >
            <span className="material-symbols-outlined">backspace</span>
          </button>
        </div>

        {error ? (
          <p className="px-6 py-3 text-center text-md text-red-600">{error}</p>
        ) : null}

        <div className="p-3 space-y-3">
          <button
            type="button"
            onClick={onValidate}
            className="w-full bg-[#000080] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#000080]/30 active:scale-[0.98] transition-transform"
          >
            VALIDAR CÓDIGO
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="w-full text-text-main/60 font-medium py-2 hover:text-text-main transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </AppShell>
  );
}
