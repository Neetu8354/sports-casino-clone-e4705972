export const Logo = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold shadow-gold ring-1 ring-gold/40">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold-foreground" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19 L19 5" />
        <path d="M5 19 L9 19 L9 15" />
        <path d="M19 5 L15 5 L15 9" />
      </svg>
    </div>
    <div className="leading-none">
      <div className="font-display text-2xl uppercase tracking-[0.04em] text-foreground">
        Bet<span className="bg-gradient-gold bg-clip-text text-transparent">fair01</span>
      </div>
      <div className="-mt-0.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
        Exchange • Stats
      </div>
    </div>
  </div>
);