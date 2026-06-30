import { Radio } from "lucide-react";

const matches = [
  { league: "IPL T20 · Match Odds", a: "Mumbai", b: "Chennai", score: "1.42 / 1.44", live: true },
  { league: "T20I · Match Odds", a: "India", b: "Australia", score: "Opens 19:30", live: false },
  { league: "BBL · Match Odds", a: "Sydney", b: "Perth", score: "2.10 / 2.14", live: false },
  { league: "PSL · Match Odds", a: "Karachi", b: "Lahore", score: "1.86 / 1.88", live: true },
];

export const LiveMatches = () => (
  <section className="container py-8 sm:py-14">
    <div className="mb-6 sm:mb-7 flex flex-col gap-3">
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">On the book</div>
        <h2 className="font-display mt-2 text-3xl sm:text-4xl md:text-6xl uppercase tracking-wide">Live cricket markets, right now.</h2>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Sub-second back and lay prices across four leagues. Tap a card to read the order book with the floor.</p>
      </div>
    </div>
    <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {matches.map((m, i) => (
        <div key={i} className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-gradient-card p-3 sm:p-5 shadow-card-elevated transition-all hover:-translate-y-1 hover:border-emerald/60 hover:shadow-glow cursor-pointer">
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{m.league}</span>
            {m.live && (
              <span className="flex items-center gap-1 rounded-full bg-destructive/15 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-destructive flex-shrink-0">
                <Radio className="h-2.5 sm:h-3 w-2.5 sm:w-3 animate-pulse" /> In-Play
              </span>
            )}
          </div>
          <div className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold tracking-tight text-foreground">{m.a}</div>
          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">vs</div>
          <div className="text-lg sm:text-xl font-bold tracking-tight text-foreground">{m.b}</div>
          <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 rounded-full bg-emerald/10 px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-emerald tabular-nums">{m.score}</div>
        </div>
      ))}
    </div>
  </section>
);
