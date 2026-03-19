import React from "react";

export default function DocenteResourceCard({
  icon,
  title,
  meta,
  color = "#117899",
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col justify-center items-center min-w-40 flex-1 gap-4 rounded-xl border-2 bg-white p-5 shadow-md hover:shadow-lg transition-shadow"
      style={{ borderColor: `${color}33` }}
    >
      <div
        className="size-12 rounded-lg flex items-center justify-center text-white"
        style={{ backgroundColor: color }}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex flex-col justify-center flex-1 text-left">
        <p className="text-text-main text-base text-balance font-bold leading-tight">
          {title}
        </p>
        <p className="text-text-main/60 text-xs font-medium">{meta}</p>
      </div>
    </button>
  );
}
