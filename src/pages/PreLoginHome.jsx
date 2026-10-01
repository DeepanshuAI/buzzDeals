import { ArrowRight, ShieldCheck, Crown, Zap, Star, ChevronRight, Lock } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import CategoryScroller from '../components/CategoryScroller';
import DealCard from '../components/DealCard';
import BrandCard from '../components/BrandCard';
import SectionHeader from '../components/SectionHeader';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { deals, categories, brands, stats, howItWorks } from '../data/deals';

export default function PreLoginHome({ onLogin }) {
  const trendingDeals = deals.filter((d) => d.trending).slice(0, 3);
  const sampleDeals = deals.slice(0, 4);

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-page-bg shadow-sm">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="flex h-8 items-center justify-center">
              <span className="text-[22px] font-black text-text-primary tracking-tighter">BuzDealz</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={onLogin}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.97]"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-lg pt-[72px]">
        {/* Hero Section */}
        <section className="relative px-4 pt-6 pb-8">
          <div className="relative w-full overflow-hidden rounded-[28px] bg-black shadow-lg border border-border/40">
            {/* Background Image */}
            <img
              src={deals[0].image}
              alt="Premium Brand"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
            />
            {/* Gradient Overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
            
            {/* Top Badge */}
            <div className="absolute top-5 left-5">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-sm backdrop-blur-md border border-white/20">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                Verified Member Pricing
              </div>
            </div>

            {/* Typography Overlay */}
            <div className="relative z-10 flex flex-col justify-end pt-48 pb-8 px-6 min-h-[520px]">
              <h1 className="font-display text-[44px] font-normal leading-[1.05] tracking-tight text-white drop-shadow-md">
                Premium brands.<br />
                Exclusive prices.<br />
                <span className="text-primary italic drop-shadow-lg">Extra savings.</span>
              </h1>
              
              <p className="mt-4 text-[16px] leading-relaxed text-white/80 max-w-[310px] font-medium drop-shadow">
                Join the club to unlock verified member-only pricing from 300+ fashion & beauty brands.
              </p>
              
              <div className="mt-8">
                <button
                  onClick={onLogin}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-[16px] font-bold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/40 active:translate-y-0"
                >
                  Become a Member
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="px-4 py-5">
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-surface p-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-page-bg p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                </div>
                <div>
                  <span className="text-[15px] font-extrabold text-text-primary block">{stat.value}</span>
                  <span className="text-[10px] text-text-secondary leading-tight">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Search */}
        <section className="px-4 pb-2">
          <SearchBar />
        </section>

        {/* Categories */}
        <section className="py-5">
          <div className="px-4 mb-3">
            <SectionHeader title="Shop by Category" />
          </div>
          <div className="pl-4 pr-0">
            <div className="pr-4">
              <CategoryScroller categories={categories} />
            </div>
          </div>
        </section>

        {/* Proof / Teaser */}
        <section className="py-8 bg-surface">
          <div className="px-4 mb-5">
            <h2 className="text-xl font-extrabold tracking-tight text-text-primary">Members are saving on</h2>
            <p className="mt-1 text-[13px] text-text-secondary font-medium">Real deals currently live on BuzDealz</p>
          </div>
          <div className="pl-4">
            <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-4 pr-4 snap-x snap-mandatory">
              {trendingDeals.map((deal) => (
                <div key={deal.id} className="w-[240px] shrink-0 snap-start">
                  <DealCard deal={deal} locked={true} />
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 mt-2">
            <button
              onClick={onLogin}
              className="w-full rounded-xl border-2 border-primary/20 bg-page-bg py-3 text-sm font-bold text-primary transition-all hover:border-primary/40 active:scale-[0.98]"
            >
              Sign up to view all prices
            </button>
          </div>
        </section>

        {/* Trusted Brands */}
        <section className="py-5">
          <div className="px-4 mb-3">
            <SectionHeader
              title="Trusted by 300+ Brands"
              subtitle="From fashion to beauty to footwear"
            />
          </div>
          <div className="pl-4">
            <div className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory">
              {brands.map((brand) => (
                <div key={brand.id} className="snap-start shrink-0">
                  <BrandCard brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-5">
          <SectionHeader title="How It Works" subtitle="Get started in 3 easy steps" />
          <div className="mt-4 space-y-3">
            {howItWorks.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-4 rounded-2xl border border-border p-4 transition-all hover:border-primary/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-sm font-extrabold text-primary">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-text-primary">{step.title}</h3>
                  <p className="mt-0.5 text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Value */}
        <section className="px-4 py-8">
          <div className="overflow-hidden rounded-[24px] bg-[var(--color-deep-plum)] p-6 text-white shadow-lg">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest mb-6">
              BuzDealz Membership
            </div>
            <h2 className="text-[32px] leading-tight tracking-tight flex flex-col gap-1">
              <span style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700 }}>One membership.</span>
              <span className="text-primary" style={{ fontFamily: "'Didot Display', 'Didot', serif", fontStyle: "italic" }}>Unlimited savings.</span>
            </h2>
            <p className="mt-3 text-[15px] text-white/80 leading-relaxed font-medium">
              Stop hunting for fake coupon codes. Our team negotiates direct member pricing with premium brands.
            </p>

            <div className="mt-5 space-y-2.5">
              {[
                { icon: <ShieldCheck className="h-4 w-4" />, text: '300+ premium brands & live deals' },
                { icon: <Zap className="h-4 w-4" />, text: 'Exclusive member pricing — no fake coupons' },
                { icon: <Crown className="h-4 w-4" />, text: 'Early flash sale access & new drops' },
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/90">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                    {perk.icon}
                  </div>
                  {perk.text}
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4 text-center border border-white/10">
                <p className="text-xs text-white/60 font-medium">Monthly</p>
                <p className="mt-1 text-2xl font-extrabold">₹299</p>
                <p className="text-xs text-white/50">/month</p>
              </div>
              <div className="relative rounded-2xl bg-white/15 p-4 text-center border border-white/20">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-[#FF6B9D] px-3 py-0.5 text-[10px] font-bold whitespace-nowrap">
                  BEST VALUE
                </div>
                <p className="text-xs text-white/60 font-medium">Yearly</p>
                <p className="mt-1 text-2xl font-extrabold">₹2,499</p>
                <p className="text-xs text-white/50">₹208/month</p>
              </div>
            </div>

            <button
              onClick={onLogin}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-page-bg py-3.5 text-sm font-bold text-text-primary transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              Start Saving Today
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pt-5 pb-10">
          <div className="rounded-2xl bg-primary-light p-6 text-center">
            <h2 className="text-lg font-bold text-text-primary">Ready to start saving?</h2>
            <p className="mt-1 text-sm text-text-secondary">
              Join 10,000+ members already saving ₹15,000+ every year.
            </p>
            <button
              onClick={onLogin}
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-primary-dark active:scale-[0.97]"
            >
              Unlock Member Pricing
              <Crown className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
              <span className="text-xs font-extrabold text-white">B</span>
            </div>
            <span className="text-sm font-bold text-text-primary">BuzDealz</span>
          </div>
          <p className="text-xs text-text-muted">
            India's premium deals club for fashion & beauty.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
          <p className="mt-3 text-[11px] text-text-muted">
            © 2026 BuzDealz. All rights reserved.
          </p>
          <button onClick={onLogin} className="mt-6 text-[10px] text-text-muted/30 hover:text-text-muted transition-colors">
            Developer: Switch to Post-Login Experience
          </button>
        </footer>
      </main>
    </div>
  );
}
