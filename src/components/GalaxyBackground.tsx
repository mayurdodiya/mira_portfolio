
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Stars, useTexture, Torus, Ring } from '@react-three/drei';
import * as THREE from 'three';

// Earth Component with realistic textures
const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group position={[4, 2, -8]}>
      <Sphere ref={earthRef} args={[1.5, 32, 32]}>
        <meshPhongMaterial
          color="#4A90E2"
          shininess={100}
          specular="#ffffff"
        />
      </Sphere>
      {/* Earth's atmosphere glow */}
      <Sphere args={[1.6, 32, 32]}>
        <meshBasicMaterial
          color="#87CEEB"
          transparent
          opacity={0.1}
        />
      </Sphere>
    </group>
  );
};

// Moon Component
const Moon = () => {
  const moonRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
    if (moonRef.current) {
      moonRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={orbitRef} position={[4, 2, -8]}>
      <group position={[3, 0, 0]}>
        <Sphere ref={moonRef} args={[0.4, 16, 16]}>
          <meshPhongMaterial
            color="#C0C0C0"
            shininess={10}
          />
        </Sphere>
      </group>
    </group>
  );
};

// Mars Component
const Mars = () => {
  const marsRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (marsRef.current) {
      marsRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <group position={[-6, -1, -12]}>
      <Sphere ref={marsRef} args={[1.2, 32, 32]}>
        <meshPhongMaterial
          color="#CD5C5C"
          shininess={30}
        />
      </Sphere>
    </group>
  );
};

// Saturn with Rings
const Saturn = () => {
  const saturnRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (saturnRef.current) {
      saturnRef.current.rotation.y = clock.getElapsedTime() * 0.06;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group position={[8, -3, -20]}>
      <Sphere ref={saturnRef} args={[2, 32, 32]}>
        <meshPhongMaterial
          color="#FAD5A5"
          shininess={50}
        />
      </Sphere>
      <Ring ref={ringsRef} args={[2.5, 4, 32]}>
        <meshBasicMaterial
          color="#DEB887"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </Ring>
    </group>
  );
};

// Floating Asteroids
const Asteroids = () => {
  const asteroids = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 100
        ],
        scale: Math.random() * 0.3 + 0.1,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
      });
    }
    return temp;
  }, []);

  return (
    <>
      {asteroids.map((asteroid, index) => (
        <AsteroidItem key={index} {...asteroid} index={index} />
      ))}
    </>
  );
};

const AsteroidItem = ({ position, scale, rotation, index }: any) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = rotation[0] + clock.getElapsedTime() * 0.01 * (index % 3 + 1);
      ref.current.rotation.y = rotation[1] + clock.getElapsedTime() * 0.02 * (index % 2 + 1);
      ref.current.position.z = position[2] + Math.sin(clock.getElapsedTime() * 0.1 + index) * 2;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshPhongMaterial color="#8B7355" />
    </mesh>
  );
};

// Shooting Stars/Comets
const ShootingStars = () => {
  const starsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.children.forEach((star, index) => {
        star.position.x -= 0.1 * (index % 3 + 1);
        if (star.position.x < -50) {
          star.position.x = 50;
          star.position.y = (Math.random() - 0.5) * 50;
        }
      });
    }
  });

  const comets = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 5; i++) {
      temp.push({
        position: [Math.random() * 100 - 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50],
      });
    }
    return temp;
  }, []);

  return (
    <group ref={starsRef}>
      {comets.map((comet, index) => (
        <mesh key={index} position={comet.position}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
      ))}
    </group>
  );
};

// Nebula Clouds
const Nebula = () => {
  const nebulas = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 10; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 150,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 150
        ],
        scale: Math.random() * 5 + 2,
        color: `hsl(${240 + Math.random() * 60}, 70%, ${30 + Math.random() * 20}%)`
      });
    }
    return temp;
  }, []);

  return (
    <>
      {nebulas.map((nebula, index) => (
        <mesh key={index} position={nebula.position} scale={nebula.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={nebula.color}
            transparent
            opacity={0.1}
          />
        </mesh>
      ))}
    </>
  );
};

// Main Scene Component
const GalaxyScene = () => {
  const { camera } = useThree();
  
  useFrame(({ mouse }) => {
    camera.position.x = mouse.x * 2;
    camera.position.y = mouse.y * 2;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
      />
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#FFD700" />
      
      {/* Starfield background */}
      <Stars
        radius={300}
        depth={100}
        count={5000}
        factor={10}
        saturation={0}
        fade
      />
      
      {/* 3D Space Objects */}
      <Earth />
      <Moon />
      <Mars />
      <Saturn />
      <Asteroids />
      <ShootingStars />
      <Nebula />
    </>
  );
};

// Main Galaxy Background Component
const GalaxyBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)' }}
      >
        <GalaxyScene />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;
