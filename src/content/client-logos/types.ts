export type ClientLogoItem = {
  name: string;
  logo: string;
  caseLogo: string;
};

export type ClientLogosContent = {
  titleBefore: string;
  titleAccent: string;
  titleAfter: string;
  clients: ClientLogoItem[];
};
