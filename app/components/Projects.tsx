'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard built with React and Redux.',
      technologies: ['React', 'Redux', 'Node.js', 'Stripe', 'MongoDB'],
      image: '🛒',
      link: '#',
    },
    {
      title: 'Project Management Tool',
      description: 'Angular-based project management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      technologies: ['Angular', 'RxJS', 'Firebase', 'Material UI'],
      image: '📋',
      link: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with interactive charts, data visualization, and export functionality.',
      technologies: ['React', 'Chart.js', 'TypeScript', 'Tailwind CSS'],
      image: '📊',
      link: '#',
    },
    {
      title: 'Real Estate Listings',
      description: 'Property listing platform with advanced search filters, map integration, and virtual tour capabilities.',
      technologies: ['Next.js', 'React', 'Google Maps API', 'PostgreSQL'],
      image: '🏠',
      link: '#',
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile-responsive fitness tracking application with workout plans, progress tracking, and nutrition monitoring.',
      technologies: ['React', 'Redux', 'Chart.js', 'REST API'],
      image: '💪',
      link: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Clean and intuitive weather application with 7-day forecasts, location search, and interactive weather maps.',
      technologies: ['Angular', 'OpenWeather API', 'RxJS', 'SCSS'],
      image: '🌤️',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-primary transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-8xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
