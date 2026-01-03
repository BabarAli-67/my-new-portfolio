import React from 'react'

const Testimonials = () => {
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
  ]

  return (
    <section className='bg-white dark:bg-darkmode' id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex gap-2 items-center justify-center mb-8' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            testimonials
          </span>
        </div>
        <h2
          className='text-4xl font-bold text-midnight_text text-center pb-12 dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          What People Say
        </h2>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-section dark:bg-darklight p-8 rounded-lg shadow-service hover:shadow-xl transition-shadow duration-300 border border-border dark:border-dark_border'
              data-aos='fade-up'
              data-aos-delay={index * 100}
              data-aos-duration='1000'>
              <div className='mb-4'>
                <svg
                  className='w-10 h-10 text-primary opacity-50'
                  fill='currentColor'
                  viewBox='0 0 24 24'>
                  <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                </svg>
              </div>
              <p className='text-base text-grey dark:text-white/50 mb-6 italic leading-relaxed'>
                "{testimonial.comment}"
              </p>
              <div className='flex items-center gap-2 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className='w-5 h-5 text-yellow-400 fill-current'
                    viewBox='0 0 20 20'>
                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                  </svg>
                ))}
              </div>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-4'>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-midnight_text dark:text-white'>
                    {testimonial.name}
                  </h4>
                  <p className='text-sm text-grey dark:text-white/50'>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

