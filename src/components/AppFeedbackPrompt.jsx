import { useState, useEffect } from 'react';
import RatingInput from './RatingInput';

export default function AppFeedbackPrompt({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setRating(0);
      setFeedback('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInitialResponse = (isPositive) => {
    setStep(2);
  };

  const handleSubmit = () => {
    // In a real app, this would send data to the backend
    
    // Store that we submitted feedback so we don't prompt again soon
    const now = new Date().getTime();
    localStorage.setItem('buzdealz_last_feedback_submit', now.toString());
    
    setStep(3);
    
    // Close automatically after success
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleSkip = () => {
    // Mark as skipped today
    const now = new Date().getTime();
    localStorage.setItem('buzdealz_last_feedback_prompt', now.toString());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      {/* Click outside to close (acts as skip) */}
      <div className="absolute inset-0" onClick={handleSkip} />
      
      <div className="relative w-full max-w-[340px] rounded-[24px] bg-surface p-6 shadow-xl dark:bg-surface-elevated animate-in fade-in zoom-in-95 duration-200">
        
        {step === 1 && (
          <div className="text-center">
            <h3 className="text-[18px] font-bold text-text-primary">How's your BuzDealz experience going?</h3>
            
            <div className="mt-6 flex flex-col gap-3">
              <button 
                onClick={() => handleInitialResponse(true)}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-page-bg py-3.5 text-[15px] font-medium text-text-primary transition-all hover:border-primary/40 hover:bg-primary-light/50 active:scale-[0.98]"
              >
                <span className="text-lg">😊</span> I'm enjoying it
              </button>
              <button 
                onClick={() => handleInitialResponse(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-page-bg py-3.5 text-[15px] font-medium text-text-primary transition-all hover:border-border-hover hover:bg-surface-elevated active:scale-[0.98]"
              >
                <span className="text-lg">😐</span> It could be better
              </button>
            </div>
            
            <button 
              onClick={handleSkip}
              className="mt-5 text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Skip for now
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-[18px] font-bold text-text-primary text-center">Rate your BuzDealz experience</h3>
            
            <div className="mt-5 flex justify-center">
              <RatingInput value={rating} onChange={setRating} size={32} />
            </div>

            <div className="mt-6">
              <label htmlFor="feedback-text" className="mb-2 block text-[13px] font-medium text-text-secondary">
                What should we know?
              </label>
              <textarea
                id="feedback-text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what you think..."
                className="w-full resize-none rounded-xl border border-border bg-page-bg p-3 text-[14px] text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                rows={3}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleSubmit}
                disabled={rating === 0}
                className="w-full rounded-xl bg-primary py-3.5 text-[15px] font-bold text-white transition-all hover:bg-primary-dark disabled:opacity-50 disabled:active:scale-100 active:scale-[0.98]"
              >
                Submit feedback
              </button>
              <button 
                onClick={handleSkip}
                className="text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors text-center"
              >
                Skip for now
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-[18px] font-bold text-text-primary">Thank you</h3>
            <p className="mt-2 text-[14px] text-text-secondary leading-relaxed">
              Your feedback helps us improve BuzDealz.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-page-bg py-3 text-[15px] font-medium text-text-primary border border-border transition-all hover:bg-surface-elevated active:scale-[0.98]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
