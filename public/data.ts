const navs = [
  { name: "Swap", href: "/swap" },
  { name: "Bridge", href: "/bridge" },
  { name: "Pools", href: "/pools" },
  { name: "Products", href: "/products" },
];
const navCols = [
  { name: "Profile", href: "/profile" },
  { name: "Billing", href: "/billing" },
  { name: "Team", href: "/team" },
  { name: "Subscription", href: "/subscription" },
];
const walletsType = [
  { key: "0x4f7e9a2c8d1b3e5f", id: 0 },
  { key: "0x8b2f6d9a3e7c4a1d", id: 1 },
];
const walletsQuantity = {
  0: "2.3",
  1: "4.5",
};
const coinsType = [
  { id: 0, name: "BTC" }, // Bitcoin
  { id: 1, name: "ETH" }, // Ethereum
  { id: 2, name: "USDT" }, // Tether
  { id: 3, name: "BNB" }, // Binance Coin
  { id: 4, name: "USDC" }, // USD Coin
  { id: 5, name: "XRP" }, // XRP
  { id: 6, name: "ADA" }, // Cardano
  { id: 7, name: "DOGE" }, // Dogecoin
  { id: 8, name: "SOL" }, // Solana
  { id: 9, name: "TRX" }, // TRON
];

const cryptoShortForms = {
  0: {
    name: "BTC",
    icon: "https://www.cryptocompare.com/media/37746251/btc.png",
  }, // Bitcoin
  1: {
    name: "ETH",
    icon: "https://www.cryptocompare.com/media/37746238/eth.png",
  }, // Ethereum
  2: {
    name: "USDT",
    icon: "https://www.cryptocompare.com/media/37746338/usdt.png",
  }, // Tether
  3: {
    name: "BNB",
    icon: "https://www.cryptocompare.com/media/37746880/bnb.png",
  }, // Binance Coin
  4: {
    name: "USDC",
    icon: "https://www.cryptocompare.com/media/37747056/usdc.png",
  }, // USD Coin
  5: {
    name: "XRP",
    icon: "https://www.cryptocompare.com/media/37746357/xrp.png",
  }, // XRP (Ripple)
  6: {
    name: "ADA",
    icon: "https://www.cryptocompare.com/media/37746235/ada.png",
  }, // Cardano
  7: {
    name: "DOGE",
    icon: "https://www.cryptocompare.com/media/37746247/doge.png",
  }, // Dogecoin
  8: {
    name: "SOL",
    icon: "https://www.cryptocompare.com/media/37746920/sol.png",
  }, // Solana
  9: {
    name: "TRX",
    icon: "https://www.cryptocompare.com/media/37746409/trx.png",
  }, // TRON
};

const split = (response: string) =>
  response?.slice(0, 4) + "..." + response.slice(-4);

export {
  navs,
  navCols,
  walletsType,
  coinsType,
  split,
  walletsQuantity,
  cryptoShortForms,
};
