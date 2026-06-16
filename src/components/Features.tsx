import { Zap, LineChart, Radar, Users } from "lucide-react";

const items = [
  { icon: Zap, t: "Sub-second back/lay odds", d: "Prices move before the commentator finishes the sentence — a low-latency feed straight from the venue." },
  { icon: LineChart, t: "Deep market analytics", d: "Matched volume, implied probability, phase splits and price history on every market — institutional-grade, free here." },
  { icon: Radar, t: "Live Match Pulse", d: "Where 200K traders place real conviction — refreshed every over alongside the order book." },
  { icon: Users, t: "200K-strong trading floor", d: "An active circle of traders, analysts and obsessives sharing reads on every in-play market. No tipster noise." },
];

export const Features = () => (
  <section className="container py-16">
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">The Edge</div>
      <h2 className="font-display mt-2 text-4xl uppercase tracking-wide md:text-6xl">Built for the ball-by-ball market reader.</h2>
      <p className="mt-3 text-muted-foreground">Four reasons serious cricket traders keep this tab pinned.</p>
    </div>
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div key={it.t} className="group rounded-2xl border border-border bg-gradient-card p-6 shadow-card-elevated transition-all hover:-translate-y-1 hover:border-emerald/60">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald/15 ring-1 ring-emerald/30 transition-all group-hover:bg-emerald/25">
            <it.icon className="h-5 w-5 text-emerald" />
          </div>
          <h3 className="text-base font-bold text-foreground">{it.t}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
        </div>
      ))}
    </div>
  </section>
);
