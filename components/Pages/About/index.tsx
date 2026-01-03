import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImgPath } from '@/utils/image';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  // Skills with progress percentages
  const skills = [
    { name: 'HTML', category: 'Frontend', percentage: 90 },
    { name: 'CSS', category: 'Frontend', percentage: 88 },
    { name: 'Bootstrap', category: 'Frontend', percentage: 85 },
    { name: 'JavaScript (ES6+)', category: 'Frontend', percentage: 87 },
    { name: 'React.js', category: 'Frontend', percentage: 85 },
    { name: 'PHP', category: 'Backend', percentage: 82 },
    { name: 'Python', category: 'Backend', percentage: 88 },
    { name: 'Django', category: 'Backend', percentage: 83 },
    { name: 'WordPress', category: 'CMS', percentage: 85 },
    { name: 'Pandas', category: 'Data & Analytics', percentage: 80 },
    { name: 'Data Science', category: 'Data & Analytics', percentage: 82 },
    { name: 'Data Visualization', category: 'Data & Analytics', percentage: 80 },
    { name: 'MySQL', category: 'Database', percentage: 85 },
    { name: 'English', category: 'Languages', percentage: 90 },
    { name: 'Urdu', category: 'Languages', percentage: 95 },
  ];

  // Work Experience
  const workExperience = [
    {
      company: 'Gillan eSolutions',
      role: 'Web Developer (Django & WordPress)',
      website: 'https://www.gillanesolutions.com/',
      duration: 'September 2025 – Present',
      logo: '/images/companies/gillan-esolutions-logo.jpeg',
      achievement: null,
      description:
        'Currently working as a Web Developer, gaining hands-on experience in full-stack web development using Django and WordPress. Responsibilities include developing and maintaining dynamic web applications with Django, creating custom WordPress themes and converting static HTML designs into fully functional WordPress websites, implementing responsive user-friendly layouts, collaborating on projects, and optimizing performance.',
    },
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

  // Intersection Observer for progress bar animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Use setTimeout to ensure DOM is ready
    const timer = setTimeout(() => {
      const skillElements = document.querySelectorAll('[data-skill-bar]');
      skillElements.forEach((el) => {
        if (el.id) {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const skillElements = document.querySelectorAll('[data-skill-bar]');
      skillElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const skillCategories = [
    'Frontend',
    'Backend',
    'CMS',
    'Data & Analytics',
    'Database',
    'Languages',
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-darklight">
      {/* Banner Section */}
      <section className="bg-section dark:bg-darklight py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl font-bold text-midnight_text dark:text-white mb-4">
              Who I Am
            </h1>
            <p className="text-lg md:text-xl text-grey dark:text-white/70 max-w-3xl mx-auto">
              Learn more about me, my background, and what drives me in my professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-darkmode">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="flex gap-2 items-center mb-4">
                <span className="w-3 h-3 rounded-full bg-success"></span>
                <span className="font-medium text-midnight_text text-sm dark:text-white/50">
                  About Me
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4">
                Babar Ali
              </h2>
              <p className="text-xl font-semibold text-primary dark:text-primary mb-6">
                Full-Stack Developer & AI Enthusiast
              </p>
              <p className="text-base font-normal text-grey dark:text-white/70 mb-8 leading-relaxed">
                I am Babar Ali, a passionate Full-Stack Developer and AI enthusiast. I specialize in building modern, responsive web applications and AI-driven solutions using technologies like React.js, Django, and MySQL. I also have experience with WordPress custom themes and data analytics. I enjoy solving complex problems through technology and creating applications that are both user-friendly and intelligent. My work is driven by curiosity, innovation, and a commitment to delivering high-quality solutions.
              </p>

              <div className="space-y-4 mb-8">
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

              {/* Social Links */}
              <div className="flex items-center gap-4 mb-8">
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

              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download="Babar-Ali-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
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
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="flex items-center justify-center">
              <div className="relative w-full max-w-md flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-darkmode">
                  <Image
                    src={getImgPath('/images/profile-pic.jpeg')}
                    alt="Babar Ali - Full-Stack Developer"
                    width={320}
                    height={320}
                    quality={100}
                    className="object-cover"
                    style={{ position: 'absolute', width: '100%', inset: '0px', color: 'transparent' }}
                    priority
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement?.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400">About Image</div>';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-section dark:bg-darklight">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex gap-2 items-center justify-center mb-8" data-aos="fade-up" data-aos-duration="1000">
            <span className="w-3 h-3 rounded-full bg-success"></span>
            <span className="font-medium text-midnight_text text-sm dark:text-white/50">
              Skills & Expertise
            </span>
          </div>
          <h2
            className="text-4xl font-bold text-midnight_text text-center pb-12 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000">
            Technical Skills
          </h2>

          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = getSkillsByCategory(category);
              if (categorySkills.length === 0) return null;

              return (
                <div
                  key={category}
                  className="bg-white dark:bg-darkmode rounded-lg p-6 md:p-8 shadow-service hover:shadow-xl transition-shadow duration-300 border border-border dark:border-dark_border"
                  data-aos="fade-up"
                  data-aos-delay={categoryIndex * 100}
                  data-aos-duration="1000">
                  <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-6 pb-3 border-b border-border dark:border-dark_border">
                    {category}
                  </h3>
                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skill.name} data-skill-bar id={`skill-${skill.name}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-base font-medium text-midnight_text dark:text-white">
                            {skill.name}
                          </span>
                          <span className="text-base font-semibold text-primary">
                            {isVisible[`skill-${skill.name}`] ? `${skill.percentage}%` : '0%'}
                          </span>
                        </div>
                        <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible[`skill-${skill.name}`] ? `${skill.percentage}%` : '0%',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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

      {/* Call-to-Action Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-darkmode">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            className="bg-section dark:bg-darklight rounded-lg p-8 md:p-12 text-center border border-border dark:border-dark_border"
            data-aos="fade-up"
            data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4">
              Let&apos;s Work Together!
            </h2>
            <p className="text-lg text-grey dark:text-white/70 max-w-2xl mx-auto mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

