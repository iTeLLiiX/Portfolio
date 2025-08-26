import { motion } from 'framer-motion'
import AnimatedAstronaut from './AnimatedAstronaut'

const AnimatedSection = () => {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Interaktiver Astronaut
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bewege deine Maus über den Astronauten und klicke ihn an, um die magischen Effekte zu erleben!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              🚀 Entdecke die Magie
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span>Hover-Effekte mit Glow-Animation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                <span>Interaktive Partikel-Effekte</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>3D-Rotation beim Klicken</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Floating Animationen</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="text-gray-400 leading-relaxed">
                Dieser animierte Astronaut repräsentiert die Kreativität und Innovation, 
                die ich in jedes Projekt einbringe. Jede Interaktion zeigt die Aufmerksamkeit 
                für Details und das Streben nach außergewöhnlichen Benutzererlebnissen.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Astronaut */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <AnimatedAstronaut />
          </motion.div>
        </div>

        {/* Additional Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🎨", text: "Kreativ", color: "from-cyan-400 to-blue-500" },
              { icon: "⚡", text: "Schnell", color: "from-pink-400 to-purple-500" },
              { icon: "🔧", text: "Funktional", color: "from-yellow-400 to-orange-500" },
              { icon: "🌟", text: "Magisch", color: "from-green-400 to-teal-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl text-center hover-lift"
              >
                <div className={`text-4xl mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold">{item.text}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnimatedSection
