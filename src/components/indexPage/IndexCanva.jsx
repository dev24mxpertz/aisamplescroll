import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import IndexSection from "./IndexSection";
import { CombinedMeshes } from "../CombinedMeshes";

const IndexCanva = () => {
  // const totalPages = 8;

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={8} damping={1.25}>
        <Scroll>
          <IndexSection />
          <CombinedMeshes position={[0, 0, -3]} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default IndexCanva;
