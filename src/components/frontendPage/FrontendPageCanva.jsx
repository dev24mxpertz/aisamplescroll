import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import FrontendPageSection from "./FrontendPageSection";
import { CombinedMeshes } from "../CombinedMeshes";

const FrontendPageCanva = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={1} damping={1.25}>
        <Scroll>
          <FrontendPageSection />
          <CombinedMeshes position={[0, 0, -3]} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default FrontendPageCanva;
