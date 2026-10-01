import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="w-[280px] shrink-0 rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all hover:border-border-hover dark:bg-surface-elevated flex flex-col gap-3">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`h-3.5 w-3.5 ${i < testimonial.rating ? 'fill-primary text-primary' : 'fill-border text-border'}`} 
          />
        ))}
      </div>
      
      <p className="text-[14px] leading-relaxed text-text-primary">
        "{testimonial.text}"
      </p>
      
      <div className="mt-auto pt-2 flex items-center gap-3">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="h-10 w-10 rounded-full bg-border object-cover"
        />
        <div>
          <p className="text-[13px] font-bold text-text-primary">{testimonial.name}</p>
          <p className="text-[11px] text-text-secondary flex items-center gap-1">
            BuzDealz Member {testimonial.location && <span>&middot; {testimonial.location}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
