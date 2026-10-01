import { useState } from 'react';
import { Bell, User, Flame, Clock, ArrowRight, ExternalLink, BadgePercent, Heart, History, Settings, ChevronRight, MessageSquareQuote } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import CategoryScroller from '../components/CategoryScroller';
import DealCard from '../components/DealCard';
import BrandCard from '../components/BrandCard';
import SectionHeader from '../components/SectionHeader';
import BottomNavigation from '../components/BottomNavigation';
import ThemeSwitcher from '../components/ThemeSwitcher';
import AppFeedbackPrompt from '../components/AppFeedbackPrompt';
import DealReviewModal from '../components/DealReviewModal';
import { deals, categories, brands } from '../data/deals';

function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

export default function PostLoginHome({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');
  const [savedDealIds, setSavedDealIds] = useState(new Set());
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [dealToReview, setDealToReview] = useState(null);

  const toggleSave = (id) => {
    setSavedDealIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });

    // Meaningful interaction trigger for App Feedback
    const lastPrompt = localStorage.getItem('buzdealz_last_feedback_prompt');
    const lastSubmit = localStorage.getItem('buzdealz_last_feedback_submit');
    const now = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (!lastSubmit && (!lastPrompt || now - parseInt(lastPrompt) > twentyFourHours)) {
      // Trigger after a short natural delay
      setTimeout(() => {
        setIsFeedbackOpen(true);
        // We set prompt time when opened, so closing counts as skip
      }, 1500);
    }
  };
  const trendingDeals = deals.filter((d) => d.trending);
  const endingSoonDeals = deals.filter((d) => d.endingSoon);
  const memberDeals = deals.slice(0, 6);
  const featuredDeal = deals[0];
  const featuredSavings = featuredDeal.originalPrice - featuredDeal.memberPrice;
  const featuredDiscount = Math.round((featuredSavings / featuredDeal.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-page-bg pb-[calc(5rem+env(safe-area-inset-bottom))]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-page-bg shadow-sm">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
          <div>
            <p className="text-[13px] text-text-secondary">Good afternoon 👋</p>
            <h1 className="text-lg font-bold text-text-primary tracking-tight">Priya</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <button aria-label="Notifications" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary/30 hover:bg-primary-light">
              <Bell className="h-5 w-5 text-text-secondary" />
              <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
            </button>
            <button
              onClick={onLogout}
              aria-label="Profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary/15"
            >
              <User className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg pt-[72px]">
        {activeTab === 'home' ? (
          <>
        {/* Search */}
        <section className="px-4 pt-6 pb-2">
          <SearchBar placeholder="Search deals, brands, categories..." />
        </section>

        {/* Return Visit Hook */}
        <section className="px-4 py-3">
          <div className="flex items-center gap-3 rounded-2xl bg-surface-elevated border border-border p-3 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <History className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-widest text-text-secondary">Since your last visit</p>
              <p className="text-[14px] font-bold text-text-primary mt-0.5">7 new deals • 2 price drops</p>
            </div>
          </div>
        </section>

        {/* Member Savings Summary */}
        <section className="px-4 py-2">
          <div className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-page-bg shadow-sm">
              <BadgePercent className="h-5 w-5 text-primary" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-bold text-text-primary tracking-tight">Your savings this month</p>
              <p className="text-[12px] text-text-secondary mt-0.5 font-medium">You've saved ₹4,280 across 3 deals</p>
            </div>
            <span className="text-[18px] font-black tracking-tight text-primary">₹4,280</span>
          </div>
        </section>

        {/* Categories */}
        <section className="pt-2 pb-5">
          <div className="pl-4">
            <CategoryScroller categories={categories} />
          </div>
        </section>

        {/* Featured Deal */}
        <section className="px-4 pb-6">
          <div className="mb-4">
            <h2 className="text-[22px] font-black tracking-tight text-text-primary">Today's Top Pick</h2>
            <p className="text-[14px] text-text-secondary font-medium mt-0.5">Curated daily by the BuzDealz team</p>
          </div>
          <div className="group relative overflow-hidden rounded-[24px] bg-black text-white shadow-md transition-transform hover:-translate-y-1">
            <div className="relative aspect-[4/3] w-full">
              <img
                src={featuredDeal.image}
                alt={featuredDeal.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-[10px] font-extrabold tracking-widest text-white shadow-sm border border-white/20">
                  <Flame className="h-3.5 w-3.5 text-[#FF6B9D]" /> TRENDING
                </span>
              </div>
            </div>
            
            <div className="relative -mt-20 p-5">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-white/70 mb-1">{featuredDeal.brand}</p>
              <h3 className="text-xl font-bold text-white leading-tight mb-4 drop-shadow-md">{featuredDeal.title}</h3>
              
              <div className="flex items-end justify-between border-t border-white/10 pt-4">
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[28px] font-black tracking-tight text-white">
                      {formatPrice(featuredDeal.memberPrice)}
                    </span>
                    <span className="text-[13px] font-medium text-white/50 line-through">
                      {formatPrice(featuredDeal.originalPrice)}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] font-bold text-[#34D399]">
                    You save {formatPrice(featuredSavings)}
                  </p>
                </div>
                
                <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF6B9D] text-white shadow-lg shadow-[#FF6B9D]/30 transition-all hover:scale-105 active:scale-95">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Campaign: The Weekend Edit */}
        <section className="px-4 py-8">
          <div className="mb-4">
            <h2 className="font-display text-[32px] font-normal leading-tight tracking-tight text-text-primary">
              The Weekend Edit
            </h2>
            <p className="mt-1 text-[15px] font-medium text-text-secondary">
              Pieces worth checking before Sunday.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-[24px] bg-surface-elevated shadow-sm border border-border">
            <div className="aspect-[4/3] w-full bg-surface">
              <img
                src={deals[2].image}
                alt="Weekend Edit"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="text-lg font-bold text-white">Explore the Edit</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-text-primary transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </section>

        {/* Trending Deals */}
        <section className="py-5">
          <div className="px-4 mb-4">
            <SectionHeader title="Trending Now" action="See All" />
          </div>
          <div className="pl-4">
            <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory">
              {trendingDeals.map((deal) => (
                <div key={deal.id} className="w-[220px] shrink-0 snap-start">
                  <DealCard deal={deal} compact isSaved={savedDealIds.has(deal.id)} onToggleSave={toggleSave} onRate={setDealToReview} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Exclusive Deals */}
        <section className="px-4 py-5">
          <SectionHeader
            title="Member Exclusive"
            subtitle="Deals just for you"
            action="View All"
          />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {memberDeals.slice(0, 4).map((deal) => (
              <DealCard key={deal.id} deal={deal} isSaved={savedDealIds.has(deal.id)} onToggleSave={toggleSave} onRate={setDealToReview} />
            ))}
          </div>
        </section>

        {/* Editorial Section: Under 2000 */}
        <section className="px-4 py-8 my-4 bg-primary/5 rounded-[24px] mx-2 border border-primary/10">
          <div className="mb-5 text-center">
            <h2 className="font-display text-[32px] font-normal text-text-primary tracking-tight">Under ₹2,000</h2>
            <p className="text-[14px] text-text-secondary mt-1 font-medium">Curated fashion, beauty and accessories.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {deals.filter(d => d.memberPrice < 2000).slice(0, 4).map((deal) => (
              <DealCard key={deal.id} deal={deal} isSaved={savedDealIds.has(deal.id)} onToggleSave={toggleSave} onRate={setDealToReview} />
            ))}
          </div>
          <button className="mt-4 w-full py-3 text-sm font-bold text-primary bg-surface rounded-xl shadow-sm border border-border/50 transition-all hover:bg-primary/5 active:scale-[0.98]">
            Explore Collection
          </button>
        </section>

        {/* Shop by Brand */}
        <section className="py-5">
          <div className="px-4 mb-3">
            <SectionHeader title="Shop by Brand" action="All Brands" />
          </div>
          <div className="pl-4">
            <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory">
              {brands.slice(0, 8).map((brand) => (
                <div key={brand.id} className="snap-start shrink-0">
                  <BrandCard brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ending Soon */}
        {endingSoonDeals.length > 0 && (
          <section className="px-4 py-5">
            <SectionHeader
              title="Ending Soon"
              subtitle="Don't miss these deals"
            />
            <div className="mt-4 space-y-3">
              {endingSoonDeals.map((deal) => {
                const savings = deal.originalPrice - deal.memberPrice;
                const discount = Math.round((savings / deal.originalPrice) * 100);
                return (
                  <div
                    key={deal.id}
                    className="flex gap-3 rounded-2xl border border-border p-3 transition-all hover:border-primary/20 hover:shadow-sm"
                  >
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="h-20 w-20 shrink-0 rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-primary">{deal.brand}</p>
                        <h3 className="text-sm font-medium text-text-primary leading-snug line-clamp-1">{deal.title}</h3>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-base font-bold text-primary">{formatPrice(deal.memberPrice)}</span>
                          <span className="text-xs text-text-muted line-through">{formatPrice(deal.originalPrice)}</span>
                        </div>
                        <span className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-600">
                          <Clock className="h-3 w-3" />
                          Ending Soon
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Recommended / Serendipity */}
        <section className="py-5">
          <div className="px-4 mb-3">
            <SectionHeader title="Because you liked Fashion" action="More Fashion" />
          </div>
          <div className="pl-4">
            <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory">
              {deals.filter(d => d.category === 'Fashion').map((deal) => (
                <div key={deal.id} className="w-[220px] shrink-0 snap-start">
                  <DealCard deal={deal} compact isSaved={savedDealIds.has(deal.id)} onToggleSave={toggleSave} onRate={setDealToReview} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
          </>
        ) : activeTab === 'saved' ? (
          <section className="px-4 py-6">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Saved Deals</h2>
            </div>
            
            {savedDealIds.size === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Heart className="h-12 w-12 text-border mb-3" />
                <p className="text-text-primary font-bold">No saved deals yet</p>
                <p className="text-sm text-text-secondary mt-1">Deals you save will appear here.</p>
                <button onClick={() => setActiveTab('home')} className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-dark">
                  Explore Deals
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {deals.filter(d => savedDealIds.has(d.id)).map(deal => (
                  <DealCard key={deal.id} deal={deal} isSaved={true} onToggleSave={toggleSave} onRate={setDealToReview} />
                ))}
              </div>
            )}
          </section>
        ) : activeTab === 'profile' ? (
          <section className="px-4 py-6 animate-in fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Priya</h2>
                <p className="text-[13px] text-text-secondary mt-0.5">BuzDealz Member</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-border bg-surface overflow-hidden shadow-sm">
                <button 
                  onClick={() => setIsFeedbackOpen(true)}
                  className="flex w-full items-center justify-between p-4 transition-colors hover:bg-surface-elevated active:bg-border/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <MessageSquareQuote className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-[15px] font-bold text-text-primary">Feedback & Reviews</p>
                      <p className="text-[12px] text-text-secondary mt-0.5">Share your experience with BuzDealz</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-text-muted" />
                </button>
              </div>

              <div className="rounded-[20px] border border-border bg-surface overflow-hidden shadow-sm">
                <button className="flex w-full items-center justify-between p-4 transition-colors hover:bg-surface-elevated">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-border/40">
                      <Settings className="h-5 w-5 text-text-secondary" />
                    </div>
                    <div className="text-left">
                      <p className="text-[15px] font-bold text-text-primary">Settings</p>
                      <p className="text-[12px] text-text-secondary mt-0.5">Account, notifications</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-text-muted" />
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div className="px-4 py-12 text-center">
            <p className="text-text-secondary">This section is part of the full app experience.</p>
          </div>
        )}

        {/* Subtle Developer Demo Toggle */}
        <div className="px-4 py-8 text-center pb-12">
          <button onClick={onLogout} className="text-[10px] text-text-muted/30 hover:text-text-muted transition-colors">
            Developer: Switch to Pre-Login Experience
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <AppFeedbackPrompt 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />
      
      <DealReviewModal
        isOpen={!!dealToReview}
        onClose={() => setDealToReview(null)}
        deal={dealToReview}
        isLoggedIn={true}
      />
    </div>
  );
}
