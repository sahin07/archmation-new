export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Mr. P S Gill",
    role: "Chairman, Sahil Machines",
    quote:
      "Sachin and his team have helped us take our three-generation old business online. They have been helping us with the tech part and now we are hoping to see what more we can achieve.",
  },
  {
    name: "Mr. Manish Jindal",
    role: "Jindal Real Estate, Australia",
    quote:
      "I am working with Sachin since August and it's great to have him around. He not only gets the main job done but also takes time to help with ideation and brainstorming.",
  },
  {
    name: "Rev. Brother Kennedy",
    role: "St. Patricks School, Chennai",
    quote:
      "Sachin personally decided to work with us and design logos and creatives for the 150-year celebration of our prestigious school. His work is thorough and professional.",
  },
  {
    name: "Mr. Saahil Sud",
    role: "Content Manager, Unacademy",
    quote:
      "The quality of content they have been consistently producing for us has helped us make a presence on YouTube.",
  },
];

export type ClientsSayContent = {
  tagline: string;
  taglineAuthor: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  testimonials: Testimonial[];
  ctaLines: [string, string, string];
  ctaHref: string;
};

export const DEFAULT_CLIENTS_SAY_CONTENT: ClientsSayContent = {
  tagline: "Results speak louder than words.",
  taglineAuthor: "Archmation",
  titleLine1: "WHAT OUR",
  titleLine2: "CLIENTS SAY",
  description:
    "Don't take our word for it — hear directly from the businesses we've helped grow. 100% authentic.",
  testimonials: DEFAULT_TESTIMONIALS,
  ctaLines: ["Explore", "our", "services"],
  ctaHref: "https://archmation.com/our-services/",
};
