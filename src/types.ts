export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  company: string;
  testimonial: string;
  rating: number;
}

export interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface CaseStudy {
  id: number;
  client: string;
  category: string;
  result: string;
  image: string;
}