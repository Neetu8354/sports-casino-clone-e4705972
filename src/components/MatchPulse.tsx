import { TrendingUp } from "lucide-react";

const matches = [
  {
    league: "IPL T20 · In-Play 19:30",
    a: "Mumbai", b: "Chennai",
    fans: { a: 62, b: 38 }, form: { a: "WWLWW", b: "LWWLW" },
    buzz: "₹61L matched",
  },
  {
    league: "T20I · Opens 19:45",
    a: "India", b: "Australia",
    fans: { a: 71, b: 29 }, form: { a: "WWWLW", b: "WLWWL" },
    buzz: "₹84L matched",
  },
  {
    league: "BBL · Tomorrow 14:00",
    a: "Sydney", b: "Perth",
    fans: { a: 44, b: 56 }, form: { a: "LWLWW", b: "WWWLW" },
    buzz: "₹22L matched",
  },
];

const Bar = ({ value }: { value: number }) => (
  <div className="flex w-16 sm:w-[88px] flex-col items-end gap-1">
    <span className="text-xs sm:text-sm font-black tabular-nums text-foreground">{value}%</span>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
      <div className="h-full rounded-full bg-gradient-to-r from-emerald to-accent" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export const MatchPulse = () => (
  <section className="container py-8 sm:py-10">
    <div className="mb-4 sm:mb-5 flex flex-col gap-2">
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">The floor's read</div>
        <h2 className="font-display mt-2 text-3xl sm:text-4xl md:text-6xl uppercase tracking-wide">Match pulse.</h2>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Where 200K traders place real money conviction — refreshed every over alongside the order book.</p>
      </div>
    </div>
    <div className="space-y-3">
      {matches.map((m, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-border bg-gradient-card shadow-card-elevated">
          <div className="flex items-center justify-between border-b border-border/60 bg-secondary/40 px-3 sm:px-4 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald">{m.league}</span>
            <span className="flex items-center gap-1 text-[10px] sm:text-[11px] text-muted-foreground"><TrendingUp className="h-3 w-3" /> {m.buzz}</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3">
            <div>
              <div className="text-sm sm:text-base font-bold text-foreground">{m.a}</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground">Form {m.form.a}</div>
            </div>
            <Bar value={m.fans.a} />
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-2 sm:gap-3 border-t border-border px-3 sm:px-4 py-2 sm:py-3">
            <div>
              <div className="text-sm sm:text-base font-bold text-foreground">{m.b}</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground">Form {m.form.b}</div>
            </div>
            <Bar value={m.fans.b} />
          </div>
        </div>
      ))}
    </div>
  </section>
);
