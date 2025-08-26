import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award } from 'lucide-react'

const InteractiveTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Webentwickler",
      company: "Thomas-Scharli Facility and More",
      location: "Schweiz",
      period: "2024 - Heute",
      description: "Entwicklung moderner Webanwendungen mit React, Node.js und verschiedenen Frameworks. Fokus auf E-Commerce-Lösungen und Unternehmenswebsites.",
      technologies: ["React", "Node.js", "MongoDB", "WordPress", "PHP"],
      achievements: [
        "Entwicklung einer MyHammer-ähnlichen Plattform",
        "Implementierung von Zahlungssystemen",
        "Optimierung der Benutzererfahrung"
      ]
    },
    {
      id: 2,
      title: "Frontend Entwickler",
      company: "CodeSnap Learning",
      location: "Deutschland",
      period: "2023 - 2024",
      description: "Entwicklung einer innovativen Lern-App für verschiedene Berufe. Implementierung von interaktiven Features und KI-gestützten Empfehlungen.",
      technologies: ["React Native", "Firebase", "TensorFlow", "Redux", "TypeScript"],
      achievements: [
        "Entwicklung einer mobilen Lern-App",
        "Integration von KI-Features",
        "Implementierung von Quiz-Systemen"
      ]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "CraftConnect",
      location: "Deutschland",
      period: "2022 - 2023",
      description: "Vollständige Entwicklung einer E-Commerce-Plattform für Handwerker und Kunden. Implementierung von Buchungssystemen und Bewertungsfunktionen.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      achievements: [
        "Vollständige E-Commerce-Lösung",
        "Buchungssystem implementiert",
        "Bewertungs- und Review-System"
      ]
    }
  ]

  return (
    <section id="experience" className="section relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Berufserfahrung
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meine Reise in der Webentwicklung und die Projekte, die mich geprägt haben
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-pink-400 to-purple-400 opacity-30" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-12 gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full border-4 border-slate-900 z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`glass-card p-8 rounded-2xl flex-1 ${
                    index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400 mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                    </div>
                    
                    {/* Achievement Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full border border-cyan-400/30"
                    >
                      <Award className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Verwendete Technologien:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-slate-800/50 text-cyan-400 text-sm rounded-full border border-cyan-400/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Hauptleistungen:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-60"
          />
        </div>
      </div>
    </section>
  )
}

export default InteractiveTimeline
