'use client'
import React, { useState } from 'react'
import testimonialsData from '@/data/testimonials.json'

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating?: number;
  image?: string;
  linkedIn?: string;
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = testimonial.comment.split(' ');
  const isLong = words.length > 30;

  const displayComment = isLong && !isExpanded
    ? words.slice(0, 30).join(' ') + '...'
    : testimonial.comment;

  return (
    <div
      className='bg-section dark:bg-darklight p-8 rounded-lg shadow-service hover:shadow-xl transition-shadow duration-300 border border-border dark:border-dark_border flex flex-col h-full'
      data-aos='fade-up'
      data-aos-delay={index * 100}
      data-aos-duration='1000'
    >
      {/* Author Info (Moved to top) */}
      <div className='flex items-center mb-6'>
        {testimonial.image ? (
          <img src={testimonial.image} alt={testimonial.name} className='w-14 h-14 rounded-full object-cover mr-4 flex-shrink-0 border-2 border-primary/10' />
        ) : (
          <div className='w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4 flex-shrink-0'>
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className='text-lg font-bold text-midnight_text dark:text-white'>
            {testimonial.linkedIn ? (
              <a href={testimonial.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {testimonial.name}
              </a>
            ) : (
              testimonial.name
            )}
          </h4>
          <p className='text-sm text-grey dark:text-white/50 font-medium'>
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Rating Stars - Removed per user request */}

      {/* Comment */}
      <div className='relative flex-grow'>
        <svg
          className='w-8 h-8 text-primary opacity-20 absolute -top-2 -left-3 z-0'
          fill='currentColor'
          viewBox='0 0 24 24'>
          <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
        </svg>
        <p className='text-base text-grey dark:text-white/70 italic leading-relaxed relative z-10 pl-5'>
          "{displayComment}"
          <br />
          {isLong && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-primary hover:text-midnight_text dark:hover:text-white text-sm font-semibold transition-colors focus:outline-none"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  React.useEffect(() => {
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
    <section className='bg-white dark:bg-darkmode py-16 overflow-hidden' id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex gap-2 items-center justify-center mb-8' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            testimonials
          </span>
        </div>
        <h2
          className='text-4xl font-bold text-midnight_text text-center pb-4 dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          What People Say
        </h2>
        <div data-aos='fade-up' data-aos-delay='300' data-aos-duration='1000'>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center pb-12">
            Testimonials from colleagues, mentors, and clients
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative w-full max-w-3xl mx-auto'>
          <div className='overflow-hidden'>
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div key={index} className='w-full flex-shrink-0 px-4'>
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
