import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImg from "@/assets/hero-cricket.jpg";

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Live cricket stadium with batsman hitting a six" width={1920} height={896} fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/40" />
    </div>
    <div className="container relative z-10 flex min-h-[78vh] flex-col items-start justify-center py-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-background/40 px-3 py-1 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/80">Live · In-Play · Sub-second Odds</span>
      </div>
      <h1 className="font-display mt-6 max-w-5xl text-6xl uppercase leading-[0.92] tracking-[0.01em] text-foreground md:text-[8rem]">
        Every ball.<br />Every price.<br />
        <span className="bg-gradient-gold bg-clip-text text-transparent">One second</span> ahead.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
        Experience the excitement of online cricket betting with real-time odds, live match updates, and ball-by-ball trading opportunities. Access competitive cricket exchange markets for IPL, T20, ODI, and international matches with fast settlements and seamless in-play betting.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#matches"><Button variant="hero" size="lg"><Play className="h-4 w-4" /> View Live Markets</Button></a>
        <a href="#matches">
          <Button variant="emerald" size="lg">Join the Trading Floor</Button>
        </a>
      </div>
      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-border/60 pt-6">
        {[
          { v: "<1s", l: "Odds Latency" },
          { v: "₹4.2Cr", l: "Daily Matched" },
          { v: "200K", l: "Active Traders" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-3xl font-bold tracking-tight tabular-nums text-foreground">{s.v}</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
