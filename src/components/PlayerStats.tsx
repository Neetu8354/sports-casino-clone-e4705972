const players = [
  { name: "V. Sharma", role: "Batter", runs: 642, sr: 152.3, avg: 48.6 },
  { name: "R. Pandey", role: "All-rounder", runs: 412, sr: 138.1, avg: 36.2 },
  { name: "K. Iyer", role: "Bowler", runs: 88, sr: 110.0, avg: 12.4 },
  { name: "S. Khan", role: "Batter", runs: 588, sr: 145.7, avg: 44.1 },
];

export const PlayerStats = () => (
  <section className="container py-8 sm:py-10">
    <div className="mb-6 sm:mb-7">
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">Market movers</div>
      <h2 className="font-display mt-2 text-3xl sm:text-4xl md:text-6xl uppercase tracking-wide">The players who move the odds.</h2>
      <p className="mt-2 text-xs sm:text-sm text-muted-foreground">This season's standouts — the names that compress a chasing price by 0.20 the moment they walk in.</p>
    </div>
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {players.map((p) => (
        <div key={p.name} className="group rounded-xl sm:rounded-2xl border border-border bg-gradient-card p-4 sm:p-5 shadow-card-elevated transition-all hover:-translate-y-0.5 hover:border-emerald/50">
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm sm:text-base font-bold text-foreground">{p.name}</div>
            <span className="rounded-full bg-emerald/15 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-emerald flex-shrink-0">{p.role}</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div><div className="text-lg sm:text-xl font-bold tracking-tight text-foreground tabular-nums">{p.runs}</div><div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">Runs</div></div>
            <div><div className="text-lg sm:text-xl font-bold tracking-tight text-foreground tabular-nums">{p.sr}</div><div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">SR</div></div>
            <div><div className="text-lg sm:text-xl font-bold tracking-tight text-foreground tabular-nums">{p.avg}</div><div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground">Avg</div></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
