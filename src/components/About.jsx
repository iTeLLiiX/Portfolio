import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Code, Database, Smartphone, Sparkles, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    { 
      name: 'Frontend', 
      icon: Code, 
      description: 'React, Next.js, Vue.js, Angular',
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10'
    },
    { 
      name: 'Backend', 
      icon: Database, 
      description: 'Node.js, Firebase, Microservices',
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/10'
    },
    { 
      name: 'Mobile', 
      icon: Smartphone, 
      description: 'React Native, Flutter, PWA',
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10'
    }
  ]

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-purple rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative glass-card rounded-2xl p-2">
                <img
                  src="/assets/nico-profile.jpg"
                  alt="Nico Merkel"
                  className="relative rounded-xl w-full h-auto max-w-md mx-auto shadow-2xl"
                />
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-xl neon-glow"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-cyan">4+</div>
                <div className="text-sm text-dark-400">Jahre Erfahrung</div>
              </div>
            </motion.div>

            {/* Floating Award */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -left-4 glass-card rounded-lg p-3 shadow-lg neon-glow"
            >
              <Award size={24} className="text-neon-pink" />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 text-neon-cyan mb-4"
              >
                <Sparkles size={20} />
                <span className="text-sm font-medium">Über mich</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Über <span className="gradient-text">mich</span>
              </h2>
              <p className="text-lg text-dark-300 leading-relaxed">
                Erfahrener Full-Stack Developer mit Fokus auf moderne Webtechnologien. 
                Spezialisiert auf React, Node.js und E-Commerce-Lösungen. 
                Entwickle skalierbare Anwendungen mit bester Performance und UX.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-dark-400">
              <MapPin size={20} className="text-neon-cyan" />
              <span>Deutschland</span>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-card text-center p-4 hover:scale-105 transition-transform duration-300"
                >
                  <div className={`inline-flex p-2 rounded-lg ${skill.bgColor} mb-3 ${skill.color}`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-sm text-dark-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                <span className="text-dark-300">40% Conversion-Steigerung bei E-Commerce-Projekten</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse"></div>
                <span className="text-dark-300">Spezialisierung auf moderne Technologien (AI/ML, AR/VR)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
                <span className="text-dark-300">Erfahrung mit skalierbaren Microservices-Architekturen</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
