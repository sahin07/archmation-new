import { BLOGS_BASE_PATH } from "@/content/case-studies";
import {
  BLOG_CATEGORY_ID,
  CASE_STUDY_CATEGORY_ID,
} from "@/lib/wordpress/constants";
import type { WordPressCategory, WordPressPost } from "@/lib/wordpress/types";

function term(
  id: number,
  name: string,
  slug: string,
  taxonomy: "category" | "post_tag",
) {
  return { id, name, slug, taxonomy };
}

function post(input: {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  categoryId: number;
  categoryName: string;
  categorySlug: string;
  tag: string;
  content: string;
}): WordPressPost {
  return {
    id: input.id,
    slug: input.slug,
    date: input.date,
    modified: input.date,
    link: `${BLOGS_BASE_PATH}/${input.slug}`,
    title: { rendered: input.title },
    excerpt: { rendered: `<p>${input.excerpt}</p>` },
    content: { rendered: input.content },
    categories: [input.categoryId],
    tags: [input.id + 100],
    yoast_head_json: {
      title: `${input.title} | Archmation Studios`,
      description: input.excerpt,
    },
    _embedded: {
      "wp:featuredmedia": [{ source_url: input.image, alt_text: input.title }],
      "wp:term": [
        [
          term(
            input.categoryId,
            input.categoryName,
            input.categorySlug,
            "category",
          ),
        ],
        [term(input.id + 100, input.tag, input.tag.toLowerCase(), "post_tag")],
      ],
    },
  };
}

export const FALLBACK_CATEGORIES: WordPressCategory[] = [
  { id: BLOG_CATEGORY_ID, name: "Blog", slug: "blog", count: 3, link: "/blogs" },
  {
    id: CASE_STUDY_CATEGORY_ID,
    name: "Case Study",
    slug: "case-study",
    count: 3,
    link: "/case-studies",
  },
];

