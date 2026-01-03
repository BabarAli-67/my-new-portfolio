import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getImgPath } from '@/utils/image'

const Portfolio = () => {
  const projects = [
    {
      title: 'HAWALAY',
      info: 'AI-driven Lost Identity Recovery',
      image: '/images/projects/hawaley.png',
      slug: 'hawaley',
    },
    {
      title: 'SkillPort',
      info: 'Resume Management System',
      image: '/images/projects/skillport.png',
      slug: 'skillport',
    },
    {
      title: 'Campus Network Simulation',
      info: 'Network Setup Simulation',
      image: '/images/projects/campus-network.png',
      slug: 'campus-network',
    },
  ]

  return (
    <section id='portfolio' className='dark:bg-darkmode'>
      <div className='text-center lg:px-0 px-8'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Portfolio
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Explore my portfolio showcase
        </h2>
        <div className='pb-14 inline-flex'>
          <p className='text-base font-normal text-grey max-w-29 dark:text-white/50'>
            Dive into a curated collection of my finest work, showcasing expertise across various industries.
          </p>
        </div>
      </div>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
          {projects.map((item, index) => (
            <Link key={index} href={`/portfolio/${item.slug}`}>
              <div
                className={`group ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                data-aos='fade-up'
                data-aos-delay={index * 100}
                data-aos-duration='1000'>
                <div className='relative overflow-hidden rounded-lg mb-4'>
                  <Image
                    src={getImgPath(item.image)}
                    alt={item.title}
                    width={1200}
                    height={800}
                    style={{ width: '100%', height: 'auto' }}
                    className='group-hover:scale-110 group-hover:cursor-pointer transition-all duration-500'
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">Project Image</div>';
                      }
                    }}
                  />
                </div>
                <h4 className='pb-1 pt-4 group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold dark:text-white'>
                  {item.title}
                </h4>
                <p className='text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white/50'>
                  {item.info}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

