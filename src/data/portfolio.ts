import { encodePublicPath } from "../utils/publicPath";

function p(folder: string, file: string): string {
  return encodePublicPath(`/images/portfolios/${folder}/${file}`);
}

const brandCommunications = [
  "Deran  banner 2.png",
  "Deran  banner.png",
  "VICROM Corp 11.jpg",
  "VICROM Corp 18.jpg",
  "VICROM Corp 19.jpg",
  "VICROM Corp 20.jpg",
  "VICROM Corp 21.jpg",
  "VICROM Corp 22.jpg",
  "VICROM Corp 23.jpg",
  "VICROM Corp 24.jpg",
  "VICROM Corp 25.jpg",
  "VICROM Corp 26.jpg",
  "VICROM Corp 27.jpg",
  "VICROM Corp 28.jpg",
  "VICROM Corp 29.jpg",
  "VICROM Corp 30.jpg",
  "VICROM Corp 4.jpg",
  "VICROM Corp 5.jpg",
  "VICROM Corp 6.jpg",
  "VICROM Corp 7.jpg",
  "VICROM Corp 8.jpg",
  "VICROM corp 1.jpg",
  "VICROM corp 10.jpg",
  "VICROM corp 12.jpg",
  "VICROM corp 13.jpg",
  "VICROM corp 14.jpg",
  "VICROM corp 15.jpg",
  "VICROM corp 16.jpg",
  "VICROM corp 17.jpg",
  "VICROM corp 2.jpg",
  "VICROM corp 3.jpg",
  "VICROM corp 31.jpg",
  "VICROM corp 9.jpg",
].map((file) => p("Brand Communications", file));

const branding = [
  "Foodlicious 1.jpg",
  "Foodlicious 2.jpg",
  "Foodlicious 5.jpg",
  "VICROM Bra 2.jpg",
  "VICROM bra 1.jpg",
  "VICROM bra 3.jpg",
  "Vicrom bra 4.jpg",
  "foodlicious 3.jpg",
  "foodlicious 4.jpg",
].map((file) => p("Branding", file));

const corpGifts = [
  "Vicrom job 1.jpg",
  "Vicrom job 2.jpg",
  "Vicrom job 3.jpg",
  "Vicrom job 4.jpg",
  "Vicrom job 5.jpg",
  "Vicrom job 6.jpg",
  "Vicrom job 7.jpg",
  "Vicrom job 8.jpg",
  "Vicrom job 9.jpg",
  "Vicrom job 10.jpg",
].map((file) => p("Corp Gifts", file));

const designs = [
  "VICROM des 1.jpg",
  "VICROM des 2.jpg",
  "VICROM des 4.jpg",
  "VICROM des 6.jpg",
  "VICROM des 7.jpg",
  "Vicrom Des 3.jpg",
  "Vicrom Des 5.jpg",
].map((file) => p("Designs", file));

const labelAndPackages = [
  "VICROM Package 1.jpg",
  "VICROM Package 2.jpg",
  "VICROM Package 3.jpg",
  "VICROM Package 4.jpg",
  "VICROM Package 5.jpg",
  "VICROM Package 6.jpg",
].map((file) => p("Label and Packages", file));

const signages = [
  "VICROM Signs 1.jpg",
  "VICROM Signs 2.jpg",
  "VICROM Signs 3.jpg",
  "VICROM Signs 4.jpg",
].map((file) => p("Signages", file));

export type PortfolioCategory = {
  id: string;
  title: string;
  images: string[];
};

export const portfolioCategories: PortfolioCategory[] = [
  { id: "brand-communications", title: "Brand Communications", images: brandCommunications },
  { id: "branding", title: "Branding", images: branding },
  { id: "corp-gifts", title: "Corporate Gifts", images: corpGifts },
  { id: "designs", title: "Designs", images: designs },
  { id: "label-packages", title: "Label & Packages", images: labelAndPackages },
  { id: "signages", title: "Signages", images: signages },
];

/** Home page featured tiles — real work from the portfolio library */
export const featuredWorkPreview = [
  {
    to: "/work#branding",
    src: p("Branding", "Foodlicious 1.jpg"),
    title: "Brand Identity",
    subtitle: "Branding & visual systems",
  },
  {
    to: "/work#brand-communications",
    src: p("Brand Communications", "VICROM Corp 11.jpg"),
    title: "Brand Communications",
    subtitle: "Campaigns & corporate communications",
  },
] as const;
