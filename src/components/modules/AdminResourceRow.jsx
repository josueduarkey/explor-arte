export default function AdminResourceRow({
  icon,
  title,
  meta,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
      <div className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-primary p-1">
        <span className="material-symbols-outlined">drag_indicator</span>
      </div>
      <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold truncate">{title}</p>
        <p className="text-xs text-slate-500 uppercase font-medium">{meta}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onEdit}
          className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
          title="Editar Nombre"
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Eliminar"
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}

