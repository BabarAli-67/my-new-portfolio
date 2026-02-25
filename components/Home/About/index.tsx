import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const About = () => {
  // Work Experience
  const workExperience = [
    {
      company: 'Gillan eSolutions',
      role: 'Web Development Intern',
      website: 'https://www.gillanesolutions.com/',
      duration: 'September 2025 – January 2026',
      logo: '/images/companies/gillan-esolutions-logo.jpeg',
      achievement: null,
      description:
        'Worked as a Web Development Intern where I learned PHP and converted static HTML templates into dynamic WordPress websites using ACF, Custom Post Types, taxonomies, and CMS-based content management. Ensured responsive layouts and editable structures while following structured workflows and real project lifecycles. Although my primary work was in WordPress, I also gained exposure to Django by learning from colleagues working on Django-based applications there.',
    },
    {
      company: 'adscale',
      role: 'Django Developer Intern',
      website: 'https://adscale.com/',
      duration: 'July 2025 – January 2026',
      logo: '/images/companies/adscale-logo.svg',
      achievement: null,
      description:
        'Responsible for Python Django backend development, specializing in REST API creation and database handling. I implemented secure Authentication & Authorization protocols and ensured seamless backend integration with frontend systems. Demonstrated strong work ethics while delivering high-performance solutions. Recognized as a reliable professional, I contributed to technical objectives through dedicated problem-solving and expertise during my tenure at Adscale.'
    }
  ];

  // Education
  const education = [
    {
      institute: 'UMT - University of Management and Technology',
      degree: 'BS in Computer Science',
      duration: 'Nov 2022 - Present',
      logo: '/images/education/UMT-Logo.jpg',
      description:
        'Pursuing a B.Sc. in Computer Science with hands-on experience in programming, full-stack web development, databases, and software engineering. Actively engaged in practical projects and applying modern technologies like Python, Django, React.js, and MySQL.',
    },
    {
      institute: 'Punjab Group of Colleges, Lahore',
      degree: 'F.Sc. Pre-Engineering',
      duration: 'August 2020 - May 2022',
      logo: '/images/education/PGC-logo.png',
      description:
        'Completed F.Sc. Pre-Engineering from Punjab Group of Colleges, Lahore under the Board of Intermediate & Secondary Education, Punjab. During my intermediate studies, I built a strong foundation in mathematics, physics, and analytical problem-solving, which has prepared me for advanced studies in computer science and practical application of technical concepts.',
    },
    {
      institute: 'The FAST School and FAST Science Academy, Lahore',
      degree: 'Matriculation in Biology',
      duration: 'April 2018 – March 2020',
      logo: '/images/education/FAST-logo.jpg',
      description:
        'Successfully completed Matriculation, gaining a solid academic foundation and strengthening analytical skills, discipline, and a passion for science, which prepared me for further studies in pre-engineering and computer science.',
    },
  ];

  return (
    <>
      <section className='bg-section dark:bg-darklight' id='about'>
        <div className='container mx-auto max-w-6xl px-4'>
          {/* Content block - centered */}
          <div
            className='col-span-12 md:col-span-8 md:col-start-3 flex flex-col items-center text-center'
            data-aos='fade-up'
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
            <p className='text-base font-normal text-grey dark:text-white/50 mb-8 leading-relaxed max-w-3xl'>
              Full-Stack Developer with hands-on experience in Django, WordPress, REST APIs, and database design. I have built scalable backend systems, dynamic CMS-driven websites, and I am currently developing an AI-powered Final Year Project focused on solving real-world problems through intelligent and secure web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 w-full max-w-3xl">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:babarali36912@gmail.com"
                  className="text-base text-grey dark:text-white/70 hover:text-primary transition-colors">
                  babarali36912@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+923090123027"
                  className="text-base text-grey dark:text-white/70 hover:text-primary transition-colors">
                  +92 309 0123027
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-base text-grey dark:text-white/70">Lahore, Pakistan</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-10">
              <a
                href="https://www.facebook.com/profile.php?id=100054193099072"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors"
                aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/babar-ali-895301259/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors"
                aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/BabarAli-67"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors"
                aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors"
                aria-label="Twitter/X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            <a
              href="/resume.pdf"
              download="Babar-Ali-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mb-12">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>

            {/* Cards for Education, Projects, Skills */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left'>
              {/* Education Card */}
              <div className='bg-white dark:bg-darkmode border border-border dark:border-dark_border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>Education</h3>
                <p className='text-sm text-grey dark:text-white/70'>BS Computer Science — UMT<br />Final Year (8th Semester) • Expected 2026<br />Core Areas: Artificial Intelligence, Machine Learning, Backend Development, Web Development</p>
              </div>

              {/* Projects Card */}
              <div className='bg-white dark:bg-darkmode border border-border dark:border-dark_border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>Final Year Project:</h3>
                <p className='text-sm text-grey dark:text-white/70'><span className='font-semibold text-primary/80'>HAWALAY</span><br />Currently developing an AI-driven secure lost identity recovery system using Django, React, PWA, OCR, and deep learning.</p>
              </div>

              {/* Skills Card */}
              <div className='bg-white dark:bg-darkmode border border-border dark:border-dark_border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-1'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </div>
                <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>Top Skills</h3>
                <div className='flex flex-wrap gap-2 justify-center sm:justify-start'>
                  {['Django', 'REST API Development', 'WordPress Development', 'MySQL', 'React.js'].map((skill) => (
                    <span key={skill} className='px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      {workExperience.length > 0 && (
        <section className="py-16 md:py-24 bg-white dark:bg-darkmode">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex gap-2 items-center justify-center mb-8" data-aos="fade-up" data-aos-duration="1000">
              <span className="w-3 h-3 rounded-full bg-success"></span>
              <span className="font-medium text-midnight_text text-sm dark:text-white/50">
                Experience
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-midnight_text text-center pb-12 dark:text-white"
              data-aos="fade-up"
              data-aos-duration="1000">
              Work Experience
            </h2>

            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <article
                  key={index}
                  className="bg-section dark:bg-darklight rounded-lg p-6 md:p-8 shadow-service hover:shadow-xl transition-shadow duration-300 border border-border dark:border-dark_border"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1000">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {work.logo && (
                        <div className="flex-shrink-0 w-16 h-16 relative">
                          <Image
                            src={getImgPath(work.logo)}
                            alt={work.company}
                            width={64}
                            height={64}
                            className="object-contain rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-2">
                          {work.role}
                        </h3>
                        <a
                          href={work.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-primary hover:text-blue-700 font-medium mb-2 inline-block">
                          {work.company}
                        </a>
                        <p className="text-base text-grey dark:text-white/50 mb-3">{work.duration}</p>
                        {work.description && (
                          <p className="text-base text-grey dark:text-white/70 leading-relaxed">
                            {work.description}
                          </p>
                        )}
                      </div>
                    </div>
                    {work.achievement && (
                      <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {work.achievement}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      <section className="py-16 md:py-24 bg-section dark:bg-darklight">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex gap-2 items-center justify-center mb-8" data-aos="fade-up" data-aos-duration="1000">
            <span className="w-3 h-3 rounded-full bg-success"></span>
            <span className="font-medium text-midnight_text text-sm dark:text-white/50">
              Education
            </span>
          </div>
          <h2
            className="text-4xl font-bold text-midnight_text text-center pb-12 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000">
            Academic Background
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <article
                key={index}
                className="bg-white dark:bg-darkmode rounded-lg p-6 md:p-8 shadow-service hover:shadow-xl transition-shadow duration-300 border border-border dark:border-dark_border"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000">
                <div className="flex items-start gap-4 mb-4">
                  {edu.logo && (
                    <div className="flex-shrink-0 w-16 h-16 relative bg-white dark:bg-darklight rounded-lg p-2 border border-border dark:border-dark_border overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={getImgPath(edu.logo)}
                          alt={edu.institute}
                          fill
                          className="object-contain"
                          unoptimized
                          quality={100}
                          sizes="64px"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement?.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-xs">Logo</div>';
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-midnight_text dark:text-white mb-1">
                      {edu.degree.includes('BS') || edu.degree.includes('Bachelor')
                        ? 'Bachelor'
                        : edu.degree.includes('F.Sc') || edu.degree.includes('Pre-Engineering')
                          ? 'Intermediate'
                          : 'Matriculation'}
                    </h5>
                    <p className="text-base text-grey dark:text-white/70">{edu.institute}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                    {edu.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-section dark:bg-darklight text-midnight_text dark:text-white rounded-full text-sm font-medium">
                    {edu.degree}
                  </span>
                </div>

                {edu.description && (
                  <p className="text-base text-grey dark:text-white/70 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About

