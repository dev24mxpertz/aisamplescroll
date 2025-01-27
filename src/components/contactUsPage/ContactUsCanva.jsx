import React, { useState, useEffect } from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import ContactUsSection from "./ContactUsSection";
import { CombinedMeshes } from "../CombinedMeshes";

const ContactUsCanva = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this breakpoint as needed
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
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={isMobile ? 1.2 : 1} damping={1.25}>
        {" "}
        {/* Set pages to 2 for mobile */}
        <Scroll>
          <ContactUsSection />
          <CombinedMeshes position={[0, 0, -18]} />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default ContactUsCanva;
