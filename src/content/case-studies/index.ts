export type CaseStudyPost = {
  id: number;
  title: string;
  image: string;
  category: string;
  categorySlug?: string;
  excerpt: string;
  href: string;
};

export const BLOGS_BASE_PATH = "/blogs";
export const BLOG_ARCHIVE_PATH = "/blog";
export const CASE_STUDIES_ARCHIVE_PATH = "/case-studies";

/** @deprecated Use BLOGS_BASE_PATH */
export const CASE_STUDIES_BASE_PATH = BLOGS_BASE_PATH;

export const GOOD_READS_MENU_ITEM_ID = "menu-item-23";
export const GOOD_READS_HREF = CASE_STUDIES_ARCHIVE_PATH;

export const CASE_STUDIES_SECTION = {
  eyebrow: "Blogs and Case Studies",
  title: "Carefully Curated Reads from the Marketing World",
  readCtaLabel: "Read Article",
  viewAllLabel: "View All Posts",
  viewAllHref: CASE_STUDIES_ARCHIVE_PATH,
} as const;

export const CASE_STUDIES_PAGE_SECTION = {
  eyebrow: "Get the Latest Buzz",
  title: "Insights, Articles, and Case Studies",
  readCtaLabel: CASE_STUDIES_SECTION.readCtaLabel,
} as const;

export const BLOG_ARCHIVE_SECTION = {
  eyebrow: "From the Blog",
  title: "Insights and Articles from the Marketing World",
  readCtaLabel: CASE_STUDIES_SECTION.readCtaLabel,
} as const;

export const CASE_STUDIES_ARCHIVE_SECTION = {
  eyebrow: "Category",
  title: "Case Study",
  readCtaLabel: CASE_STUDIES_SECTION.readCtaLabel,
} as const;

export const CASE_STUDY_POSTS: readonly CaseStudyPost[] = [
  {
    id: 1,
    title: "Scaling Towards Profitability",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&h=300&fit=crop",
    category: "3D Printing",
    excerpt: "Discover how strategic positioning led to 340% revenue growth",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 2,
    title:
      "Beyond the Bag: How Archmation Engineered a 335% ROAS Increase for Chérie",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    category: "E-Commerce",
    excerpt: "A complete case study on data-driven optimization strategies",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 3,
    title: "How We helped Sahil Machines Grow Website Traffic by 122% in 6 Months",
    image:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76d8?w=500&h=300&fit=crop",
    category: "SEO & PPC",
    excerpt: "Proven techniques for sustainable organic growth",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 4,
    title: "Real Estate Marketing Excellence: Converting Leads to Sales",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=300&fit=crop",
    category: "Real Estate",
    excerpt: "Leveraging digital strategies to dominate the real estate market",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 5,
    title: "EdTech Revolution: Scaling Online Learning Platforms",
    image:
      "https://images.unsplash.com/photo-1516534975068-66c3447eae5f?w=500&h=300&fit=crop",
    category: "Education",
    excerpt:
      "How to reach millions of students through effective digital marketing",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 6,
    title: "Manufacturing Growth: B2B Lead Generation at Scale",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
    category: "Manufacturing",
    excerpt: "Industrial sector success stories with data-driven strategies",
    href: "https://archmation.com/our-work/",
  },
] as const;

export function injectGoodReadsNavLink(html: string): string {
  return html.replace(
    /(<li id="menu-item-23"[^>]*><a href=")[^"]*(")/,
    `$1${GOOD_READS_HREF}$2`,
  );
}
