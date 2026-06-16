export const SITE = {
  name: "Betfair01",
  tagline: "Online Cricket Betting Exchange – Live Cricket Odds & Ball-by-Ball Markets",
  whatsapp: "https://wa.link/reddyanna_",
  currency: "₹",
};

export const formatCoins = (n: number) =>
  `${SITE.currency}${n.toLocaleString("en-IN")}`;
