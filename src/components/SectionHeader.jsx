import { ChevronRight } from 'lucide-react';

export default function SectionHeader({ title, subtitle, action, onAction }) {
  return (
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-[20px] font-black text-text-primary tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-0.5 text-[13px] font-medium text-text-secondary">{subtitle}</p>
        )}
      </div>
      {action && (
        <button
          onClick={onAction}
          className="flex items-center gap-0.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          {action}
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
