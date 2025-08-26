import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const ParallaxBackground = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX / innerWidth - 0.5) * 30
      const y = (clientY / innerHeight - 0.5) * 30
      
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950" />
      
      {/* Secondary Gradient Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,219,255,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.2),transparent_50%)]" />
      </div>

      {/* Floating Particles */}
      <div ref={containerRef} className="absolute inset-0 transition-transform duration-1000 ease-out">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-1 h-1 bg-cyan-400' :
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-pink-400' :
              i % 4 === 2 ? 'w-0.5 h-0.5 bg-purple-400' :
              'w-1 h-1 bg-green-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            <div 
              className={`${
                i % 5 === 0 ? 'w-6 h-6 bg-cyan-400/40 rounded-lg' : 
                i % 5 === 1 ? 'w-8 h-8 bg-pink-400/40 rounded-full' : 
                i % 5 === 2 ? 'w-4 h-4 bg-purple-400/40 rotate-45' :
                i % 5 === 3 ? 'w-5 h-5 bg-green-400/40 rounded-full' :
                'w-7 h-7 bg-blue-400/40 rounded-lg'
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Orbiting Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${20 + (i * 5)}%`,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative w-32 h-32">
              <motion.div
                className="absolute w-3 h-3 bg-cyan-400/60 rounded-full"
                style={{
                  left: '50%',
                  top: '0%',
                  transform: 'translateX(-50%)',
                }}
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Hexagonal Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-3xl" />

      {/* Animated Light Rays */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
            style={{
              left: `${15 + (i * 15)}%`,
              top: '-10%',
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              y: [0, 120, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-xs text-cyan-400/40 font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {['<div>', '</div>', '{', '}', 'const', 'return', 'import', 'export', '()', '=>', 'useState', 'useEffect'][i % 12]}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ParallaxBackground
