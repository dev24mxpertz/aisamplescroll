import React from "react";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import ContactUsSection from "./ContactUsSection";
import { CombinedMeshes } from "../CombinedMeshes";

const ContactUsCanva = () => {
 return (
   <>
     <ambientLight intensity={1} />
     <directionalLight position={[5, 5, 5]} />
     <OrbitControls enableZoom={false} />
     <ScrollControls pages={1} damping={1.25}>
       <Scroll>
         <ContactUsSection />
         <CombinedMeshes position={[0, 0, -18]} />
       </Scroll>
     </ScrollControls>
   </>
 );
}

export default ContactUsCanva