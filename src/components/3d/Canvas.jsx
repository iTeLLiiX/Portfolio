import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import Astronaut from './Astronaut'

const ComputersCanvas = ({ controls }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Astronaut controls={controls} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
