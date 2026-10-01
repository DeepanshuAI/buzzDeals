import { Home, Tag, Search, Heart, User } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'deals', label: 'Deals', icon: Tag },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'saved', label: 'Saved', icon: Heart },
  { id: 'profile', label: 'Profile', icon: User },
];

export default function BottomNavigation({ activeTab = 'home', onTabChange }) {

  return (
    <nav aria-label="Main navigation" className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/80 bg-surface/90 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/75">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 pb-[calc(env(safe-area-inset-bottom,8px)+4px)] pt-2">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              aria-label={label}
              onClick={() => onTabChange && onTabChange(id)}
              className="relative flex flex-col items-center gap-1 px-4 py-1.5 transition-colors duration-300"
            >
              <div
                className={`flex items-center justify-center transition-all duration-300 ${
                  isActive ? 'scale-110 text-primary' : 'scale-100 text-text-muted hover:text-text-secondary'
                }`}
              >
                <Icon
                  className="h-6 w-6"
                  strokeWidth={isActive ? 2.5 : 2}
                  fill={isActive ? 'currentColor' : 'none'}
                />
              </div>
              <span 
                className={`text-[10px] tracking-wide transition-all duration-300 ${
                  isActive ? 'font-bold text-primary' : 'font-medium text-text-muted'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
