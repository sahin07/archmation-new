import type { IndustryContactContent } from "@/content/industry-contact/types";

export const INDUSTRY_CONTACT_CONTENT: IndustryContactContent = {
  eyebrow: "GET IN TOUCH",
  title: "Reach out to Us Today!",
  intro: [
    "Whether you have inquiries, seek collaborations, or want to discuss project requirements, we're here to assist you.",
    "Reach out to explore our services and solutions, and let us help you achieve your goals with our professional expertise.",
  ],
  branches: [
    {
      type: "HEAD OFFICE",
      location:
        "Mogappair Eri Scheme, Anna Nagar West, Chennai, Tamil Nadu",
    },
    {
      type: "BRANCH",
      location: "DLF Westend Heights, Akshayanagar, Bangalore, Karnataka",
    },
    {
      type: "BRANCH",
      location: "Princess Towers, Dubai Marina, Dubai, United Arab Emirates",
    },
    {
      type: "BRANCH",
      location: "Abbotsbury, Greater Sydney Area, NSW, Australia",
    },
  ],
  phoneLabel: "LET'S TALK",
  phone: "+91 9740399025",
  whatsapp: "+91 7827108192",
  emailLabel: "EMAIL",
  emails: ["business@archmation.com", "sachin@archmation.com"],
  hoursLabel: "WORKING HOURS (IST)",
  hoursDays: "Monday - Friday",
  hoursTime: "09am - 11pm",
  formTitle: "Send us a message",
  submitLabel: "SEND MESSAGE",
  defaultService: "Website Design and Development",
  services: [
    { value: "Website Design and Development", label: "Website Design and Development" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "SEO & Marketing", label: "SEO & Marketing" },
    { value: "Branding & Design", label: "Branding & Design" },
    { value: "Video Marketing", label: "Video Marketing" },
    { value: "Other", label: "Other" },
  ],
};
