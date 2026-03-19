import React from "react";

export default function DocenteModuleCard({
  number,
  category,
  title,
  icon,
  accentColor = "#007BFF",
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left bg-white rounded-2xl border-2 shadow-lg hover:shadow-xl transition-shadow p-5 flex flex-col gap-4"
      style={{ borderColor: `${accentColor}33` }}
    >
      <div className="flex items-center gap-4">
        <div
          className="size-14 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-sm"
          style={{ backgroundColor: accentColor }}
        >
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="material-symbols-outlined text-xl"
              style={{ color: accentColor }}
            >
              {icon}
            </span>
            <span
              className="text-xs font-black uppercase tracking-tighter"
              style={{ color: accentColor }}
            >
              {category}
            </span>
          </div>
          <h3 className="text-text-main font-extrabold text-lg leading-tight">
            {title}
          </h3>
        </div>
      </div>
      <div className="flex">
        <span className="mx-auto inline-flex items-center justify-center rounded-2xl bg-[#007BFF] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#007BFF]/20 hover:brightness-110 transition-all">
          VER MÓDULO
        </span>
      </div>
    </button>
  );
}
