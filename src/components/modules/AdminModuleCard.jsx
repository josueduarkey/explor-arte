export default function AdminModuleCard({
  title,
  statusText,
  statusClassName = "bg-green-100 text-green-700",
  description,
  imageSrc,
  imageAlt = "",
  onEdit,
  onPreview,
}) {
  const hasPreview = typeof onPreview === "function";

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-primary/5 overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full bg-primary/5 overflow-hidden">
        <img className="w-full h-full object-cover" data-alt={imageAlt} src={imageSrc} />
        <div className="absolute top-2 right-2 p-2 bg-white/90 dark:bg-slate-900/90 rounded-lg cursor-grab active:cursor-grabbing text-primary">
          <span className="material-symbols-outlined">drag_indicator</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          {statusText ? (
            <span className={`px-2 py-1 ${statusClassName} text-xs font-bold rounded`}>
              {statusText}
            </span>
          ) : null}
        </div>

        {description ? (
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
            {description}
          </p>
        ) : null}

        {hasPreview ? (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onEdit}
              className="flex-1 py-2 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              EDITAR
            </button>
            <button
              type="button"
              onClick={onPreview}
              className="px-3 py-2 border border-primary/20 rounded-lg text-primary hover:bg-primary/5"
            >
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onEdit}
            className="w-full py-2 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">edit</span>
            EDITAR
          </button>
        )}
      </div>
    </div>
  );
}

