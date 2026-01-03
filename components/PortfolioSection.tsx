import Image from 'next/image';
import { useState } from 'react';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'HAWALAY',
      subtitle: 'AI-driven Lost Identity Recovery',
      description: 'A secure mobile/web solution using React PWA, Django backend, OCR, and AI for lost identity recovery.',
      tech: ['React.js', 'Django', 'Inception-ResNetV2', 'Tesseract OCR', 'Transformer Decoder'],
      image: '/images/projects/hawaley.png',
      githubLink: '#',
      liveDemoLink: '#',
    },
    {
      title: 'SkillPort',
      subtitle: 'Resume Management System',
      description: 'Manage resumes, skills, and applications with PHP, MySQL, and Bootstrap.',
      tech: ['PHP', 'MySQL', 'Bootstrap'],
      image: '/images/projects/skillport.png',
      githubLink: '#',
      liveDemoLink: '#',
    },
    {
      title: 'Campus Network Simulation',
      subtitle: 'Network Setup Simulation',
      description: 'Step-by-step realistic network setup using Packet Tracer for learning and practical visualization.',
      tech: ['Packet Tracer'],
      image: '/images/projects/campus-network.png',
      githubLink: '#',
      liveDemoLink: '#',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my recent work and innovations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    image: string;
    githubLink: string;
    liveDemoLink: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
      {/* Image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-center p-4">
            <div>
              <svg
                className="w-16 h-16 mx-auto mb-2 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm opacity-75">Project Image</p>
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveDemoLink !== '#' && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.githubLink !== '#' && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Subtitle */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links (shown on mobile) */}
        <div className="mt-4 flex gap-3 md:hidden">
          {project.liveDemoLink !== '#' && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
            >
              Demo
            </a>
          )}
          {project.githubLink !== '#' && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

