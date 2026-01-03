import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'LinkedIn' },
    { name: 'GitHub', href: '#', icon: 'GitHub' },
    { name: 'Twitter', href: '#', icon: 'Twitter' },
    { name: 'Email', href: '#', icon: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              About
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {/* About content placeholder */}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

