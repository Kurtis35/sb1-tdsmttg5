import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey to Win Story</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                J2W was founded with a simple mission: to help businesses navigate the complex world of digital marketing and achieve real, measurable growth.
              </p>
              <p className="text-blue-100 mb-6 leading-relaxed">
                We believe that every business deserves access to high-quality digital marketing services that deliver tangible results. Our team brings together experts in SEO, social media, web design, and paid advertising to create comprehensive strategies that work.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Based in South Africa, We're not just a service provider – we're your partner in growth.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white p-1 rounded-lg rotate-3 shadow-xl">
                <div className="bg-blue-50 p-8 rounded">
                  <h3 className="text-blue-900 text-xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-4 text-gray-800">
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded mr-3">
                        <span className="text-blue-700 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Integrity</h4>
                        <p className="text-sm text-gray-600">We believe in transparent practices and honest communication.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded mr-3">
                        <span className="text-blue-700 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Results-Driven</h4>
                        <p className="text-sm text-gray-600">We focus on metrics that matter for your business growth.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded mr-3">
                        <span className="text-blue-700 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Innovation</h4>
                        <p className="text-sm text-gray-600">We stay ahead of digital trends to give you the competitive edge.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-300 rounded-lg -rotate-3 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;