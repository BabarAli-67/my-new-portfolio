'use client'
import { useState, useEffect } from 'react';
import testimonialsData from '@/data/testimonials.json'

export default function TestimonialsSection() {
  const testimonials = testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const extendedTestimonials = testimonials.length > 0 ? [...testimonials, testimonials[0]] : [];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Testimonials from colleagues, mentors, and clients
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative w-full max-w-3xl mx-auto'>
          <div className='overflow-hidden p-2'>
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div key={index} className='w-full flex-shrink-0 px-2'>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    comment: string;
    rating?: number;
    image?: string;
    linkedIn?: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = testimonial.comment.split(' ');
  const isLong = words.length > 30;

  const displayComment = isLong && !isExpanded
    ? words.slice(0, 30).join(' ') + '...'
    : testimonial.comment;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      {/* Author Info (Moved to top) */}
      <div className="flex items-center mb-6">
        {testimonial.image ? (
          <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4 flex-shrink-0" />
        ) : (
          <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {testimonial.linkedIn ? (
              <a href={testimonial.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                {testimonial.name}
              </a>
            ) : (
              testimonial.name
            )}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Rating Stars Removed */}

      {/* Comment & Quote Icon */}
      <div className='relative flex-grow'>
        <svg
          className="w-8 h-8 text-blue-500 dark:text-blue-400 opacity-20 absolute -top-2 -left-2 z-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed relative z-10 pl-4">
          "{displayComment}"
          <br />
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-semibold transition-colors focus:outline-none"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
