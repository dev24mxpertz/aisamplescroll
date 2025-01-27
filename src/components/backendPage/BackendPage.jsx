import { Canvas } from "@react-three/fiber";
import React from "react";
import BackendPageCanva from "./BackendPageCanva";
import "./BackendPage.css";

const BackendPage = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0.19, 1.5, -0.19],
      }}
      style={{ zIndex: 2 }}
    >
      <BackendPageCanva />
    </Canvas>
  );
};

export default BackendPage;
