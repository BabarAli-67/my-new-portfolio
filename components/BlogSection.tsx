import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogSection() {
  const blogPosts = [
    {
      title: 'Understanding AI Integration in Web Apps',
      description: 'Learn how to integrate AI features like NLP and OCR into modern web applications.',
      image: '/images/blog/ai-webapps.png',
      slug: 'understanding-ai-integration-in-web-apps',
      date: 'January 15, 2024',
      category: 'AI & Development',
    },
    {
      title: 'Building a Full-Stack Resume Management System',
      description: 'Step-by-step guide to developing SkillPort using PHP, MySQL, and Bootstrap.',
      image: '/images/blog/skillport.png',
      slug: 'building-full-stack-resume-management-system',
      date: 'December 10, 2023',
      category: 'Web Development',
    },
    {
      title: 'Progressive Web Apps: The Future of Mobile Development',
      description: 'Exploring the benefits and implementation of PWAs for cross-platform mobile experiences.',
      image: '/images/blog/pwa.png',
      slug: 'progressive-web-apps-future',
      date: 'November 22, 2023',
      category: 'Mobile Development',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge, experiences, and insights from my development journey
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

interface BlogPostCardProps {
  post: {
    title: string;
    description: string;
    image: string;
    slug: string;
    date: string;
    category: string;
  };
}

function BlogPostCard({ post }: BlogPostCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
      {/* Image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
        {!imageError ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-center p-4">
            <div>
              <svg
                className="w-16 h-16 mx-auto mb-2 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm opacity-75">Blog Image</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3">
          {post.description}
        </p>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

