import { Home, BarChart3, Trophy, Activity, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Activity, label: "In-Play", to: "/" },
  { icon: Newspaper, label: "Pulse", to: "/" },
  { icon: BarChart3, label: "Markets", to: "/stats" },
  { icon: Trophy, label: "Traders", to: "/standings" },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
    <ul className="grid grid-cols-5">
      {items.map((it) => (
        <li key={it.label}>
          <Link 
            to={it.to} 
            onClick={() => {
              if (it.label === "Home") scrollToSection("top");
              else if (it.label === "In-Play" || it.label === "Pulse") scrollToSection("matches");
            }}
            className="flex flex-col items-center gap-1 py-2.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <it.icon className="h-5 w-5" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">{it.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
