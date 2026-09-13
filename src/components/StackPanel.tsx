import type { Technology } from "../types/technology";

interface StackPanelProps {
  stack: Technology[];
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
}

export function StackPanel({
  stack,
  onRemove,
  onRemoveAll,
}: StackPanelProps) {
  return (
    <aside className="stack-panel h-fit rounded-xl bg-white p-5 lg:sticky lg:top-20">
      <div>
        <h2 className="text-[14px] font-bold text-slate-900">Your Stack</h2>
        <p className="mt-1 text-[9px] text-slate-400">
          {stack.length} Technology{stack.length === 1 ? "" : "ies"} Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="flex min-h-[154px] items-center justify-center text-center">
          <p className="max-w-[160px] text-[10px] leading-5 text-slate-400">
            Your selected technologies will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2"
            >
              <img
                src={technology.icon}
                alt=""
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold text-slate-700">
                  {technology.name}
                </p>
                <p className="text-[8px] text-slate-400">{technology.category}</p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${technology.name}`}
                onClick={() => onRemove(technology)}
                className="text-lg leading-none text-slate-300 transition hover:text-slate-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className={`mt-5 w-full rounded-md border px-3 py-2.5 text-[10px] font-semibold transition ${
          stack.length
            ? "border-red-200 text-red-500 hover:bg-red-50"
            : "cursor-not-allowed border-slate-200 text-slate-300"
        }`}
      >
        Remove All
      </button>
    </aside>
  );
}
