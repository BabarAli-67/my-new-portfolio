import React, { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkmode border-t border-dark_border">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Brand & CTA Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white hover:text-primary transition-colors duration-200">
                MyPortfolio
              </span>
            </Link>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Let&apos;s work together to bring your ideas to life. Get in touch to discuss your next project.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </Link>
          </div>


          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-white/50 text-sm mb-1">Email</p>
                <a
                  href="mailto:babarali36912@gmail.com"
                  className="text-white hover:text-primary transition-colors break-all">
                  babarali36912@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/50 text-sm mb-1">Phone</p>
                <a
                  href="tel:+923090123027"
                  className="text-white hover:text-primary transition-colors">
                  +92 309 0123027
                </a>
              </div>
            </div>
            <div>
              <p className="text-white/50 text-sm mb-3">Follow Me</p>
              <ul className="flex items-center gap-3">
                <li>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100054193099072"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-white/70 hover:text-primary transition-colors">
                    <svg width="20" height="20" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_343)">
                        <path d="M22.9128 0.769043H2.06165C1.34768 0.769472 0.7689 1.34854 0.769043 2.0628V22.9139C0.769472 23.6279 1.34854 24.2067 2.0628 24.2065H13.2889V15.1428H10.2448V11.5952H13.2889V8.98433C13.2889 5.95665 15.1372 4.3087 17.838 4.3087C19.1317 4.3087 20.2433 4.40512 20.5673 4.44818V7.61261H18.7049C17.2355 7.61261 16.951 8.31084 16.951 9.33566V11.5952H20.4643L20.0066 15.1428H16.951V24.2065H22.9128C23.6272 24.2067 24.2064 23.6278 24.2065 22.9134C24.2065 22.9132 24.2065 22.9131 24.2065 22.9128V2.06165C24.2063 1.34768 23.627 0.7689 22.9128 0.769043Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_343">
                          <rect width="25" height="25" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/babar-ali-895301259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-white/70 hover:text-primary transition-colors">
                    <svg width="20" height="20" viewBox="0 0 22 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_347)">
                        <path d="M20.4133 0H1.58665C0.710327 0 0 0.742615 0 1.65878V21.3412C0 22.2574 0.710327 23 1.58665 23H20.4133C21.2897 23 22 22.2574 22 21.3412V1.65878C22 0.742615 21.2897 0 20.4133 0ZM7.80353 17.3848H5.12453V8.95858H7.80353V17.3848ZM6.46411 7.80798H6.44666C5.54767 7.80798 4.96625 7.161 4.96625 6.35241C4.96625 5.52557 5.56546 4.89648 6.4819 4.89648C7.39835 4.89648 7.96231 5.52557 7.97977 6.35241C7.97977 7.161 7.39835 7.80798 6.46411 7.80798ZM17.4634 17.3848H14.7848V12.877C14.7848 11.7441 14.3969 10.9715 13.4276 10.9715C12.6875 10.9715 12.2468 11.4926 12.0531 11.9957C11.9822 12.1758 11.965 12.4274 11.965 12.6792V17.3848H9.28612C9.28612 17.3848 9.3212 9.7491 9.28612 8.95858H11.965V10.1516C12.321 9.57748 12.9579 8.76082 14.3793 8.76082C16.1418 8.76082 17.4634 9.96511 17.4634 12.5532V17.3848Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_347">
                          <rect width="22" height="23" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/BabarAli-67"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-white/70 hover:text-primary transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark_border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Babar Ali. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
