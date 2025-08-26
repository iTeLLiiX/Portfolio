import { useEffect } from 'react'
import WOW from 'wowjs'

const WowAnimations = () => {
  useEffect(() => {
    // Initialize WOW.js
    const wow = new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    
    wow.init()

    // Cleanup
    return () => {
      // WOW.js doesn't have a destroy method, but we can remove event listeners if needed
    }
  }, [])

  return null
}

export default WowAnimations
