import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useTexture } from "@react-three/drei";
import { Mesha } from "./Mesha";
import { Meshb } from "./Meshb";
import { Meshc } from "./Meshc";
import { Meshd } from "./Meshd";
import { Mounta } from "./Mounta";
import { Mountb } from "./Mountb";
import { Mountc } from "./Mountc";
import { Mountd } from "./Mountd";
import firsttexture from "../assets/darkshadybg.jpg"
import secondtexture  from "../assets/pinkshadetexture.jpg"
import thirdtexture from "../assets/startexture.jpg"
import fourthtexture from "../assets/photo-1530982011887-3cc11cc85693.jpg"

const Floor_Height = 10; // Height adjustment for the floor
const radius = 3; // Distance from the center of the model to the camera

export const CombinedMeshes = ({ position, ...props }) => {
  const ref = useRef();
  const scroll = useScroll();

  const textures = [
    useTexture(firsttexture),
    useTexture(secondtexture),
    useTexture(thirdtexture),
    useTexture(fourthtexture),
  ];

  useFrame(({ camera }) => {
    const progress = scroll.offset; // Scroll progress (0 to 1)
    let activeTexture = null;

    // Define breakpoints
    const quarterProgress = 0.25;
    const halfProgress = 0.5;
    const threeQuarterProgress = 0.75;
    const fullProgress = 1.0;

    if (progress <= quarterProgress) {
      // First quarter
      const localProgress = progress / quarterProgress; // Normalize between 0 and 1

      camera.position.x =  0.19;
      camera.position.y = 1.5;
      camera.position.z = -0.19;
      activeTexture = textures[0];

      if (ref.current) {
        ref.current.position.x = localProgress ;
        ref.current.position.y = 0;
        ref.current.position.z = -localProgress * 4;
      }
    } else if (progress > quarterProgress && progress <= halfProgress) {
      // Second quarter
      const localProgress = (progress - quarterProgress) / halfProgress; // Normalize

      camera.position.z = localProgress -0.2 
      activeTexture = textures[1];
      
      if (ref.current) {
        // ref.current.position.x += localProgress;
        // ref.current.position.y += localProgress;
        // ref.current.position.z -=  localProgress;
      }
    } else if (progress > halfProgress && progress <= threeQuarterProgress) {
      // Third quarter  
      const localProgress = (progress - halfProgress) / quarterProgress; // Normalize
      
      // camera.position.x = Math.sin(angle) * radius;
      camera.position.y = localProgress + 6 ;
      camera.position.z = localProgress + 0.29;
      activeTexture = textures[2];

      if (ref.current) {
        // ref.current.position.x = 40 + localProgress * 20;
        // ref.current.position.y = 0;
        // ref.current.position.z = -8 - localProgress * 4;
      }
    } else if (progress > threeQuarterProgress && progress <= fullProgress) {
      // Final quarter
      const localProgress = (progress - threeQuarterProgress) / quarterProgress; // Normalize
      activeTexture = textures[3];

      // camera.position.y = localProgress;
      // // camera.position.y = 0;
      // camera.position.z = localProgress;

      if (ref.current) {
        // ref.current.position.x = 60 + localProgress * 20;
        ref.current.position.y = - localProgress  - 2;
        ref.current.position.z = -localProgress -3;
      }
    }

    if (ref.current) {
      console.log(ref.current  , "-----ref.current--")
      ref.current.children.forEach((group) => {
        group.children.forEach((subgrp) => {
          subgrp.children.forEach((mesh) => {
            if (mesh.material) {
              mesh.material.map = activeTexture;
              mesh.material.needsUpdate = true;
            }
          })
        
        });
      });
    }
    // Ensure the camera looks at the center of the model
    camera.lookAt(0, 0, 0);

    console.log({
      progress,
      cameraPosition: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
      modelPosition: ref.current ? ref.current.position : null,
    });
  });

  return (
    <group {...props} ref={ref} position={position}>
      <group>
        <Mesha />
      </group>
      <group>
        <Meshb />
      </group>
      <group>
        <Meshc />
      </group>
      <group>
        <Meshd />
      </group>
      <group>
        <Mounta />
      </group>
      <group>
        <Mountb />
      </group>
      <group>
        <Mountc />
      </group>
      <group>
        <Mountd />
      </group>
    </group>
  );
};
