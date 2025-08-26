import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const InteractiveControls = ({ onControlChange }) => {
  const [controls, setControls] = useState({
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 },
    scale: 1,
    animation: 'idle'
  })

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      setIsActive(true)
      
      switch (event.key) {
        case 'ArrowUp':
          setControls(prev => ({
            ...prev,
            rotation: { ...prev.rotation, x: prev.rotation.x + 0.1 }
          }))
          break
        case 'ArrowDown':
          setControls(prev => ({
            ...prev,
            rotation: { ...prev.rotation, x: prev.rotation.x - 0.1 }
          }))
          break
        case 'ArrowLeft':
          setControls(prev => ({
            ...prev,
            rotation: { ...prev.rotation, y: prev.rotation.y - 0.1 }
          }))
          break
        case 'ArrowRight':
          setControls(prev => ({
            ...prev,
            rotation: { ...prev.rotation, y: prev.rotation.y + 0.1 }
          }))
          break
        case 'w':
          setControls(prev => ({
            ...prev,
            position: { ...prev.position, z: prev.position.z - 0.1 }
          }))
          break
        case 's':
          setControls(prev => ({
            ...prev,
            position: { ...prev.position, z: prev.position.z + 0.1 }
          }))
          break
        case 'a':
          setControls(prev => ({
            ...prev,
            position: { ...prev.position, x: prev.position.x - 0.1 }
          }))
          break
        case 'd':
          setControls(prev => ({
            ...prev,
            position: { ...prev.position, x: prev.position.x + 0.1 }
          }))
          break
        case ' ':
          setControls(prev => ({
            ...prev,
            animation: prev.animation === 'idle' ? 'wave' : 'idle'
          }))
          break
        default:
          break
      }
    }

    const handleKeyUp = () => {
      setIsActive(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useEffect(() => {
    onControlChange(controls)
  }, [controls, onControlChange])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30">
        <h3 className="text-white text-sm font-bold mb-3">🎮 Interaktive Steuerung</h3>
        
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">↑↓</span>
              <span>Rotation X</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">←→</span>
              <span>Rotation Y</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">WASD</span>
              <span>Position</span>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">SPACE</span>
              <span>Animation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-700 px-2 py-1 rounded">MOUSE</span>
              <span>Look Around</span>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ scale: isActive ? 1.1 : 1 }}
          className="mt-3 text-center"
        >
          <div className="text-cyan-400 text-xs">
            {isActive ? "🎯 Aktiv!" : "Bereit für Interaktion"}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default InteractiveControls
