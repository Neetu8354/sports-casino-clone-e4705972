import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { POSTS } from "@/data/posts";

const cols: Record<string, { label: string; to?: string; href?: string }[]> = {
  Markets: [
    { label: "Live Match Odds", to: "/#matches" },
    { label: "Exchange", to: "/exchange" },
    { label: "Match Pulse", to: "/#matches" },
    { label: "Fixtures", to: "/#matches" },
  ],
  Stats: [
    { label: "Top Batters", to: "/#stats" },
    { label: "Top Bowlers", to: "/#stats" },
    { label: "Team Form", to: "/#standings" },
    { label: "Cricket Glossary", to: "/blog/cricket-glossary-101-terms" },
  ],
  Blog: [
    { label: "All Articles", to: "/blog" },
    { label: "IPL 2026 Power Rankings", to: "/blog/ipl-2026-team-power-rankings" },
    { label: "Reading the Market", to: "/blog/how-to-read-cricket-stats-like-an-analyst" },
    { label: "In-Play Strategy Guide", to: "/blog/fan-predictions-strategy-guide" },
  ],
  Company: [
    { label: "Trading Floor", to: "/#matches" },
    { label: "Contact", to: "/#matches" },
    { label: "Cricket Blog", to: "/blog" },
  ],
};

export const Footer = () => (
  <footer className="mt-16 border-t border-border bg-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-5">
        <div>
          <Logo />
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Sub-second cricket odds, deep market analytics and a 200K-strong trading floor. Built by traders who refresh the order book too often.</p>
        </div>
        {Object.entries(cols).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald">{title}</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</Link>
                  ) : (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Tag cloud — internal-link surface for SEO */}
      <div className="mt-10 border-t border-border pt-6">
        <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Popular reads</h4>
        <ul className="flex flex-wrap gap-2">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-emerald hover:text-emerald">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Betfair01. Cricket exchange, market analytics & trading community. Not affiliated with any league or operator.
      </div>
    </div>
  </footer>
);
