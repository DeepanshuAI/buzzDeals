export default function CategoryScroller({ categories }) {
  return (
    <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-1 snap-x snap-mandatory">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            className="group flex w-[68px] shrink-0 flex-col items-center gap-2 snap-start"
          >
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-surface shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)] border border-border/80 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-md group-active:scale-95">
              <Icon className="h-6 w-6 text-text-primary transition-colors group-hover:text-primary stroke-[1.5px]" />
            </div>
            <span className="text-[11px] font-bold text-text-secondary tracking-tight text-center leading-tight transition-colors group-hover:text-text-primary">
              {cat.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
