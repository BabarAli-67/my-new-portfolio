export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Ali Raza',
      role: 'Professor & Project Supervisor',
      comment: 'Babar is a highly skilled developer with deep understanding of AI integration.',
      rating: 5,
    },
    {
      name: 'Prof. Sana',
      role: 'Senior Lecturer',
      comment: 'His projects demonstrate creativity, problem-solving, and attention to detail.',
      rating: 5,
    },
    {
      name: 'Muhammad Ahmed',
      role: 'Tech Lead',
      comment: 'Working with Babar was a great experience. He delivers high-quality solutions and is always willing to learn and adapt.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
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
    rating: number;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg
          className="w-10 h-10 text-blue-500 dark:text-blue-400 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Comment */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
        "{testimonial.comment}"
      </p>

      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Author Info */}
      <div className="flex items-center">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

