import { Canvas } from "@react-three/fiber";
import React from "react";
import IndexCanva from "./IndexCanva";
import "./IndexPage.css";

const IndexPage = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [0.19, 1.5, -0.19],
      }}
      style={{ zIndex: 2 }}
    >
      <IndexCanva />
    </Canvas>
  );
};

export default IndexPage;
