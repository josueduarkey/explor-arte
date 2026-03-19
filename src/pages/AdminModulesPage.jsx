import AppShell from "../components/layout/AppShell.jsx";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AdminResourceRow from "../components/modules/AdminResourceRow.jsx";

const initialResources = [
  {
    id: 1,
    icon: "description",
    title: "Introducción al Renacimiento",
    meta: "Documento PDF • 2.4 MB",
  },
  {
    id: 2,
    icon: "play_circle",
    title: "Técnicas de Fresco en el Siglo XV",
    meta: "Video • 12:45 min",
  },
  {
    id: 3,
    icon: "headphones",
    title: "Análisis de la Capilla Sixtina",
    meta: "Audio • 4.1 MB",
  },
  {
    id: 4,
    icon: "quiz",
    title: "Cuestionario de Repaso - Módulo 1",
    meta: "Evaluación • 10 Preguntas",
  },
];

export default function AdminModulesPage() {
  const navigate = useNavigate();
  const [resources, setResources] = useState(initialResources);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    const listCopy = [...resources];
    const draggedItemContent = listCopy.splice(dragItem.current, 1)[0];
    listCopy.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setResources(listCopy);
  };

  const handleDelete = (id) => {
    setResources((prev) => prev.filter((resource) => resource.id !== id));
  };

  const handleEdit = (id) => {
    console.log("Editar recurso", id);
  };

  return (
    <AppShell
      role="admin"
      className="bg-[#EFF4FF] font-display text-[#0F172A] min-h-screen"
    >
      <header className="sticky top-0 z-50 bg-[#000080] border-b border-[#000080]/20 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center p-4 justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="text-white hover:bg-[#000066] p-2 rounded-lg transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold flex-1 text-white text-center">
            Editar Módulo 1
          </h1>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
            <span className="material-symbols-outlined">
              admin_panel_settings
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
        <section>
          <h2 className="text-[#000080] text-sm font-bold tracking-widest uppercase mb-4 px-1">
            Subir Nuevo Recurso
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              type="button"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white border-2 border-dashed border-[#000080]/30 hover:border-[#000080] hover:bg-[#000080]/10 rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">
                picture_as_pdf
              </span>
              <span className="font-bold text-sm tracking-wide">SUBIR PDF</span>
            </button>
            <button
              type="button"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white border-2 border-dashed border-[#000080]/30 hover:border-[#000080] hover:bg-[#000080]/10 rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-[#000080] group-hover:scale-110 transition-transform">
                movie
              </span>
              <span className="font-bold text-sm tracking-wide">
                SUBIR VIDEO
              </span>
            </button>
            <button
              type="button"
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-white border-2 border-dashed border-[#000080]/30 hover:border-[#000080] hover:bg-[#000080]/10 rounded-xl transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-[#000080] group-hover:scale-110 transition-transform">
                audiotrack
              </span>
              <span className="font-bold text-sm tracking-wide">
                SUBIR AUDIO
              </span>
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-[#000080] text-sm font-bold tracking-widest uppercase">
              Recursos Actuales
            </h2>
            <span className="text-xs font-medium text-slate-500">
              {resources.length} recursos en total
            </span>
          </div>

          <div className="space-y-3">
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDragEnd={handleDragEnd}
                className="rounded-xl border border-[#000080]/20 bg-white hover:bg-[#000080]/5 transition-all"
              >
                <AdminResourceRow
                  icon={resource.icon}
                  title={resource.title}
                  meta={resource.meta}
                  onEdit={() => handleEdit(resource.id)}
                  onDelete={() => handleDelete(resource.id)}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="pt-6 pb-12">
          <button
            type="button"
            onClick={() => navigate("/admin")}
            className="w-full bg-[#000080] hover:bg-[#000066] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#000080]/30 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
          >
            <span className="material-symbols-outlined">save</span>
            GUARDAR CAMBIOS
          </button>
          <p className="text-center text-sm text-slate-500 mt-4">
            Última edición hoy a las 14:32
          </p>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-primary text-white py-1.5 px-4 text-[10px] uppercase tracking-widest font-bold flex justify-between items-center">
        <span>Modo Administrador</span>
        <span className="opacity-70">v2.4.0 • ExplorArte</span>
      </footer>
    </AppShell>
  );
}
