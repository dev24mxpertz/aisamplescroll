import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { CombinedMeshes } from "../CombinedMeshes";
import BackendPageSection from "./BackendPageSection";

const BackendPageCanva = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={4} damping={1.25}>
        <Scroll>
          <BackendPageSection />
          <CombinedMeshes position={[0, 0, -3]} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default BackendPageCanva;
