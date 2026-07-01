export type IndustryContactBranch = {
  type: string;
  location: string;
};

export type IndustryContactServiceOption = {
  value: string;
  label: string;
};

export type IndustryContactContent = {
  eyebrow: string;
  title: string;
  intro: string[];
  branches: IndustryContactBranch[];
  phoneLabel: string;
  phone: string;
  whatsapp: string;
  emailLabel: string;
  emails: string[];
  hoursLabel: string;
  hoursDays: string;
  hoursTime: string;
  formTitle: string;
  submitLabel: string;
  defaultService: string;
  services: IndustryContactServiceOption[];
};
