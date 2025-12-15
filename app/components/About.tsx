'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-9xl font-bold">
                  AJ
                </div>
              </motion.div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                I'm a passionate Frontend Developer with 3 years of experience building
                modern, responsive, and user-friendly web applications. My expertise lies
                in React and Angular, creating seamless user experiences.
              </p>
              <p className="text-lg text-gray-300">
                I love turning complex problems into simple, beautiful, and intuitive
                designs. When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-2xl font-bold text-primary">3+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h3 className="text-2xl font-bold text-secondary">20+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
