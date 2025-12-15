'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: [
        'Led development of customer-facing React applications serving 100K+ users',
        'Implemented state management using Redux and Context API',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization techniques',
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Next.js'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      period: '2022 - 2023',
      description: [
        'Built and maintained Angular applications for enterprise clients',
        'Collaborated with UX designers to implement pixel-perfect designs',
        'Integrated RESTful APIs and handled data management with RxJS',
        'Participated in Agile development process and daily standups',
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    },
    {
      title: 'Junior Frontend Developer',
      company: 'StartUp Labs',
      period: '2021 - 2022',
      description: [
        'Developed responsive web applications using React and modern CSS',
        'Worked on bug fixes and feature implementations',
        'Participated in code reviews and learned best practices',
        'Contributed to component library development',
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-primary transition-all"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{exp.title}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 bg-slate-700 px-4 py-2 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
