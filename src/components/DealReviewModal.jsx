import { useState, useEffect } from 'react';
import RatingInput from './RatingInput';

export default function DealReviewModal({ isOpen, onClose, deal, isLoggedIn, onLoginRequest }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Reset state when opened/closed
  useEffect(() => {
    if (isOpen) {
      setRating(0);
      setReview('');
      setSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen || !deal) return null;

  const handleSubmit = () => {
    if (!isLoggedIn) {
      onLoginRequest();
      return;
    }

    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative w-full max-w-[340px] rounded-[24px] bg-surface p-6 shadow-xl dark:bg-surface-elevated animate-in fade-in zoom-in-95 duration-200">
        
        {!success ? (
          <div>
            <div className="flex items-center gap-3 border-b border-border pb-4 mb-4">
              <img src={deal.image} alt={deal.brand} className="w-12 h-12 rounded-lg object-cover bg-page-bg" />
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-text-secondary">{deal.brand}</p>
                <p className="text-[13px] font-semibold text-text-primary line-clamp-1">{deal.title}</p>
              </div>
            </div>

            <h3 className="text-[16px] font-bold text-text-primary text-center">How was this deal?</h3>
            
            <div className="mt-4 flex justify-center">
              <RatingInput value={rating} onChange={setRating} size={28} />
            </div>

            {!isLoggedIn && rating > 0 && (
              <div className="mt-5 rounded-xl bg-primary/10 p-4 text-center border border-primary/20">
                <p className="text-[14px] font-bold text-text-primary mb-1">Sign in to leave a review</p>
                <p className="text-[12px] text-text-secondary mb-3">Create an account or sign in to share your experience with BuzDealz.</p>
                <button
                  onClick={onLoginRequest}
                  className="w-full rounded-lg bg-primary py-2 text-[13px] font-bold text-white transition-all hover:bg-primary-dark"
                >
                  Sign in
                </button>
                <button
                  onClick={onClose}
                  className="mt-2 w-full text-[12px] font-medium text-text-secondary hover:text-text-primary"
                >
                  Continue browsing
                </button>
              </div>
            )}

            {isLoggedIn && (
              <div className="mt-5">
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Tell us about your experience (optional)"
                  className="w-full resize-none rounded-xl border border-border bg-page-bg p-3 text-[14px] text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  rows={3}
                />
                
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={onClose}
                    className="flex-1 rounded-xl border border-border bg-page-bg py-2.5 text-[14px] font-medium text-text-primary transition-all hover:bg-surface-elevated"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={rating === 0 || isSubmitting}
                    className="flex-1 rounded-xl bg-primary py-2.5 text-[14px] font-bold text-white transition-all hover:bg-primary-dark disabled:opacity-50"
                  >
                    {isSubmitting ? 'Saving...' : 'Submit review'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-[18px] font-bold text-text-primary">Review submitted!</h3>
            <p className="mt-2 text-[14px] text-text-secondary leading-relaxed">
              Your feedback has been published.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
