import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const About = () => {
  return (
    <section className='bg-section dark:bg-darklight' id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Content block - centered */}
        <div
          className='col-span-12 md:col-span-8 md:col-start-3 flex flex-col items-center text-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              about me
            </span>
          </div>
          <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text pt-7 pb-6 dark:text-white'>
            About Me
          </h2>
          <p className='text-base font-normal text-grey dark:text-white/50 mb-10 leading-relaxed max-w-3xl'>
            Full-Stack Developer with hands-on experience in Django, WordPress, REST APIs, and database design. I have built scalable backend systems, dynamic CMS-driven websites, and I am currently developing an AI-powered Final Year Project focused on solving real-world problems through intelligent and secure web applications.
          </p>

          {/* Cards for Education, Projects, Skills */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left'>
            {/* Education Card */}
            <div className='bg-white dark:bg-darkmode border border-border dark:border-dark_border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                </svg>
              </div>
              <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>Education</h3>
              <p className='text-sm text-grey dark:text-white/70'>BS Computer Science — UMT<br />Final Year (8th Semester) • Expected 2026<br />Core Areas: Artificial Intelligence, Machine Learning, Backend Development, Web Development</p>
            </div>

            {/* Projects Card */}
            <div className='bg-white dark:bg-darkmode border border-border dark:border-dark_border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                </svg>
              </div>
              <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>Final Year Project:</h3>
              <p className='text-sm text-grey dark:text-white/70'><span className='font-semibold text-primary/80'>HAWALAY</span><br />Currently developing an AI-driven secure lost identity recovery system using Django, React, PWA, OCR, and deep learning.</p>
            </div>

            {/* Skills Card */}
            <div className='bg-white dark:bg-darkmode border border-border dark:border-dark_border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-1'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                </svg>
              </div>
              <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>Top Skills</h3>
              <div className='flex flex-wrap gap-2 justify-center sm:justify-start'>
                {['Django', 'REST API Development', 'WordPress Development', 'MySQL', 'React.js'].map((skill) => (
                  <span key={skill} className='px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About

