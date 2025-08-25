import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Float, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Astronaut({ ...props }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  
  // Fallback Astronaut Model (wenn kein 3D Model verfügbar ist)
  const createFallbackAstronaut = () => {
    return (
      <group>
        {/* Head */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
        
        {/* Helmet */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#00ffff" transparent opacity={0.3} />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.4, 0.6, 1.2, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Arms */}
        <mesh position={[-0.8, 0.8, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.8, 0.8, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 1, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-0.2, -0.5, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.2, -0.5, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Oxygen Tank */}
        <mesh position={[0, 0.8, -0.8]}>
          <cylinderGeometry args={[0.3, 0.3, 1.5, 32]} />
          <meshStandardMaterial color="#ff00ff" />
        </mesh>
      </group>
    )
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <group
          ref={ref}
          {...props}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.1 : 1}
        >
          {createFallbackAstronaut()}
        </group>
      </Float>
    </PresentationControls>
  )
}
