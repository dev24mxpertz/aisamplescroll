import React, { useState, useEffect } from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import IndexSection from "./IndexSection";
import { CombinedMeshes } from "../CombinedMeshes";

const IndexCanva = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust for mobile screens
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls
        enableZoom={false}
        enableRotate={!isMobile}
        enablePan={true}
      />
      <ScrollControls pages={isMobile ? 9.6 : 8} damping={1.25}>
        <Scroll>
          <IndexSection />
          <CombinedMeshes position={[0, 0, -3]} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default IndexCanva;
