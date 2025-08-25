import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Sparkles } from 'lucide-react'
import Canvas from './3d/Canvas'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ['React', 'Node.js', 'E-Commerce']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950/80 via-dark-900/60 to-dark-800/80"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-cyan rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-neon-pink rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-neon-purple rounded-full animate-float delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-neon-blue rounded-full animate-float delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Sparkles Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-neon-cyan mb-4"
            >
              <Sparkles size={20} />
              <span className="text-sm font-medium">Full-Stack Developer</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Hallo, ich bin{' '}
              <span className="gradient-text">Nico</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-dark-300 mb-4"
            >
              Spezialisiert auf
            </motion.p>

            {/* Animated Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-12 md:h-16 flex items-center mb-8"
            >
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text">
                {texts[currentText]}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-dark-400 mb-12 max-w-2xl"
            >
              Entwickle moderne Webanwendungen mit neuesten Technologien und 
              schaffe digitale Erlebnisse, die begeistern.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Kontakt aufnehmen
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Download size={20} />
                CV herunterladen
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0">
              <Canvas />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-neon-cyan"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
