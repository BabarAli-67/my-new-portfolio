import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

interface PortfolioCardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  href?: string;
  className?: string;
}

export default function PortfolioCard({
  title,
  description,
  image,
  imageAlt = 'Project image',
  tags = [],
  href,
  className = '',
}: PortfolioCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
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
        {/* Title */}
        {title && (
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        {href && (
          <Button
            href={href}
            variant="outline"
            size="sm"
          >
            View Project
          </Button>
        )}
      </div>
    </div>
  );
}

