import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function FloatingElements() {
  const sphereRef = useRef()

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      sphereRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <group>
      {/* Floating Spheres */}
      <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4} position={[3, 0, 0]}>
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.4}
          speed={2}
          transparent
          opacity={0.1}
        />
      </Sphere>
      
      <Sphere args={[1, 100, 200]} scale={1.8} position={[-3, 0, 0]}>
        <MeshDistortMaterial
          color="#ff00ff"
          attach="material"
          distort={0.3}
          speed={1.5}
          transparent
          opacity={0.1}
        />
      </Sphere>
      
      <Sphere args={[1, 100, 200]} scale={2} position={[0, 3, 0]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.5}
          speed={2.5}
          transparent
          opacity={0.1}
        />
      </Sphere>
    </group>
  )
}
