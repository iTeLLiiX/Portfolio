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
        </motion.div>

        <div className="flex items-center justify-center">
          <AnimatedAstronaut />
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
