import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left" data-aos="fade-right">
            {/* Greeting/Introduction */}
            <p className="text-blue-600 dark:text-blue-400 text-lg font-semibold mb-2">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Babar Ali
            </h1>

            {/* Role/Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack Developer & AI Enthusiast
            </h2>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Building modern web applications and AI-driven solutions with React.js and Django.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last" data-aos="fade-left">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-gray-700 dark:to-gray-600">
                {!imageError ? (
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero.png"
                      alt="Babar Ali - Full-Stack Developer"
                      fill
                      className="object-cover"
                      priority
                      onError={() => setImageError(true)}
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                    <div>
                      <p className="text-2xl font-bold mb-2">Professional Photo</p>
                      <p className="text-sm opacity-80">Place your hero image at<br />public/images/hero.png</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600 dark:bg-blue-800 rounded-2xl -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

