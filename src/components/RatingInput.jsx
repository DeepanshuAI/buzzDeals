import { useState } from 'react';
import { Star } from 'lucide-react';

export default function RatingInput({ value, onChange, size = 24 }) {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHoverValue(star)}
          onMouseLeave={() => setHoverValue(0)}
          className="p-1 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full active:scale-90"
          aria-label={`Rate ${star} stars`}
        >
          <Star
            size={size}
            className={`transition-colors ${
              (hoverValue || value) >= star
                ? 'fill-primary text-primary'
                : 'fill-transparent text-border-hover dark:text-border'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
