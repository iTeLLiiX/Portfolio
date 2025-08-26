import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Text, Html } from '@react-three/drei'
import * as THREE from 'three'

const Astronaut = ({ controls }) => {
  const meshRef = useRef()
  const groupRef = useRef()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const { camera } = useThree()

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (meshRef.current && controls) {
      // Apply keyboard controls
      meshRef.current.rotation.x += controls.rotation.x
      meshRef.current.rotation.y += controls.rotation.y
      meshRef.current.rotation.z += controls.rotation.z
      
      meshRef.current.position.x += controls.position.x
      meshRef.current.position.y += controls.position.y
      meshRef.current.position.z += controls.position.z
      
      meshRef.current.scale.setScalar(controls.scale)

      // Smooth rotation based on mouse position (when no keyboard input)
      if (controls.rotation.x === 0 && controls.rotation.y === 0) {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
          meshRef.current.rotation.y,
          mousePosition.x * 0.5,
          0.05
        )
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          mousePosition.y * 0.3,
          0.05
        )
      }

      // Gentle floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.001
    }

    if (groupRef.current) {
      // Rotate the entire group slowly
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Astronaut Body */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <mesh
          ref={meshRef}
          onPointerOver={() => setIsHovered(true)}
          onPointerOut={() => setIsHovered(false)}
          scale={isHovered ? 1.1 : 1}
        >
          {/* Helmet */}
          <mesh position={[0, 0.8, 0]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial
              color="#ff6b35"
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.9}
            />
            {/* Visor */}
            <mesh position={[0, 0, 0.35]}>
              <sphereGeometry args={[0.35, 32, 32]} />
              <meshStandardMaterial
                color="#ff69b4"
                metalness={1}
                roughness={0}
                transparent
                opacity={0.3}
              />
            </mesh>
            {/* Helmet Glow */}
            <pointLight
              position={[0, 0, 0.5]}
              color="#ff69b4"
              intensity={isHovered ? 2 : 1}
              distance={3}
            />
          </mesh>

          {/* Body */}
          <mesh position={[0, 0, 0]}>
            <capsuleGeometry args={[0.3, 1.2, 8, 16]} />
            <meshStandardMaterial
              color="#ff6b35"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>

          {/* Arms */}
          <mesh position={[-0.6, 0.2, 0]} rotation={[0, 0, Math.PI / 4]}>
            <capsuleGeometry args={[0.1, 0.8, 8, 16]} />
            <meshStandardMaterial
              color="#ff6b35"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
          <mesh position={[0.6, 0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <capsuleGeometry args={[0.1, 0.8, 8, 16]} />
            <meshStandardMaterial
              color="#ff6b35"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>

          {/* Legs */}
          <mesh position={[-0.2, -1, 0]}>
            <capsuleGeometry args={[0.12, 0.8, 8, 16]} />
            <meshStandardMaterial
              color="#ff6b35"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
          <mesh position={[0.2, -1, 0]}>
            <capsuleGeometry args={[0.12, 0.8, 8, 16]} />
            <meshStandardMaterial
              color="#ff6b35"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>

          {/* Energy Lines */}
          <mesh position={[0, 0, 0.8]}>
            <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.5}
            />
          </mesh>
          <mesh position={[0, 0, -0.8]}>
            <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.5}
            />
          </mesh>
        </mesh>
      </Float>

      {/* Floating Tools */}
      <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[-1, 0.5, 0]}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial
            color="#ff6b35"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.3}>
        <mesh position={[1, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.4, 8]} />
          <meshStandardMaterial
            color="#ff69b4"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Interactive Elements */}
      <Html position={[0, 2, 0]} center>
        <div className="text-white text-center bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-400/30">
          <div className="text-sm font-mono">
            {isHovered ? "🚀 Interaktiv!" : "Bewege die Maus"}
          </div>
        </div>
      </Html>

      {/* Energy Particles */}
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff69b4" : "#ff6b35"}
            emissive={i % 3 === 0 ? "#00ffff" : i % 3 === 1 ? "#ff69b4" : "#ff6b35"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      
      {/* Directional Light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#ffffff"
      />

      {/* Point Lights for Glow Effect */}
      <pointLight
        position={[0, 0, 2]}
        color="#00ffff"
        intensity={0.5}
        distance={5}
      />
      <pointLight
        position={[0, 0, -2]}
        color="#ff69b4"
        intensity={0.5}
        distance={5}
      />
    </group>
  )
}

export default Astronaut
