import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow? Let's Build Your Digital Empire.
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the businesses that have transformed their online presence and achieved remarkable growth with J2W.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-blue-700 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 inline-flex items-center"
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-blue-700 transition-all hover:-translate-y-1"
            >
              Send Me a Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;