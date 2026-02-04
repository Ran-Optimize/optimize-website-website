
export interface SiteStrategy {
  brandName: string;
  tagline: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  sections: {
    title: string;
    description: string;
  }[];
  priceEstimation: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}
