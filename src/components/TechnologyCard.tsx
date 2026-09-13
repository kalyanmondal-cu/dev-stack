import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  selected: boolean;
  onAdd: (technology: Technology) => void;
}

export function TechnologyCard({
  technology,
  selected,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="tech-card flex min-h-[238px] flex-col rounded-xl bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-7 w-7 object-contain"
          loading="lazy"
        />
        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[9px] font-semibold text-sky-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-[15px] font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 line-clamp-3 min-h-[54px] text-[10.5px] leading-[1.55] text-slate-400">
        {technology.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-2 pt-4 text-[9.5px]">
        <span className="rounded bg-slate-50 px-2 py-1 font-medium text-slate-500">
          {technology.category}
        </span>
        <span className="text-slate-400">{technology.difficulty}</span>
        <span className="font-semibold text-slate-500">
          <span className="mr-1 text-amber-400">★</span>
          {technology.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={selected}
        className={`mt-3 w-full rounded-md px-3 py-2.5 text-[10px] font-semibold transition ${
          selected
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {selected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
