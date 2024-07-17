import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={1.2}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={1}
        ambient={0.5}
        position={[5, 10, -10]}
        mapSize={2048}  // Adjust the mapSize to increase shadow resolution
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={2}
        ambient={0.8}
        position={[-5, 10, -10]}
        mapSize={2048}  // Adjust the mapSize to increase shadow resolution
      />
    </AccumulativeShadows>
  );
}

export default Backdrop;
