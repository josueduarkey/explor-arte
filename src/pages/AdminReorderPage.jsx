import AppShell from "../components/layout/AppShell.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const initialModules = [
  { id: 1, title: "Módulo 01", subtitle: "Introducción a las Artes Plásticas" },
  { id: 2, title: "Módulo 02", subtitle: "Teoría del Color Aplicada" },
  { id: 3, title: "Módulo 03", subtitle: "Escultura y Modelado Básico" },
  { id: 4, title: "Módulo 04", subtitle: "Historia del Arte Moderno" },
  { id: 5, title: "Módulo 05", subtitle: "Técnicas de Acuarela Experimental" },
];

export default function AdminReorderPage() {
  const navigate = useNavigate();
  const [modules, setModules] = useState(initialModules);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const dragItem = useRef(null);

  const handleDragStart = (index) => {
    dragItem.current = index;
    setDragOverIndex(index);
  };

  const handleDragEnter = (index) => {
    setDragOverIndex(index);
  };

  const handleDragEnd = () => {
    if (dragItem.current === null || dragOverIndex === null) {
      setDragOverIndex(null);
      return;
    }

    const copied = [...modules];
    const [draggedModule] = copied.splice(dragItem.current, 1);
    copied.splice(dragOverIndex, 0, draggedModule);

    dragItem.current = null;
    setDragOverIndex(null);
    setModules(copied);
  };

  return (
    <AppShell
      role="admin"
      className="bg-[#EFF4FF] font-display text-[#0F172A] antialiased"
    >
      <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-white shadow-2xl">
        <header className="flex items-center bg-[#000080] border-b border-[#000080]/20 p-4 justify-between sticky top-0 z-10">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-[#000066] transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 px-2 text-center mr-10">
            Reordenar Módulos
          </h2>
          <div className="w-10" />
        </header>

        <main className="flex-1 overflow-y-auto px-2 py-6">
          <div className="mb-6">
            <p className="text-[#0F172A] text-sm font-medium leading-relaxed opacity-80">
              Arrastra los módulos para cambiar el orden que verán las maestras
              en su panel de ExplorArte.
            </p>
          </div>

          <div className="space-y-3">
            {modules.map((module, index) => {
              const activeDrop = dragOverIndex === index;
              return (
                <div
                  key={module.id}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragEnter={() => handleDragEnter(index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => e.preventDefault()}
                  className={`flex items-center justify-between border-2 rounded-xl p-4 shadow-sm cursor-grab transition-all ${
                    activeDrop
                      ? "bg-[#000080]/10 border-[#000080] scale-[1.01]"
                      : "bg-white border-[#CBD5E1] hover:bg-[#000080]/5"
                  }`}
                >
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="material-symbols-outlined text-lg text-[#000080]">
                      drag_indicator
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#000080]/70">
                        {module.title}
                      </p>
                      <p className="text-[#0F172A] text-base font-semibold leading-tight truncate">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="h-24" />
          </div>
        </main>

        <footer className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-white via-white to-transparent pointer-events-none">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="pointer-events-auto mx-auto w-11/12 bg-[#000080] text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase shadow-xl hover:bg-[#000066] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">check_circle</span>
            CONFIRMAR NUEVO ORDEN
          </button>
        </footer>
      </div>
    </AppShell>
  );
}
