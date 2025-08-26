import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Download, Mail } from 'lucide-react';
import Canvas from './3d/Canvas';
import InteractiveControls from './3d/InteractiveControls';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [controls, setControls] = useState({
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 },
    scale: 1,
    animation: 'idle'
  });
  const words = ['React', 'Node.js', 'E-Commerce'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

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
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/nico-merkel-cv.html';
                link.download = 'Nico-Merkel-CV.html';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
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
          <Canvas controls={controls} />
          
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

      {/* Interactive Controls */}
      <InteractiveControls onControlChange={setControls} />

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
