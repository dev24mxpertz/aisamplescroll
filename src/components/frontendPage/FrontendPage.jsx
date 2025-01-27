import { Canvas } from '@react-three/fiber';
import React from 'react'
import FrontendPageCanva from './FrontendPageCanva';

const FrontendPage = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0.19, 1.5, -0.19],
      }}
      style={{ zIndex: 2 }}
    >
      <FrontendPageCanva />
    </Canvas>
  );
}

export default FrontendPage