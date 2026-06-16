import { Trophy } from "lucide-react";

const players = [
  { n: "RajaOfRanchi", c: 250000, w: 142 },
  { n: "MumbaiMasti", c: 198400, w: 121 },
  { n: "DilliDhamaka", c: 175200, w: 115 },
  { n: "ChennaiChamp", c: 162000, w: 108 },
  { n: "PunjabPower", c: 144800, w: 99 },
].sort((a, b) => b.c - a.c);

export const Leaderboard = () => {
  return (
  <section className="container py-12">
    <div className="mb-7 flex items-end justify-between gap-3">
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">Trading floor leaders</div>
        <h2 className="font-display mt-2 flex items-center gap-3 text-4xl uppercase tracking-wide md:text-6xl">
          <Trophy className="h-8 w-8 text-emerald" /> This week's sharpest reads.
        </h2>
      </div>
      <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Trader rankings</span>
    </div>
    <div className="overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card-elevated">
      <table className="w-full">
        <thead className="bg-secondary/50">
          <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="p-4">#</th>
            <th className="p-4">Trader</th>
            <th className="p-4 text-right">Calls Hit</th>
            <th className="p-4 text-right">Points</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr key={p.n} className="border-t border-border transition-colors hover:bg-secondary/30">
              <td className="p-4 text-sm font-bold text-emerald tabular-nums">#{i + 1}</td>
              <td className="p-4 font-semibold text-foreground">{p.n}</td>
              <td className="p-4 text-right text-muted-foreground">{p.w}</td>
              <td className="p-4 text-right font-bold text-emerald tabular-nums">{p.c.toLocaleString("en-IN")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
  );
};
