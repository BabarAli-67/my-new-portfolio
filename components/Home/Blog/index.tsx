import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

interface BlogProps {
  showViewMore?: boolean;
}

const Blog = ({ showViewMore = true }: BlogProps) => {
  const blogPosts = [
    {
      title: 'Understanding AI Integration in Web Apps',
      excerpt: 'Learn how to integrate AI features like NLP and OCR into modern web applications.',
      image: '/images/blog/ai-webapps.png',
      slug: 'understanding-ai-integration-in-web-apps',
      date: 'January 15, 2024',
    },
    {
      title: 'Building a Full-Stack Resume Management System',
      excerpt: 'Step-by-step guide to developing SkillPort using PHP, MySQL, and Bootstrap.',
      image: '/images/blog/skillport.png',
      slug: 'building-full-stack-resume-management-system',
      date: 'December 10, 2023',
    },
    {
      title: 'Progressive Web Apps: The Future of Mobile Development',
      excerpt: 'Exploring the benefits and implementation of PWAs for cross-platform mobile experiences.',
      image: '/images/blog/pwa.png',
      slug: 'progressive-web-apps-future',
      date: 'November 22, 2023',
    },
  ]

  return (
    <section
      className='flex flex-wrap justify-center dark:bg-darkmode'
      id='blog'>
      <div className='container mx-auto max-w-6xl'>
        <div className='flex items-baseline justify-between flex-wrap'>
          <h2
            className='sm:mb-11 mb-3 text-4xl font-bold text-midnight_text dark:text-white'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            Latest blog & news
          </h2>
          {showViewMore && (
            <Link
              href='/blog'
              className='flex items-center gap-3 text-base text-midnight_text dark:text-white dark:hover:text-primary font-medium hover:text-primary sm:pb-0 pb-3'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'>
              View More
              <span>
                <Icon icon='solar:arrow-right-outline' width='30' height='30' />
              </span>
            </Link>
          )}
        </div>
        <div className='grid grid-cols-12 gap-7'>
          {blogPosts.map((blog, i) => (
            <div
              key={i}
              className='w-full md:col-span-4 sm:col-span-6 col-span-12'
              data-aos='fade-up'
              data-aos-delay={`${i * 200}`}
              data-aos-duration='1000'>
              <div className='bg-white dark:bg-darkmode rounded-lg overflow-hidden shadow-service hover:shadow-xl transition-shadow duration-300 border border-border dark:border-dark_border'>
                <div className='relative w-full h-48 overflow-hidden'>
                  <Image
                    src={getImgPath(blog.image)}
                    alt={blog.title}
                    fill
                    className='object-cover hover:scale-110 transition-transform duration-500'
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">Blog Image</div>';
                      }
                    }}
                  />
                </div>
                <div className='p-6'>
                  <p className='text-sm text-grey dark:text-white/50 mb-2'>{blog.date}</p>
                  <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3 hover:text-primary transition-colors'>
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p className='text-base text-grey dark:text-white/50 line-clamp-3'>{blog.excerpt}</p>
                  <Link href={`/blog/${blog.slug}`} className='text-primary hover:text-blue-700 font-medium mt-4 inline-block'>
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

