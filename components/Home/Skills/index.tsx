import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<string>('Frontend');

  // Skills with progress percentages
  const skills = [
    // 🔹 Frontend
    { name: 'HTML5', category: 'Frontend', percentage: 90 },
    { name: 'CSS3', category: 'Frontend', percentage: 88 },
    { name: 'Bootstrap', category: 'Frontend', percentage: 85 },
    { name: 'JavaScript (ES6+)', category: 'Frontend', percentage: 87 },
    { name: 'React.js', category: 'Frontend', percentage: 82 },

    // 🔹 Backend
    { name: 'Python', category: 'Backend', percentage: 88 },
    { name: 'Django', category: 'Backend', percentage: 85 },
    { name: 'Django REST Framework', category: 'Backend', percentage: 82 },
    { name: 'RESTful APIs', category: 'Backend', percentage: 85 },
    { name: 'JWT Authentication', category: 'Backend', percentage: 80 },
    { name: 'PHP', category: 'Backend', percentage: 80 },

    // 🔹 Database
    { name: 'PostgreSQL', category: 'Database', percentage: 83 },
    { name: 'MySQL', category: 'Database', percentage: 85 },

    // 🔹 AI / Computer Vision (FYP Power 💪)
    { name: 'Tesseract OCR', category: 'AI & Computer Vision', percentage: 80 },
    { name: 'OpenCV (Basic)', category: 'AI & Computer Vision', percentage: 75 },
    { name: 'Deep Learning Model Integration', category: 'AI & Computer Vision', percentage: 78 },

    // 🔹 CMS
    { name: 'WordPress', category: 'CMS', percentage: 88 },
    { name: 'ACF', category: 'CMS', percentage: 85 },
    { name: 'Custom Post Types', category: 'CMS', percentage: 82 },

    // 🔹 Tools
    { name: 'Git & GitHub', category: 'Tools', percentage: 85 },
    { name: 'Postman', category: 'Tools', percentage: 88 },
    { name: 'VS Code', category: 'Tools', percentage: 90 },

    // 🔹 Data Analysis
    { name: 'Pandas', category: 'Data Analysis', percentage: 82 },
    { name: 'NumPy', category: 'Data Analysis', percentage: 80 },
    { name: 'Matplotlib', category: 'Data Analysis', percentage: 78 },
    { name: 'Seaborn', category: 'Data Analysis', percentage: 78 },
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
  }, [activeTab]);

  const skillCategories = [
    'Frontend',
    'Backend',
    'Database',
    'AI & Computer Vision',
    'Data Analysis',
    'CMS',
    'Tools',
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section className="scroll-mt-25 py-16 md:py-24 bg-section dark:bg-darklight" id="skills">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex gap-2 items-center justify-center mb-8" data-aos="fade-up" data-aos-duration="1000">
          <span className="w-3 h-3 rounded-full bg-success"></span>
          <span className="font-medium text-midnight_text text-sm dark:text-white/50">
            my skills
          </span>
        </div>
        <h2
          className="text-4xl font-bold text-midnight_text text-center pb-12 dark:text-white"
          data-aos="fade-up"
          data-aos-duration="1000">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up" data-aos-duration="1000">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === category
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white dark:bg-darkmode text-grey dark:text-white/70 border-border dark:border-dark_border hover:border-primary hover:text-primary dark:hover:text-primary'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="bg-white dark:bg-darkmode rounded-2xl p-8 md:p-12 shadow-service border border-border dark:border-dark_border min-h-[400px]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {getSkillsByCategory(activeTab).map((skill, skillIndex) => {
              const radius = 45;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = isVisible[`skill-${skill.name}`]
                ? circumference - (skill.percentage / 100) * circumference
                : circumference;

              return (
                <div
                  key={skill.name}
                  data-skill-bar
                  id={`skill-${skill.name}`}
                  className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-section dark:hover:bg-darklight transition-colors duration-300"
                >
                  <div className="relative w-32 h-32 mb-4">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        className="stroke-primary/10"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Foreground Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        className="stroke-primary transition-all duration-1500 ease-out"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Percentage Text Centered */}
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-xl font-bold text-midnight_text dark:text-white">
                        {isVisible[`skill-${skill.name}`] ? `${skill.percentage}%` : '0%'}
                      </span>
                    </div>
                  </div>
                  {/* Skill Name */}
                  <span className="text-base font-semibold text-midnight_text dark:text-white text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
