'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Angular', level: 85, icon: '🅰️' },
    { name: 'TypeScript', level: 88, icon: '📘' },
    { name: 'JavaScript', level: 92, icon: '💛' },
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'Tailwind CSS', level: 87, icon: '💨' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'Redux', level: 80, icon: '🔄' },
    { name: 'Git', level: 88, icon: '🌿' },
    { name: 'REST APIs', level: 90, icon: '🔌' },
    { name: 'RxJS', level: 82, icon: '🔀' },
    { name: 'Webpack', level: 78, icon: '📦' },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
                <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
