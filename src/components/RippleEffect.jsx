import { useEffect, useRef } from 'react'

const RippleEffect = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Create canvas for ripple effect
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '1'
    
    container.appendChild(canvas)

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Ripple class
    class Ripple {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 0
        this.maxRadius = 100
        this.speed = 2
        this.opacity = 1
        this.fadeSpeed = 0.02
      }

      update() {
        this.radius += this.speed
        this.opacity -= this.fadeSpeed
        return this.opacity > 0
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()
      }
    }

    const ripples = []
    let animationId

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Create new ripple every 100ms
      if (ripples.length === 0 || Date.now() - ripples[ripples.length - 1].timestamp > 100) {
        ripples.push({
          ...new Ripple(x, y),
          timestamp: Date.now()
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i]
        if (ripple.update()) {
          ripple.draw()
        } else {
          ripples.splice(i, 1)
        }
      }
      
      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Add event listeners
    container.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      container.removeEventListener('mousemove', handleMouseMove)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: 1 }}
    />
  )
}

export default RippleEffect
