import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Our Clients Say</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-8 rounded-lg shadow-md">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-6">"{testimonial.testimonial}"</p>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;