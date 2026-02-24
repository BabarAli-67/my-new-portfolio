import React from 'react'
import { Icon } from '@iconify/react'

const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      description: 'Building scalable full-stack applications with Django, React, and relational databases, focusing on secure authentication and REST API integration.',
      icon: 'mdi:code-tags',
    },
    {
      title: 'WordPress Development',
      description: 'Converting static designs into dynamic, fully CMS-managed WordPress websites using ACF, Custom Post Types, and custom themes.',
      icon: 'mdi:wordpress',
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Developing intelligent systems with OCR, deep learning, and AI-based data processing as part of real-world applications.',
      icon: 'mdi:brain',
    },
    {
      title: 'REST API & Backend Systems',
      description: 'Designing robust backend architectures, handling complex databases, and implementing secure authorization workflows.',
      icon: 'mdi:api',
    },
  ]

  return (
    <section className='bg-section dark:bg-darklight' id='services'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            What I Do
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pb-12 dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Services
        </h2>
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
          {services.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'
              data-aos-offset='300'
              className='col-span-12 md:col-span-6 bg-white flex flex-col items-start text-left py-10 px-8 shadow-service rounded-md gap-4 dark:bg-darkmode transition-transform hover:-translate-y-2'>
              <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-2'>
                <Icon
                  icon={item.icon}
                  width={34}
                  height={34}
                  className='text-primary'
                />
              </div>
              <h3 className='text-2xl font-bold text-midnight_text dark:text-white'>
                {item.title}
              </h3>
              <p className='dark:text-white/70 text-base font-normal text-grey leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

