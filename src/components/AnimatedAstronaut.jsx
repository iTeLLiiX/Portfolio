import { useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedAstronaut = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      {/* Animated Astronaut GIF */}
      <motion.div
        className="relative overflow-hidden rounded-2xl"
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotateY: isClicked ? 180 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <img
          src="/assets/astronaut-animation.gif"
          alt="Animated Astronaut"
          className="w-full h-auto max-w-md mx-auto"
          style={{
            filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(1) contrast(1)',
            transition: 'filter 0.3s ease'
          }}
        />
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered 
              ? '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(255, 105, 180, 0.4)' 
              : '0 0 10px rgba(0, 255, 255, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-80"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-80"
        animate={{
          y: [0, 8, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Interactive Text */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        animate={{
          opacity: isHovered ? 1 : 0.7,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-cyan-400 text-sm font-mono">
          {isHovered ? "🚀 Klick mich!" : "Astronaut"}
        </p>
      </motion.div>

      {/* Particle Effects */}
      {isHovered && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </>
      )}
    </motion.div>
  )
}

export default AnimatedAstronaut
