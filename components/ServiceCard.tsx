import { ReactNode } from 'react';

interface ServiceCardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  features?: string[];
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  features = [],
  className = '',
}: ServiceCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Icon */}
      {icon && (
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
          <div className="text-blue-600 dark:text-blue-400 text-2xl">
            {icon}
          </div>
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
      )}

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
              <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

