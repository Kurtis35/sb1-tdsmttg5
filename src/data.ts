import { NavLink, ServiceItem, TestimonialItem, PricingPlan, CaseStudy } from './types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const services: ServiceItem[] = [
  {
    icon: 'search',
    title: 'SEO & Google Ranking',
    description: 'Get found by your ideal clients with our targeted SEO strategies that boost your Google ranking.'
  },
  {
    icon: 'instagram',
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage with customers on the platforms that matter most.'
  },
  {
    icon: 'layout',
    title: 'WordPress & Website Design',
    description: 'Create stunning, conversion-focused websites that turn visitors into customers.'
  },
  {
    icon: 'target',
    title: 'PPC & Ad Campaigns',
    description: 'Drive immediate traffic and leads with expertly managed pay-per-click advertising campaigns.'
  },
  {
    icon: 'mail',
    title: 'Email Marketing',
    description: 'Nurture leads and build customer loyalty with targeted email campaigns that convert.'
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Cape Town Boutique",
    testimonial: "J2W transformed our online presence completely. Our e-commerce sales have increased by 75% since implementing their digital strategy.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Ndlovu",
    company: "Tech Solutions SA",
    testimonial: "Their SEO expertise is unmatched. We're now ranking on page one for all our key service terms, bringing in consistent leads every month.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Naidoo",
    company: "Durban Wellness",
    testimonial: "The social media campaign J2W designed for us has completely transformed our brand awareness and client acquisition strategy.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Starter',
    price: 'R4,999',
    description: 'Perfect for small businesses just getting started online.',
    features: [
      'Website Audit & Optimization',
      'Basic SEO Setup',
      'Social Media Setup',
      'Monthly Performance Report',
      'Email Support'
    ],
    cta: 'Get Started',
  },
  {
    title: 'Growth',
    price: 'R9,999',
    description: 'Ideal for businesses ready to accelerate their online growth.',
    features: [
      'Everything in Starter',
      'Advanced SEO Campaign',
      'Content Creation (5 posts/month)',
      'Google Ads Management',
      'Weekly Strategy Calls',
      'Priority Support'
    ],
    cta: 'Scale Now',
    popular: true,
  },
  {
    title: 'Elite',
    price: 'R19,999',
    description: 'Comprehensive solution for established businesses.',
    features: [
      'Everything in Growth',
      'Full-Service Digital Marketing',
      'Custom Website Development',
      'Content Creation (15 posts/month)',
      'Advanced Analytics & Reporting',
      'Dedicated Account Manager',
      '24/7 VIP Support'
    ],
    cta: 'Contact Us',
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: 'Cape Town Restaurant',
    category: 'Local SEO & Social Media',
    result: '156% increase in bookings',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    client: 'E-commerce Fashion Brand',
    category: 'PPC & Email Marketing',
    result: '215% ROI on ad spend',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    client: 'Tech Startup',
    category: 'Content Marketing & SEO',
    result: '320% increase in qualified leads',
    image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];