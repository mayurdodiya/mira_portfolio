import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

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
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshPhongMaterial color="#4A90E2" shininess={100} specular="#ffffff" />
      </mesh>
      {/* Earth's atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial color="#87CEEB" transparent opacity={0.1} />
      </mesh>
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
        <mesh ref={moonRef}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshPhongMaterial color="#C0C0C0" shininess={10} />
        </mesh>
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
      <mesh ref={marsRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhongMaterial color="#CD5C5C" shininess={30} />
      </mesh>
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
      <mesh ref={saturnRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial color="#FAD5A5" shininess={50} />
      </mesh>
      {/* Saturn rings */}
      <mesh ref={ringsRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 4, 32]} />
        <meshBasicMaterial
          color="#DEB887"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Simplified Asteroids with better performance
const Asteroids = () => {
  const asteroids = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 60,
        ] as [number, number, number],
        scale: Math.random() * 0.2 + 0.1,
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
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

const AsteroidItem = ({
  position,
  scale,
  rotation,
  index,
}: {
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
  index: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x =
        rotation[0] + clock.getElapsedTime() * 0.01 * ((index % 3) + 1);
      ref.current.rotation.y =
        rotation[1] + clock.getElapsedTime() * 0.02 * ((index % 2) + 1);
      ref.current.position.z =
        position[2] + Math.sin(clock.getElapsedTime() * 0.1 + index) * 1;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={[scale, scale, scale]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshPhongMaterial color="#8B7355" />
    </mesh>
  );
};

// Simplified Shooting Stars
const ShootingStars = () => {
  const starsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.children.forEach((star, index) => {
        star.position.x -= 0.05 * ((index % 3) + 1);
        if (star.position.x < -30) {
          star.position.x = 30;
          star.position.y = (Math.random() - 0.5) * 20;
        }
      });
    }
  });

  const comets = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 3; i++) {
      temp.push({
        position: [
          Math.random() * 50 - 25,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 30,
        ] as [number, number, number],
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

// Simplified Nebula
const Nebula = () => {
  const nebulas = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 5; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 80,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 80,
        ] as [number, number, number],
        scale: Math.random() * 3 + 1,
        color: `hsl(${240 + Math.random() * 60}, 70%, ${
          30 + Math.random() * 20
        }%)`,
      });
    }
    return temp;
  }, []);

  return (
    <>
      {nebulas.map((nebula, index) => (
        <mesh 
          key={index} 
          position={nebula.position} 
          scale={[nebula.scale, nebula.scale, nebula.scale]}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={nebula.color} transparent opacity={0.1} />
        </mesh>
      ))}
    </>
  );
};

// Main Scene Component
const GalaxyScene = () => {
  const { camera } = useThree();

  useFrame(({ mouse }) => {
    if (!isNaN(mouse.x) && !isNaN(mouse.y)) {
      camera.position.x = mouse.x * 1;
      camera.position.y = mouse.y * 1;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[0, 0, 0]} intensity={0.3} color="#FFD700" />

      {/* Starfield background */}
      <Stars
        radius={200}
        depth={50}
        count={3000}
        factor={8}
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
        style={{
          background:
            "radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
        }}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
        }}
      >
        <GalaxyScene />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;