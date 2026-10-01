import { useState } from 'react';

export default function BrandCard({ brand }) {
  const [imageError, setImageError] = useState(false);

  return (
    <button className="group flex shrink-0 items-center gap-3 rounded-full border border-border/80 bg-surface pr-5 pl-2 py-2 transition-all duration-300 hover:border-primary/40 hover:shadow-md active:scale-95">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-page-bg overflow-hidden border border-border/50 shadow-sm transition-transform duration-300 group-hover:scale-105">
        {!imageError && brand.logoUrl ? (
          <img 
            src={brand.logoUrl}
            alt={`${brand.name} logo`}
            className="h-7 w-7 object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-primary font-bold text-sm">
            {brand.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-[13px] font-extrabold text-text-primary tracking-tight whitespace-nowrap transition-colors group-hover:text-primary">
        {brand.name}
      </span>
    </button>
  );
}
