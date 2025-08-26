import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Download, Mail } from 'lucide-react';
import Canvas from './3d/Canvas';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['React', 'Node.js', 'E-Commerce'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Planets and Stars */}
      <div className="absolute inset-0">
        {/* Gradient Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-orange-600 via-pink-600 to-purple-900"></div>
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Large Planet (Left) */}
        <motion.div
          className="absolute left-10 top-20 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-2 bg-gradient-to-br from-teal-300 to-cyan-500 rounded-full opacity-50"></div>
        </motion.div>

        {/* Small Planets */}
        <motion.div
          className="absolute right-20 top-32 w-16 h-16 bg-gray-800 rounded-full"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute right-40 top-16 w-12 h-12 bg-gray-700 rounded-full"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Geometric Shards */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 opacity-60"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Tools */}
        <motion.div
          className="absolute right-10 bottom-20 w-8 h-8 bg-orange-500 rounded-full opacity-80"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Willkommen</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-6xl font-bold mb-4"
          >
            Hi, ich bin{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              Nico
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl lg:text-4xl font-semibold mb-2"
          >
            Ein Entwickler
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl lg:text-3xl font-medium mb-4"
          >
            Gewidmet dem Erstellen von
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-8"
          >
            <span className="text-5xl lg:text-7xl font-bold text-white">
              {words[currentWord]}
            </span>
          </motion.div>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-xl lg:text-2xl font-medium text-gray-300"
          >
            Lösungen
          </motion.h4>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5" />
              Kontakt aufnehmen
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              CV herunterladen
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Astronaut */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative h-[600px] lg:h-[700px]"
        >
          <Canvas />
          
          {/* Floating Elements around Astronaut */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-6 h-6 bg-yellow-400 rounded opacity-80"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-400 rounded-full opacity-80"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-cyan-400 cursor-pointer"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
