import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const RotatingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
};

const OrbitingSphere = ({
  radius,
  speed,
  size,
  color,
  offset = 0,
}: {
  radius: number;
  speed: number;
  size: number;
  color: string;
  offset?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + offset;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.7) * radius * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.15} />
          <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={1.2} />
          <pointLight position={[-5, -3, 3]} color="#8b5cf6" intensity={0.6} />
          <RotatingIcosahedron />
          <OrbitingSphere radius={3} speed={0.6} size={0.1} color="#00d4ff" offset={0} />
          <OrbitingSphere radius={3.5} speed={0.4} size={0.08} color="#8b5cf6" offset={2} />
          <OrbitingSphere radius={2.5} speed={0.9} size={0.07} color="#00d4ff" offset={4} />
          <OrbitingSphere radius={4} speed={0.3} size={0.06} color="#8b5cf6" offset={1} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;