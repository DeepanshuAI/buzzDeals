import { useState } from 'react';
import SectionHeader from './SectionHeader';
import TestimonialCard from './TestimonialCard';
import RatingInput from './RatingInput';
import { testimonials } from '../data/reviews';

export default function TestimonialSection({ onLoginRequest }) {
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  const handleInteraction = () => {
    setShowAuthPrompt(true);
  };

  return (
    <section className="px-4 py-5">
      <SectionHeader 
        title="What members are saying" 
        subtitle="Sample experiences from BuzDealz members." 
      />
      <div className="mt-4 -mx-4">
        {/* We use a negative margin on the wrapper and padding on the inner container so scroll is edge-to-edge but items align properly */}
        <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="snap-start shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Review Prompt Area */}
      <div className="mt-2 rounded-[20px] border border-border bg-surface p-5 shadow-sm text-center">
        {!showAuthPrompt ? (
          <div className="animate-in fade-in">
            <h3 className="text-[16px] font-bold text-text-primary">How was this deal?</h3>
            <div className="mt-3 flex justify-center">
              <RatingInput value={0} onChange={handleInteraction} size={28} />
            </div>
            <button 
              onClick={handleInteraction}
              className="mt-3 text-[14px] font-bold text-primary hover:text-primary-dark transition-colors"
            >
              Write a review
            </button>
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-2 fade-in duration-300">
            <h3 className="text-[16px] font-bold text-text-primary">Sign in to leave a review</h3>
            <p className="mt-2 text-[13px] text-text-secondary leading-relaxed max-w-[260px] mx-auto">
              Create an account or sign in to share your experience with BuzDealz.
            </p>
            <div className="mt-5 space-y-3">
              <button 
                onClick={() => {
                  if (onLoginRequest) onLoginRequest();
                  setShowAuthPrompt(false);
                }}
                className="w-full rounded-xl bg-primary py-3 text-[14px] font-bold text-white transition-all hover:bg-primary-dark active:scale-[0.98]"
              >
                Sign in
              </button>
              <button 
                onClick={() => {
                  if (onLoginRequest) onLoginRequest();
                  setShowAuthPrompt(false);
                }}
                className="w-full rounded-xl border border-primary/20 bg-primary/5 py-3 text-[14px] font-bold text-primary transition-all hover:bg-primary/10 active:scale-[0.98]"
              >
                Create account
              </button>
              <button 
                onClick={() => setShowAuthPrompt(false)}
                className="text-[13px] font-medium text-text-secondary hover:text-text-primary pt-1 pb-1 transition-colors"
              >
                Continue browsing
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
