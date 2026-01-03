import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'React.js'],
    },
    {
      category: 'Backend',
      skills: ['PHP', 'Python', 'Django (Web Framework)'],
    },
    {
      category: 'CMS',
      skills: ['WordPress (Custom Theme Development, Static HTML → WordPress Conversion)'],
    },
    {
      category: 'Data',
      skills: ['Pandas', 'Data Science', 'Data Visualization'],
    },
    {
      category: 'Databases',
      skills: ['MySQL'],
    },
    {
      category: 'Languages',
      skills: ['English', 'Urdu'],
    },
  ]

  return (
    <section
      className='scroll-mt-25 dark:bg-darklight bg-section py-16 md:py-24'
      id='skills'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            my skills
          </span>
        </div>
        <h2
          className='text-4xl font-bold text-midnight_text text-center pb-12 dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Skills
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className='bg-white dark:bg-darkmode rounded-lg p-6 shadow-service hover:shadow-xl transition-all duration-300 border border-border dark:border-dark_border'
              data-aos='fade-up'
              data-aos-delay={categoryIndex * 100}
              data-aos-duration='1000'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-4 pb-3 border-b border-border dark:border-dark_border'>
                {category.category}
              </h3>
              <ul className='flex flex-wrap gap-3'>
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className='px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium rounded-full transition-colors duration-200 cursor-default'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
