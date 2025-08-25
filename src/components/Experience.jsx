import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      id: 1,
      title: "Senior Web Developer",
      company: "Innovation & Research",
      period: "2024-Present",
      location: "Deutschland",
      description: "Fokus auf moderne Technologien und innovative Lösungen",
      responsibilities: [
        "Fokus auf moderne Technologien wie AI/ML, AR/VR und Blockchain",
        "Entwickelt skalierbare Microservices-Architekturen mit Docker und Kubernetes",
        "Führt technische Audits und Performance-Optimierungen durch",
        "Mentoring von Junior-Entwicklern und Wissenstransfer"
      ],
      technologies: ["AI/ML", "AR/VR", "Blockchain", "Docker", "Kubernetes", "Microservices"]
    },
    {
      id: 2,
      title: "Mobile App Developer",
      company: "Cross-Platform Development",
      period: "2022-2024",
      location: "Deutschland",
      description: "Spezialisierung auf mobile Anwendungen und Cross-Platform-Entwicklung",
      responsibilities: [
        "Entwickelt native und Cross-Platform Mobile Apps mit React Native und Flutter",
        "Implementiert biometrische Authentifizierung und sichere Datenübertragung",
        "Integration mit Firebase für Echtzeit-Datenübertragung und Analytics",
        "HealthKit und Google Fit Integration für Gesundheits-Apps",
        "App Store und Google Play Store Optimierung"
      ],
      technologies: ["React Native", "Flutter", "Firebase", "Biometrics", "HealthKit", "Google Fit"]
    },
    {
      id: 3,
      title: "Full-Stack Web Developer",
      company: "Freelance & Agency Projects",
      period: "2020-2024",
      location: "Deutschland",
      description: "Entwicklung moderner Webanwendungen mit Fokus auf E-Commerce",
      responsibilities: [
        "Entwickelt moderne Webanwendungen mit React, Next.js und Node.js",
        "Spezialisiert auf E-Commerce-Lösungen mit 40% Conversion-Steigerung",
        "Implementiert sichere Payment-Gateways mit Stripe und PayPal",
        "Erstellt responsive PWA-Anwendungen mit Offline-Funktionalität",
        "Optimiert Performance und SEO für bessere Rankings"
      ],
      technologies: ["React", "Next.js", "Node.js", "Stripe", "PayPal", "PWA", "SEO"]
    }
  ]

  return (
    <section className="section bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Berufs<span className="gradient-text">erfahrung</span>
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Meine berufliche Entwicklung zeigt eine kontinuierliche Spezialisierung 
            auf moderne Technologien und innovative Lösungen.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-dark-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="card">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-primary-500 font-medium">{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-dark-400 mb-3">{exp.description}</p>
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-dark-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-dark-400">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-3">Verantwortlichkeiten:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-dark-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3">Technologien:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-800 text-primary-400 text-xs rounded-md border border-dark-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-xl p-8 max-w-3xl mx-auto border border-primary-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              Kontinuierliche Entwicklung
            </h3>
            <p className="text-dark-300 leading-relaxed">
              Von der Full-Stack-Entwicklung über mobile Anwendungen bis hin zu 
              modernsten Technologien wie AI/ML und Blockchain - meine Karriere 
              zeigt eine stetige Weiterentwicklung und Anpassung an die neuesten 
              Technologietrends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
