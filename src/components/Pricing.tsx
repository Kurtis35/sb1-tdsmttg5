import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan to grow your business online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.title}
              className={`rounded-lg ${
                plan.popular 
                  ? 'bg-blue-600 text-white shadow-xl scale-105 z-10' 
                  : 'bg-white text-gray-900 border border-gray-200'
              } overflow-hidden transition-all hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="bg-blue-700 py-1 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>/month</span>
                </div>
                
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className={`h-5 w-5 mr-2 ${plan.popular ? 'text-blue-100' : 'text-blue-600'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`block text-center py-2 rounded-md font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-white text-blue-600 hover:bg-gray-100' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-900">
              <span className="font-semibold">Need a custom solution?</span> Contact us for a tailored package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;