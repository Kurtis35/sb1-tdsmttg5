import React from 'react';
import { caseStudies } from '../data';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-lg text-gray-600">
            See the real results we've achieved for businesses just like yours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.client} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm text-blue-300 mb-1">{study.category}</p>
                <h3 className="text-xl font-semibold mb-2">{study.client}</h3>
                <p className="text-lg font-bold text-blue-300">{study.result}</p>
              </div>
              
              <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <a 
                  href="#contact" 
                  className="px-5 py-2 bg-white text-blue-900 rounded-md font-medium"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
          >
            Get Similar Results
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;