import { Heart, ExternalLink, ShieldCheck, Lock, Clock } from 'lucide-react';
import { useState } from 'react';

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

export default function DealCard({ deal, locked = false, compact = false, isSaved, onToggleSave }) {
  const [localSaved, setLocalSaved] = useState(false);
  const saved = isSaved !== undefined ? isSaved : localSaved;
  const toggleSaved = (e) => {
    e.stopPropagation();
    if (onToggleSave) onToggleSave(deal.id);
    else setLocalSaved(!localSaved);
  };
  const savings = deal.originalPrice - deal.memberPrice;
  const discountPercent = Math.round((savings / deal.originalPrice) * 100);

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${compact ? 'min-w-[200px]' : ''}`}>
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-surface">
        <img
          src={deal.image}
          alt={deal.title}
          className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${locked ? 'blur-[2px]' : ''}`}
          loading="lazy"
        />
        {/* Discount badge */}
        <div className="absolute left-3 top-3 rounded-lg bg-primary px-2 py-1 text-[11px] font-bold text-white shadow-sm">
          {discountPercent}% OFF
        </div>
        {/* Save button */}
        {!locked && (
          <button
            onClick={toggleSaved}
            aria-label={saved ? "Remove from saved" : "Save deal"}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-surface/90 backdrop-blur-sm shadow-sm transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <Heart
              className={`h-4 w-4 transition-colors duration-200 ${saved ? 'fill-primary text-primary' : 'text-text-secondary'}`}
            />
          </button>
        )}
        {/* Lock overlay */}
        {locked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
            <div className="flex items-center gap-1.5 rounded-full bg-surface/95 px-4 py-2 text-xs font-bold text-primary shadow-xl">
              <Lock className="h-3.5 w-3.5" />
              Members Only
            </div>
          </div>
        )}
        {/* Ending soon */}
        {deal.endingSoon && !locked && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md bg-amber-500/95 px-2 py-1 text-[10px] font-bold text-white shadow-sm">
            <Clock className="h-3 w-3" />
            Ending Soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3.5 flex flex-col h-full justify-between">
        <div>
          {/* Brand */}
          <div className="flex justify-between items-start gap-2">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-text-secondary">{deal.brand}</p>
            {deal.verified && !locked && (
              <ShieldCheck className="h-3.5 w-3.5 text-success/80" aria-label="Verified" />
            )}
          </div>

          {/* Title */}
          <h3 className="mt-1 text-[13px] font-semibold text-text-primary leading-snug line-clamp-2">{deal.title}</h3>
        </div>

        <div className="mt-3">
          {/* Pricing */}
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className={`text-[17px] font-black tracking-tight ${locked ? 'blur-md select-none text-text-muted' : 'text-primary'}`}>
              {formatPrice(deal.memberPrice)}
            </span>
            <span className="text-[11px] font-medium text-text-muted line-through">{formatPrice(deal.originalPrice)}</span>
          </div>

          {/* Savings strip */}
          {!locked && (
            <div className="mt-1">
              <span className="text-[11px] font-bold text-success">
                You save {formatPrice(savings)}
              </span>
            </div>
          )}

          {/* CTA (Locked only) */}
          {locked && (
            <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-[12px] font-bold text-white transition-all hover:bg-primary-dark">
              Unlock Price
              <Lock className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
