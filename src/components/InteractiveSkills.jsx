import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const InteractiveSkills = () => {
  const [pressedKey, setPressedKey] = useState('')
  const [showHint, setShowHint] = useState(true)

  const skills = {
    'react': { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
    'node': { name: 'Node.js', level: 85, color: 'from-green-400 to-emerald-500' },
    'javascript': { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    'typescript': { name: 'TypeScript', level: 80, color: 'from-blue-400 to-indigo-500' },
    'python': { name: 'Python', level: 75, color: 'from-green-400 to-teal-500' },
    'mongodb': { name: 'MongoDB', level: 85, color: 'from-green-400 to-emerald-500' },
    'mysql': { name: 'MySQL', level: 80, color: 'from-blue-400 to-cyan-500' },
    'docker': { name: 'Docker', level: 70, color: 'from-blue-400 to-indigo-500' },
    'aws': { name: 'AWS', level: 75, color: 'from-orange-400 to-red-500' },
    'git': { name: 'Git', level: 90, color: 'from-orange-400 to-red-500' },
    'tailwind': { name: 'Tailwind CSS', level: 95, color: 'from-cyan-400 to-blue-500' },
    'nextjs': { name: 'Next.js', level: 85, color: 'from-gray-400 to-black' },
    'firebase': { name: 'Firebase', level: 80, color: 'from-orange-400 to-yellow-500' },
    'laravel': { name: 'Laravel', level: 75, color: 'from-red-400 to-pink-500' },
    'wordpress': { name: 'WordPress', level: 85, color: 'from-blue-400 to-indigo-500' },
    'php': { name: 'PHP', level: 80, color: 'from-purple-400 to-indigo-500' }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase()
      if (skills[key]) {
        setPressedKey(key)
        setShowHint(false)
        
        // Reset after 2 seconds
        setTimeout(() => {
          setPressedKey('')
        }, 2000)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <section id="skills" className="section relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            SKILLS
          </h2>
          {showHint && (
            <p className="text-gray-300 text-lg">
              (hint: press a key)
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([key, skill]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
              viewport={{ once: true }}
              className={`relative group cursor-pointer ${
                pressedKey === key ? 'z-10' : ''
              }`}
              onClick={() => {
                setPressedKey(key)
                setShowHint(false)
                setTimeout(() => setPressedKey(''), 2000)
              }}
            >
              <motion.div
                animate={{
                  scale: pressedKey === key ? 1.1 : 1,
                  rotateY: pressedKey === key ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`glass-card p-6 rounded-2xl text-center hover-lift ${
                  pressedKey === key ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {/* Skill Icon/Letter */}
                <motion.div
                  animate={{
                    rotate: pressedKey === key ? 360 : 0,
                    scale: pressedKey === key ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`text-4xl mb-4 font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                >
                  {skill.name.charAt(0)}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>

                {/* Skill Level */}
                <p className="text-sm text-gray-400">
                  {skill.level}%
                </p>

                {/* Floating Elements when active */}
                {pressedKey === key && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 0.1 }}
                      className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-1/2 -right-3 w-2 h-2 bg-yellow-400 rounded-full"
                    />
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Keyboard Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Interaktive Skills
            </h3>
            <p className="text-gray-300 mb-4">
              Drücke eine Taste auf deiner Tastatur oder klicke auf eine Skill-Karte, um sie zu aktivieren!
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {Object.keys(skills).slice(0, 8).map((key) => (
                <span
                  key={key}
                  className="px-3 py-1 bg-slate-800/50 text-cyan-400 text-sm rounded-full border border-cyan-400/30"
                >
                  {key}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-6 h-6 bg-cyan-400 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-20"
        />
      </div>
    </section>
  )
}

export default InteractiveSkills
