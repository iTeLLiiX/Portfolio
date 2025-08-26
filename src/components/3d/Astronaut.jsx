import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PresentationControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const Astronaut = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

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
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        <group ref={meshRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
          {/* Astronaut Body - Orange */}
          <mesh position={[0, 0, 0]}>
            <capsuleGeometry args={[0.5, 1.2, 4, 8]} />
            <meshStandardMaterial color="#ff6b35" />
          </mesh>

          {/* Helmet - Orange with Pink Visor */}
          <mesh position={[0, 0.8, 0]}>
            <sphereGeometry args={[0.6, 16, 16]} />
            <meshStandardMaterial color="#ff6b35" />
          </mesh>

          {/* Visor - Pink */}
          <mesh position={[0, 0.8, 0.4]}>
            <sphereGeometry args={[0.55, 16, 16]} />
            <meshStandardMaterial color="#ff69b4" transparent opacity={0.8} />
          </mesh>

          {/* Helmet Glow - Pink */}
          <mesh position={[0, 0.8, 0.45]}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color="#ff69b4" transparent opacity={0.3} />
          </mesh>

          {/* Arms - Orange with Teal Panels */}
          <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <capsuleGeometry args={[0.2, 0.8, 4, 8]} />
            <meshStandardMaterial color="#ff6b35" />
          </mesh>
          <mesh position={[0.8, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <capsuleGeometry args={[0.2, 0.8, 4, 8]} />
            <meshStandardMaterial color="#ff6b35" />
          </mesh>

          {/* Teal Arm Panels */}
          <mesh position={[-0.8, 0.1, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.15, 0.6, 0.1]} />
            <meshStandardMaterial color="#20b2aa" />
          </mesh>
          <mesh position={[0.8, 0.1, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.15, 0.6, 0.1]} />
            <meshStandardMaterial color="#20b2aa" />
          </mesh>

          {/* Legs - Orange with Teal Panels */}
          <mesh position={[-0.3, -1.2, 0]}>
            <capsuleGeometry args={[0.25, 0.8, 4, 8]} />
            <meshStandardMaterial color="#ff6b35" />
          </mesh>
          <mesh position={[0.3, -1.2, 0]}>
            <capsuleGeometry args={[0.25, 0.8, 4, 8]} />
            <meshStandardMaterial color="#ff6b35" />
          </mesh>

          {/* Teal Leg Panels */}
          <mesh position={[-0.3, -1.1, 0]}>
            <boxGeometry args={[0.2, 0.5, 0.1]} />
            <meshStandardMaterial color="#20b2aa" />
          </mesh>
          <mesh position={[0.3, -1.1, 0]}>
            <boxGeometry args={[0.2, 0.5, 0.1]} />
            <meshStandardMaterial color="#20b2aa" />
          </mesh>

          {/* Floating Tools */}
          <mesh position={[-1.2, 0.5, 0]}>
            <boxGeometry args={[0.3, 0.1, 0.1]} />
            <meshStandardMaterial color="#ffa500" />
          </mesh>

          <mesh position={[1.2, 0.3, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
            <meshStandardMaterial color="#ff69b4" />
          </mesh>

          {/* Energy Lines */}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={10}
                array={new Float32Array([
                  -0.8, 0, 0,
                  -1.5, 0.5, 0,
                  -1.8, 0.2, 0,
                  -2.0, 0.8, 0,
                  -2.2, 0.5, 0,
                  0.8, 0, 0,
                  1.5, 0.3, 0,
                  1.8, 0.6, 0,
                  2.0, 0.2, 0,
                  2.2, 0.7, 0,
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#20b2aa" />
          </line>

          {/* Glowing Effects */}
          <pointLight position={[0, 0.8, 0.5]} intensity={0.5} color="#ff69b4" />
          <pointLight position={[-0.8, 0, 0]} intensity={0.3} color="#20b2aa" />
          <pointLight position={[0.8, 0, 0]} intensity={0.3} color="#20b2aa" />
        </group>
      </Float>
    </PresentationControls>
  );
};

export default Astronaut;
