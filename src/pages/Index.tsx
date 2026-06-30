import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { LiveMatches } from "@/components/LiveMatches";
import { MatchPulse } from "@/components/MatchPulse";
import { PlayerStats } from "@/components/PlayerStats";
import { Features } from "@/components/Features";
import { Leaderboard } from "@/components/Leaderboard";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { Seo, orgJsonLd, websiteJsonLd, breadcrumbJsonLd, SITE_URL } from "@/components/seo/Seo";
import { POSTS } from "@/data/posts";
import { Link } from "react-router-dom";

const faqData = [
  { q: "What is Betfair01 and how does it work?", a: "Betfair01 is an online cricket betting and sports exchange platform where users can access live cricket odds, in-play betting markets, and various sports betting opportunities. It allows users to follow live matches and participate in real-time betting markets." },
  { q: "Is Betfair01 suitable for online cricket betting in India?", a: "Yes, Betfair01 provides access to online cricket betting markets for major tournaments including IPL, T20 Internationals, ODI matches, Test cricket, and other domestic leagues, making it a popular choice among cricket enthusiasts." },
  { q: "How can I start online cricket betting on Betfair01?", a: "To begin online cricket betting, create an account, complete the registration process, add funds, and choose from available cricket betting markets. You can then place bets on match winners, top batsmen, total runs, and other cricket outcomes." },
  { q: "What cricket tournaments are available for betting on Betfair01?", a: "Users can access betting markets for IPL, ICC tournaments, T20 World Cup, ODI World Cup, Champions Trophy, Big Bash League, PSL, CPL, The Hundred, and international cricket series." },
  { q: "What is a cricket betting exchange?", a: "A cricket betting exchange allows users to back or lay outcomes rather than betting directly against a bookmaker. This often provides competitive odds and greater flexibility during live matches." },
  { q: "Does Betfair01 offer live cricket betting?", a: "Yes, live cricket betting is one of the key features of Betfair01. Users can place bets while the match is in progress and take advantage of changing odds after every ball, wicket, or over." },
  { q: "What are live cricket odds?", a: "Live cricket odds are real-time betting prices that change throughout a match based on match conditions, player performances, and game momentum. These odds help users make informed betting decisions." },
  { q: "Can I place bets on IPL matches through Betfair01?", a: "Yes, Betfair01 provides extensive IPL betting markets including match winner betting, top batsman betting, total sixes, player performance markets, and live in-play betting options." },
  { q: "What sports are available besides cricket?", a: "In addition to cricket betting, Betfair01 offers betting markets on football, tennis, basketball, kabaddi, horse racing, badminton, esports, and other popular sporting events." },
  { q: "Does Betfair01 provide online casino games?", a: "Yes, users can enjoy online casino games including live casino tables, roulette, blackjack, baccarat, poker, slots, and virtual gaming experiences." },
  { q: "What is the difference between online cricket betting and cricket exchange betting?", a: "Online cricket betting typically involves betting against a bookmaker, while cricket exchange betting allows users to bet against other participants by backing or laying outcomes at market-driven odds." },
  { q: "How do live betting markets work?", a: "Live betting markets update continuously throughout a sporting event. Users can place bets based on real-time match developments, giving them more opportunities compared to pre-match betting." },
  { q: "Can beginners use Betfair01 for cricket betting?", a: "Yes, beginners can start with basic betting markets such as match winner, toss winner, and over/under betting while learning how cricket exchange and live betting markets operate." },
  { q: "What are the most popular cricket betting markets?", a: "Popular markets include match winner betting, top batsman, top bowler, total runs, total wickets, over-by-over betting, session betting, and live cricket exchange markets." },
  { q: "Is mobile betting available on Betfair01?", a: "Yes, users can access betting markets through mobile devices, allowing them to follow live matches, check odds, and place bets from virtually anywhere." },
  { q: "What are the benefits of live cricket betting?", a: "Live cricket betting offers real-time opportunities, dynamic odds, flexible betting strategies, cash-out options, and the ability to react instantly to match-changing moments." },
  { q: "Can I bet on international cricket matches?", a: "Yes, Betfair01 covers international cricket including India matches, Ashes series, ICC events, bilateral series, and major cricket leagues worldwide." },
  { q: "What are online casino slot games?", a: "Online casino slot games are digital casino games featuring reels, bonus features, jackpots, free spins, and various themes that provide an engaging gaming experience." },
  { q: "How can I improve my online cricket betting strategy?", a: "Successful online cricket betting often involves researching teams, analyzing player form, monitoring pitch conditions, understanding live odds movements, and managing your bankroll responsibly." },
  { q: "Why do users choose Betfair01 for online betting cricket?", a: "Many users prefer Betfair01 for its live cricket betting markets, competitive exchange odds, extensive sports coverage, in-play betting options, online casino games, and user-friendly betting experience." },
];

interface IndexProps {
  scrollTo?: string;
}

const Index = ({ scrollTo }: IndexProps) => {
  const homeFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  React.useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <div id="top" className="min-h-screen bg-background pb-16 lg:pb-0">
      <Seo
        title="Betfair01 India | Live Cricket Betting, Cricket Exchange & Casino Games"
        description="Join Betfair01 for online cricket betting in India. Access live cricket odds, cricket exchange markets, IPL betting, T20 odds, and casino games with fast settlements and seamless in-play betting."
        canonical="/"
        keywords="online cricket betting, cricket exchange, live cricket odds, IPL betting, T20 betting, cricket betting India, Betfair01, live betting, casino games, sports betting"
        jsonLd={[orgJsonLd, websiteJsonLd, breadcrumbJsonLd([{ name: "Home", url: "/" }]), homeFaq]}
      />
      <Header />
      <main>
        <Hero />
        <PromoSlider />
        <div id="matches"><LiveMatches /></div>
        <MatchPulse />
        <div id="stats"><PlayerStats /></div>
        <Features />
        <div id="standings"><Leaderboard /></div>
        <section aria-labelledby="latest-blog" className="container py-8 sm:py-12">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">The Trading Floor</div>
              <h2 id="latest-blog" className="font-display mt-2 text-3xl sm:text-4xl md:text-6xl uppercase tracking-wide">Long reads. Sharp prices. Sharper edges.</h2>
            </div>
            <Link to="/blog" className="text-xs sm:text-sm font-semibold text-emerald hover:underline whitespace-nowrap">View all →</Link>
          </div>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {POSTS.slice(0, 6).map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group rounded-xl sm:rounded-2xl border border-border bg-gradient-card p-4 sm:p-6 shadow-card-elevated transition-all hover:-translate-y-1 hover:border-emerald/60 hover:shadow-glow">
                <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald">{p.category}</div>
                <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold leading-snug tracking-tight group-hover:text-emerald">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="container py-8 sm:py-12">
          <div className="mb-6 sm:mb-8 text-center px-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">Got Questions?</div>
            <h2 id="faq-heading" className="font-display mt-2 text-2xl sm:text-3xl md:text-5xl uppercase tracking-wide">Frequently Asked Questions (FAQs) – Betfair01</h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-2 sm:space-y-3 px-4 sm:px-0">
            {faqData.map((f, i) => (
              <details key={i} className="group rounded-lg sm:rounded-xl border border-border bg-gradient-card p-3 sm:p-4 shadow-card transition-all hover:border-emerald/40">
                <summary className="cursor-pointer list-none text-sm sm:text-base font-semibold text-foreground flex items-center justify-between">
                  <span>{i + 1}. {f.q}</span>
                  <span className="ml-2 text-emerald transition-transform group-open:rotate-180 flex-shrink-0">▼</span>
                </summary>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-foreground/85">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
