import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const nav: { label: string; href: string; internal?: boolean }[] = [
  { label: "Live Markets", href: "/#matches", internal: true },
  { label: "Exchange", href: "/exchange", internal: true },
  { label: "Stats", href: "/#stats", internal: true },
  { label: "Traders", href: "/#standings", internal: true },
  { label: "Blog", href: "/blog", internal: true },
];

export const Header = () => {
  return (
    <>
    <div className="hidden border-b border-border/50 bg-background/80 backdrop-blur md:block">
      <div className="container flex h-8 items-center justify-between text-[11px] text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" /> Markets live</span>
          <span className="hidden lg:inline">Odds sync · 0.4s ago</span>
        </div>
        <div className="flex items-center gap-4">
          <span>IPL 2026 · Match Day 14 · ₹4.2Cr matched</span>
          <span className="hidden lg:inline">EN · IN</span>
        </div>
      </div>
    </div>
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((n) => (
              n.internal ? (
                <Link key={n.label} to={n.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-emerald">
                  {n.label}
                </Link>
              ) : (
                <a key={n.label} href={n.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/70 transition-colors hover:text-emerald">
                  {n.label}
                </a>
              )
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
    </>
  );
};
