import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const About = () => {
  return (
    <section className='bg-section dark:bg-darklight' id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-8 items-center'>
          <div
            className='md:col-span-6 col-span-12'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='relative flex items-center justify-center'>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-darkmode">
                <Image
                  src={getImgPath('/images/Updated-profile-pic.png')}
                  alt='Babar Ali - About'
                  width={320}
                  height={320}
                  quality={100}
                  className='object-cover'
                  style={{ position: 'absolute', width: '100%', inset: '0px', color: 'transparent' }}
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement?.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400">About Image</div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className='md:col-span-6 col-span-12'
            data-aos='fade-left'
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
            <p className='text-base font-normal text-grey dark:text-white/50 mb-6 leading-relaxed'>
              I am Babar Ali, a passionate Full-Stack Developer and AI enthusiast. I have hands-on experience with React, Next.js, Django, MySQL, and AI integration. I enjoy building smart, user-friendly applications and solving complex problems with technology.
            </p>
            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-midnight_text dark:text-white mb-1'>Education</h3>
                  <p className='text-base text-grey dark:text-white/50'>BS in Computer Science, currently in 7th semester</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-midnight_text dark:text-white mb-1'>Projects</h3>
                  <p className='text-base text-grey dark:text-white/50'>Developed <span className='font-semibold'>HAWALAY</span> — an AI-driven lost identity recovery system</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-midnight_text dark:text-white mb-2'>Skills</h3>
                  <div className='flex flex-wrap gap-2'>
                    {['React.js', 'JavaScript (ES6+)', 'Python', 'Django', 'PHP', 'MySQL', 'WordPress', 'Data Science'].map((skill) => (
                      <span key={skill} className='px-3 py-1 bg-primary/10 text-primary text-sm rounded-full'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

