export default function SkillsSection() {
  const skills = [
    { name: 'React.js', percentage: 90 },
    { name: 'Next.js', percentage: 85 },
    { name: 'Django', percentage: 80 },
    { name: 'Python', percentage: 85 },
    { name: 'MySQL', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'AI / NLP / OCR', percentage: 75 },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <SkillBar name={skill.name} percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  name: string;
  percentage: number;
}

function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      {/* Skill Name and Percentage */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </span>
        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
          {percentage}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        {/* Progress Bar */}
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

