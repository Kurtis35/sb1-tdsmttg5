import React from 'react';
import { Search, Instagram, Layout, Target, Mail } from 'lucide-react';
import { services } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  search: <Search className="h-8 w-8 text-blue-600" />,
  instagram: <Instagram className="h-8 w-8 text-blue-600" />,
  layout: <Layout className="h-8 w-8 text-blue-600" />,
  target: <Target className="h-8 w-8 text-blue-600" />,
  mail: <Mail className="h-8 w-8 text-blue-600" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive digital marketing solutions to help your business thrive in the online landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full inline-block group-hover:bg-blue-100 transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;