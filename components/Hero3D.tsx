"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Interactive 3D scene for the Hero section.
 * Geomeetric meshes + a particle field respond smoothly to the cursor.
 * Loaded lazily from app/page.tsx via next/dynamic ({ ssr: false }) to
 * protect First Contentful Paint — the fallback shows a static glow.
 */

/* Rotating group that tilts towards the pointer. */
function SceneGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.6, 0.06);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.45, 0.06);
  });

  return (
    <group ref={ref} rotation={[0.2, 0.0, 0.25]}>
      {children}
    </group>
  );
}

/* Ambient particle field drifting within the canvas. */
function Particles({ count = 400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y += 0.0004;
    const t = state.clock.elapsedTime;
    points.current.position.y = Math.sin(t * 0.15) * 0.15;
  });

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        color="#8B5CF6"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* Central floating meshes. Uses only R3F props — typed through ThreeElements. */
function CenterObjects() {
  return (
    <group>
      {/* Central icosahedron — emerald wireframe */}
      <Float speed={2} rotationIntensity={1.1} floatIntensity={1.6}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshStandardMaterial
            color="#10B981"
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>
      </Float>

      {/* Torus knot — violet glow ring */}
      <Float speed={1.6} rotationIntensity={1.6} floatIntensity={1.8}>
        <mesh position={[1.9, 0.9, -1.2]}>
          <torusKnotGeometry args={[0.55, 0.16, 128, 16]} />
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#8B5CF6"
            emissiveIntensity={0.55}
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>
      </Float>

      {/* Small golden sphere accent */}
      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[-1.9, -0.8, -0.6]}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial
            color="#F59E0B"
            emissive="#F59E0B"
            emissiveIntensity={0.4}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Small orbiting cubes */}
      <Float speed={3} floatIntensity={2}>
        <mesh position={[1.5, -1.4, 0]}>
          <boxGeometry args={[0.32, 0.32, 0.32]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.4} />
        </mesh>
      </Float>
      <Float speed={2.8} floatIntensity={2.2}>
        <mesh position={[-1.3, 1.4, -1]}>
          <boxGeometry args={[0.24, 0.24, 0.24]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) {
    return (
      <div
        className="relative h-full w-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(139,92,246,0.18), transparent 65%)",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <Canvas
      aria-label="Visual 3D interaktif Webcraft Studio"
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ height: "100%", width: "100%" }}
      className="!bg-transparent"
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 4, 6]} intensity={40} color="#10B981" />
      <pointLight position={[-6, -3, 4]} intensity={36} color="#8B5CF6" />
      <pointLight position={[0, 5, -4]} intensity={20} color="#F59E0B" />

      <SceneGroup>
        <CenterObjects />
        <Particles />
      </SceneGroup>
    </Canvas>
  );
}