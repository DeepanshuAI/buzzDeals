import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar({ placeholder = "What are you shopping for?", onSearch }) {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState('');

  const placeholders = [
    "Running shoes under ₹3,000",
    "Skincare for dry skin",
    "Gift under ₹2,000",
    "Jeans on sale",
  ];

  return (
    <div className={`relative transition-all duration-200 ${focused ? 'scale-[1.01]' : ''}`}>
      <div className={`flex items-center gap-3 rounded-2xl border bg-surface px-4 py-3.5 transition-all duration-200 ${
        focused 
          ? 'border-primary shadow-[0_0_0_3px_rgba(214,51,108,0.1)]' 
          : 'border-border'
      }`}>
        <Search className="h-5 w-5 shrink-0 text-text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] text-text-primary placeholder:text-text-muted outline-none"
        />
      </div>
      {focused && query === '' && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl border border-border bg-surface p-3 shadow-lg">
          <p className="mb-2 px-1 text-xs font-medium text-text-muted uppercase tracking-wider">Try searching</p>
          <div className="space-y-0.5">
            {placeholders.map((p, i) => (
              <button
                key={i}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setQuery(p);
                }}
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm text-text-secondary hover:bg-surface transition-colors"
              >
                <Search className="h-3.5 w-3.5 text-text-muted" />
                {p}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
