"use client";

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// Simple Lanyard component with a card that can be dragged
function LanyardCard() {
  const cardRef = useRef<THREE.Mesh>(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Handle dragging
  const handlePointerDown = (e: THREE.Event & { stopPropagation: () => void }) => {
    e.stopPropagation();
    setDragging(true);
    document.body.style.cursor = 'grabbing';
  };

  const handlePointerUp = () => {
    setDragging(false);
    document.body.style.cursor = 'grab';
  };

  useFrame(({ mouse, viewport }) => {
    if (dragging) {
      // Convert mouse coordinates to 3D space with proper typing
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      
      // Add some spring effect
      setPosition(prev => ({
        x: prev.x + (x - prev.x) * 0.2,
        y: prev.y + (y - prev.y) * 0.2,
      }));
    } else {
      // Return to original position when not dragging
      setPosition(prev => ({
        x: prev.x * 0.95,
        y: prev.y * 0.95,
      }));
    }
  });

  return (
    <group>
      {/* Lanyard string */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array([0, 0, 0, 0, 0, -10]), 3]}
            count={2}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#666" linewidth={2} />
      </line>
      
      {/* Card */}
      <mesh
        ref={cardRef}
        position={[position.x, position.y + 2, 0]}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
        
        {/* Card content */}
        <Text
          position={[0, 0.5, 0.06]}
          fontSize={0.3}
          color="#000000" 
          anchorX="center"
          anchorY="middle"
        >
          Codelix
        </Text>
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.2}
          color="#3b82f6"
          anchorX="center"
          anchorY="middle"
        >
          Contact Us
        </Text>
      </mesh>
    </group>
  );
}

// Main Lanyard component
export default function Lanyard({
  position = [0, 0, 20],
  fov = 50,
  transparent = true,
}: {
  position?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}) {
  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <LanyardCard />
      </Canvas>
    </div>
  );
}
