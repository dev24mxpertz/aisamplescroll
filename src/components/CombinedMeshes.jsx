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
import firsttexture from "../assets/blacktexture.jpg";
import orangestriplinetexture from "../assets/orangestriplinetexture.jpg";

const Floor_Height = 10;
const radius = 3;

export const CombinedMeshes = ({ position, ...props }) => {
  const ref = useRef();
  const scroll = useScroll();

  const textures = [useTexture(firsttexture)];
  const mountTextures = [useTexture(orangestriplinetexture)];

  useFrame(({ camera }) => {
    const progress = scroll.offset;
    let activeTexture = null;

    const quarterProgress = 0.25;
    const halfProgress = 0.5;
    const threeQuarterProgress = 0.75;
    const fullProgress = 1.0;

    if (progress <= quarterProgress) {
      const localProgress = progress / quarterProgress;
      camera.position.x = 0.19;
      camera.position.y = 1.5;
      camera.position.z = -0.19;
      activeTexture = textures[0]; // Set for all meshes except Mounts

      if (ref.current) {
        ref.current.position.x = localProgress;
        ref.current.position.y = 0;
        ref.current.position.z = -localProgress * 4;
      }
    } else if (progress > quarterProgress && progress <= halfProgress) {
      const localProgress = (progress - quarterProgress) / halfProgress;
      camera.position.z = localProgress - 0.2;
      activeTexture = textures[0]; // Set for all meshes except Mounts

      if (ref.current) {
        // Handle positioning logic if needed
      }
    } else if (progress > halfProgress && progress <= threeQuarterProgress) {
      const localProgress = (progress - halfProgress) / quarterProgress;
      camera.position.y = localProgress + 6;
      camera.position.z = localProgress + 0.29;
      activeTexture = textures[0]; // Set for all meshes except Mounts

      if (ref.current) {
        // Handle positioning logic if needed
      }
    } else if (progress > threeQuarterProgress && progress <= fullProgress) {
      const localProgress = (progress - threeQuarterProgress) / quarterProgress;
      activeTexture = textures[0]; // Set for all meshes except Mounts

      if (ref.current) {
        ref.current.position.y = -localProgress - 2;
        ref.current.position.z = -localProgress - 3;
      }
    }

    if (ref.current) {
      ref.current.children.forEach((group) => {
        group.children.forEach((subgrp) => {
          subgrp.children.forEach((mesh, index) => {
            // Assign textures to Mount meshes based on the group
            if (mesh.material) {
              if (
                group === ref.current.children[4] ||
                group === ref.current.children[5] ||
                group === ref.current.children[6] ||
                group === ref.current.children[7]
              ) {
                // This is a Mount group (Mounta, Mountb, Mountc, Mountd)
                mesh.material.map = mountTextures[0];
              } else {
                // This is not a Mount group, assign the active texture
                mesh.material.map = activeTexture;
              }
              mesh.material.needsUpdate = true;
            }
          });
        });
      });
    }

    camera.lookAt(0, 0, 0);
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
