import { Canvas } from '@react-three/fiber';
import React from 'react'
import ContactUsCanva from './ContactUsCanva';

const ContactUsPage = () => {
    return (
      <Canvas
        camera={{
          fov: 64,
          position: [0.19, 1.5, -0.19],
        }}
        style={{ zIndex: 2 }}
      >
        <ContactUsCanva />
      </Canvas>
    );
}

export default ContactUsPage