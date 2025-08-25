import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-dark-400">
              © {currentYear} Nico Merkel. Alle Rechte vorbehalten.
            </p>
            <p className="text-sm text-dark-500 mt-1">
              Entwickelt mit <Heart className="inline w-4 h-4 text-red-500" /> und React
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-dark-400 hover:text-white transition-colors"
            >
              Start
            </a>
            <a
              href="#about"
              className="text-dark-400 hover:text-white transition-colors"
            >
              Über mich
            </a>
            <a
              href="#work"
              className="text-dark-400 hover:text-white transition-colors"
            >
              Projekte
            </a>
            <a
              href="#contact"
              className="text-dark-400 hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-dark-800 rounded-full hover:bg-primary-500/20 transition-colors"
            title="Nach oben scrollen"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-dark-500 text-center md:text-left">
              <p>
                Full-Stack Developer spezialisiert auf React, Node.js und E-Commerce
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-dark-500">
              <span>Made in Deutschland</span>
              <span>•</span>
              <span>Powered by Vite & Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
