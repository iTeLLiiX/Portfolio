import { useState } from 'react'
import { motion } from 'framer-motion'

const FlipCard = ({ front, back, icon, color, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay }}
      viewport={{ once: true }}
      className="w-full h-64 perspective-1000"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
            border: `1px solid ${color}30`
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div 
              className="text-4xl mb-4"
              style={{ color: color }}
            >
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{front.title}</h3>
            <p className="text-gray-300 text-sm">{front.description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${color}40 0%, ${color}60 100%)`,
            border: `1px solid ${color}50`
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div 
              className="text-3xl mb-4"
              style={{ color: color }}
            >
              {back.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{back.title}</h3>
            <p className="text-gray-200 text-sm leading-relaxed">{back.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FlipCard
