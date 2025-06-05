import React from 'react';
import { Star, CheckCircle, Flag } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose J2W</h2>
          <p className="text-lg text-gray-600">
            We deliver results that speak for themselves.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Stat 1 */}
          <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Star className="h-12 w-12 text-yellow-400" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">5-Star</h3>
            <p className="text-gray-600">Client Feedback</p>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600">Successful Campaigns</p>
          </div>
          
          {/* Stat 3 */}
          <div className="bg-gray-50 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Flag className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2">🇿🇦 SA-Based</h3>
            <p className="text-gray-600">Serving Worldwide</p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Trusted By Businesses Like Yours</h3>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;