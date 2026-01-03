import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title?: string;
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  date?: string;
  author?: string;
  category?: string;
  href?: string;
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  imageAlt = 'Blog post image',
  date,
  author,
  category,
  href,
  className = '',
}: BlogCardProps) {
  return (
    <article className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Image */}
      {image && (
        <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
          {/* Placeholder for image - replace with actual Image component when image prop is provided */}
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
            {image ? 'Image Placeholder' : 'No Image'}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        {category && (
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full mb-3">
            {category}
          </span>
        )}

        {/* Title */}
        {title && (
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {href ? (
              <Link href={href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
        )}

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            {date && (
              <span>{date}</span>
            )}
            {author && (
              <span>By {author}</span>
            )}
          </div>
          {href && (
            <Link
              href={href}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Read More →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