export const FALLBACK_POSTS: WordPressPost[] = [
  post({
    id: 9001,
    slug: "scaling-towards-profitability",
    date: "2025-11-12T10:00:00",
    title: "Scaling Towards Profitability",
    excerpt:
      "How a focused positioning and performance plan helped a growing brand move from spend-heavy growth to profitable scale.",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&h=700&fit=crop",
    categoryId: CASE_STUDY_CATEGORY_ID,
    categoryName: "Case Study",
    categorySlug: "case-study",
    tag: "Growth",
    content: `
<p><strong>Client:</strong> D2C brand</p>
<p><strong>Timeline:</strong> 6 months</p>
<h2>Objective</h2>
<p>The brand was generating traffic, but acquisition costs were rising faster than revenue. Archmation rebuilt the funnel around high-intent audiences, clearer offers, and weekly creative testing.</p>
<h2>What we did</h2>
<ul>
<li>Repositioned the brand around a sharper value proposition</li>
<li>Restructured Meta and Google campaigns by intent, not just product</li>
<li>Improved landing pages and checkout messaging</li>
<li>Set a weekly testing cadence for creatives and offers</li>
</ul>
<h2>Results</h2>
<p>The account moved from unprofitable scale to a healthier contribution margin, with stronger repeat purchase signals and a more predictable media mix.</p>
`,
  }),
  post({
    id: 9002,
    slug: "cherie-335-percent-roas",
    date: "2025-10-08T10:00:00",
    title:
      "Beyond the Bag: How Archmation Engineered a 335% ROAS Increase for Chérie",
    excerpt:
      "A complete look at the data-driven campaign system behind a 335% ROAS lift for an e-commerce brand.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",
    categoryId: CASE_STUDY_CATEGORY_ID,
    categoryName: "Case Study",
    categorySlug: "case-study",
    tag: "E-Commerce",
    content: `
<p><strong>Client:</strong> Chérie</p>
<p><strong>Timeline:</strong> 4 months</p>
<h2>Objective</h2>
<p>Chérie needed performance marketing that protected brand feel while producing measurable return. We built a full-funnel system connecting creative, targeting, and conversion pages.</p>
<h2>What we did</h2>
<ul>
<li>Mapped the customer journey from first view to repeat purchase</li>
<li>Launched offer-led creatives with brand-safe storytelling</li>
<li>Separated prospecting and retargeting with tighter exclusions</li>
<li>Optimized product pages for speed, proof, and clarity</li>
</ul>
<h2>Results</h2>
<p>The campaign delivered a 335% ROAS increase versus the previous baseline, with better blended CAC and stronger catalog efficiency.</p>
`,
  }),
  post({
    id: 9003,
    slug: "sahil-machines-website-traffic-growth",
    date: "2025-09-18T10:00:00",
    title: "How We Helped Sahil Machines Grow Website Traffic by 122% in 6 Months",
    excerpt:
      "SEO, content, and paid search working together to grow qualified industrial traffic.",
    image:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76d8?w=1200&h=700&fit=crop",
    categoryId: CASE_STUDY_CATEGORY_ID,
    categoryName: "Case Study",
    categorySlug: "case-study",
    tag: "SEO",
    content: `
<p><strong>Client:</strong> Sahil Machines</p>
<p><strong>Timeline:</strong> 6 months</p>
<h2>Objective</h2>
<p>Sahil Machines needed more than vanity traffic. The goal was qualified enquiry volume from buyers looking for industrial machinery.</p>
<h2>What we did</h2>
<ul>
<li>Rebuilt service and product pages around real search intent</li>
<li>Published technical content that sales teams could also use</li>
<li>Improved site structure, internal links, and page speed</li>
<li>Supported organic growth with tightly themed search ads</li>
</ul>
<h2>Results</h2>
<p>Website traffic grew 122% in six months, with a clear lift in enquiry quality from manufacturing and workshop buyers.</p>
`,
  }),
  post({
    id: 9004,
    slug: "real-estate-marketing-excellence",
    date: "2025-08-21T10:00:00",
    title: "Real Estate Marketing Excellence: Converting Leads to Sales",
    excerpt:
      "How digital strategy, video, and follow-up systems help property brands convert interest into site visits and sales.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=700&fit=crop",
    categoryId: BLOG_CATEGORY_ID,
    categoryName: "Blog",
    categorySlug: "blog",
    tag: "Real Estate",
    content: `
<h2>Why most real estate funnels leak</h2>
<p>Beautiful project films are not enough if the landing page, lead form, and sales follow-up are disconnected. Buyers need proof, inventory clarity, and a reason to enquire now.</p>
<h2>What works</h2>
<ul>
<li>Short-form video for discovery and longer films for trust</li>
<li>Location-led landing pages with inventory and pricing context</li>
<li>CRM-ready lead capture and same-day follow-up</li>
<li>Retargeting that answers objections instead of repeating the same ad</li>
</ul>
<p>Archmation uses this system for developers and brokers who need site visits, not just impressions.</p>
`,
  }),
  post({
    id: 9005,
    slug: "edtech-revolution-scaling-online-learning",
    date: "2025-07-14T10:00:00",
    title: "EdTech Revolution: Scaling Online Learning Platforms",
    excerpt:
      "Practical marketing lessons for EdTech brands that need enrolments, not just app installs.",
    image:
      "https://images.unsplash.com/photo-1516534975068-66c3447eae5f?w=1200&h=700&fit=crop",
    categoryId: BLOG_CATEGORY_ID,
    categoryName: "Blog",
    categorySlug: "blog",
    tag: "EdTech",
    content: `
<h2>The enrolment problem</h2>
<p>EdTech brands often over-invest in top-funnel reach and under-invest in course-market fit, proof, and onboarding. The result is cheap installs and expensive drop-off.</p>
<h2>A better growth model</h2>
<ul>
<li>Segment campaigns by exam, skill, or parent vs student intent</li>
<li>Use faculty and outcome stories as the main creative engine</li>
<li>Build landing pages around one course decision, not the whole catalogue</li>
<li>Measure trial-to-paid, not only CPL</li>
</ul>
<p>That is the framework we use when helping learning brands scale with cleaner unit economics.</p>
`,
  }),
  post({
    id: 9006,
    slug: "manufacturing-b2b-lead-generation",
    date: "2025-06-09T10:00:00",
    title: "Manufacturing Growth: B2B Lead Generation at Scale",
    excerpt:
      "How manufacturers can generate serious B2B enquiries with content, search, and a sharper website.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=700&fit=crop",
    categoryId: BLOG_CATEGORY_ID,
    categoryName: "Blog",
    categorySlug: "blog",
    tag: "Manufacturing",
    content: `
<h2>Industrial buyers research differently</h2>
<p>A plant head is not impulse-buying. They compare specifications, trust signals, after-sales support, and whether the supplier looks capable of delivery.</p>
<h2>What to build</h2>
<ul>
<li>Application pages for each machine or use case</li>
<li>Case studies with process photos and measurable outcomes</li>
<li>Search campaigns on high-intent product terms</li>
<li>A website that can convert a serious enquiry in under a minute</li>
</ul>
<p>This is how Archmation helps manufacturing brands move from brochure websites to demand engines.</p>
`,
  }),
];

export function getFallbackPosts(
  kind: "all" | "blog" | "case-study" = "all",
): WordPressPost[] {
  if (kind === "blog") {
    return FALLBACK_POSTS.filter((item) =>
      item.categories.includes(BLOG_CATEGORY_ID),
    );
  }

  if (kind === "case-study") {
    return FALLBACK_POSTS.filter((item) =>
      item.categories.includes(CASE_STUDY_CATEGORY_ID),
    );
  }

  return FALLBACK_POSTS;
}

export function getFallbackPostBySlug(slug: string): WordPressPost | null {
  return FALLBACK_POSTS.find((item) => item.slug === slug) ?? null;
}

export function getFallbackSlugs(): string[] {
  return FALLBACK_POSTS.map((item) => item.slug);
}
