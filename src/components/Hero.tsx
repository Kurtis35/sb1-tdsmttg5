import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden"
    >
      {/* Background animation effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            Turn Clicks Into Customers
            <span className="block text-blue-300">Grow With J2W</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up animation-delay-300">
            Expert Digital Marketing for Real Business Growth
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 inline-flex items-center"
            >
              Get a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#pricing" 
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-blue-900 transition-all hover:-translate-y-1 inline-flex items-center"
            >
              See Our Packages
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f9fafb" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,192C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;