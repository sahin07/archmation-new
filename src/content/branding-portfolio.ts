export type BrandingPortfolioFolio = "folio-1" | "folio-2" | "folio-3";

export type BrandingPortfolioItem = {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  folio: BrandingPortfolioFolio;
};

export type BrandingPortfolioFilter = "all" | BrandingPortfolioFolio;

export const BRANDING_PORTFOLIO_FILTERS: { id: BrandingPortfolioFilter; label: string }[] =
  [
    { id: "all", label: "All" },
    { id: "folio-1", label: "Folio 1" },
    { id: "folio-2", label: "Folio 2" },
    { id: "folio-3", label: "Folio 3" },
  ];

export const BRANDING_PORTFOLIO_ITEMS: BrandingPortfolioItem[] = [
  {
    id: "tribal-sting",
    name: "Tribal Sting",
    category: "Bar and Restaurant",
    imageSrc: "/images/branding/3-1.png",
    folio: "folio-1",
  },
  {
    id: "wedding-gene",
    name: "The Wedding Gene",
    category: "Marriage Invitations",
    imageSrc: "/images/branding/1-2.png",
    folio: "folio-1",
  },
  {
    id: "karsten",
    name: "Karsten",
    category: "Building Contractors and Developers",
    imageSrc: "/images/branding/9.png",
    folio: "folio-1",
  },
  {
    id: "the-axiz",
    name: "The Axiz",
    category: "3D Printing and Manufacturing",
    imageSrc: "/images/branding/10.png",
    folio: "folio-1",
  },
  {
    id: "synonym",
    name: "Synonym",
    category: "Broadcast and animation",
    imageSrc: "/images/branding/4-1.png",
    folio: "folio-1",
  },
  {
    id: "wedding-gene-stationery",
    name: "The Wedding Gene",
    category: "Marriage Invitations",
    imageSrc: "/images/branding/Capture2.png",
    folio: "folio-1",
  },
  {
    id: "wedding-gene-brand",
    name: "The Wedding Gene",
    category: "Marriage Invitations",
    imageSrc: "/images/branding/Capture.png",
    folio: "folio-1",
  },
  {
    id: "wedding-gene-sign",
    name: "The Wedding Gene",
    category: "Marriage Invitations",
    imageSrc: "/images/branding/Capture3.png",
    folio: "folio-1",
  },
  {
    id: "wedding-gene-cards",
    name: "The Wedding Gene",
    category: "Marriage Invitations",
    imageSrc: "/images/branding/Capture4.png",
    folio: "folio-1",
  },
  {
    id: "wedding-gene-wood",
    name: "The Wedding Gene",
    category: "Marriage Invitations",
    imageSrc: "/images/branding/wedding.png",
    folio: "folio-1",
  },
  {
    id: "homshop",
    name: "homshop",
    category: "Shopping and Delivery",
    imageSrc: "/images/branding/5-1.png",
    folio: "folio-2",
  },
  {
    id: "sagemode",
    name: "Sagemode",
    category: "Branding and Marketing",
    imageSrc: "/images/branding/7-1.png",
    folio: "folio-2",
  },
  {
    id: "kvs-coffee",
    name: "KVS Coffee Coorg",
    category: "Indian Coffee Plantation",
    imageSrc: "/images/branding/6-1.png",
    folio: "folio-2",
  },
  {
    id: "sagemode-construction",
    name: "Sagemode",
    category: "Branding and Marketing",
    imageSrc: "/images/branding/Creation.png",
    folio: "folio-2",
  },
  {
    id: "prasanth-amaran",
    name: "Prasanth Amaran",
    category: "Personal Brand",
    imageSrc: "/images/branding/Personal-Brand.png",
    folio: "folio-2",
  },
  {
    id: "prasanth-amaran-cards",
    name: "Prasanth Amaran",
    category: "Personal Brand",
    imageSrc: "/images/branding/Personal-Brand-1.png",
    folio: "folio-2",
  },
  {
    id: "prasanth-amaran-kit",
    name: "Prasanth Amaran",
    category: "Personal Brand",
    imageSrc: "/images/branding/Personal-Brand2.png",
    folio: "folio-2",
  },
  {
    id: "prasanth-amaran-deliverables",
    name: "Prasanth Amaran",
    category: "Personal Brand",
    imageSrc: "/images/branding/Personal-Brand3.png",
    folio: "folio-2",
  },
  {
    id: "imaginary-circle",
    name: "Imaginary Circle",
    category: "Creative Agency",
    imageSrc: "/images/branding/2-1.png",
    folio: "folio-3",
  },
  {
    id: "local-guide",
    name: "Local Guide",
    category: "Map and Location Search",
    imageSrc: "/images/branding/8-1.png",
    folio: "folio-3",
  },
];
