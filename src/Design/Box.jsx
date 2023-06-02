import { useRef } from "react";
import { useFrame , Canvas } from "@react-three/fiber";
import * as THREE from "three"; // Ajoutez cette ligne pour importer THREE

import React from 'react';

function Box() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.x += 0.01;
  });

  return (
      <mesh ref={mesh}>
        <boxBufferGeometry />
        <boxGeometry args={[1, 1, 1]}  />
        <meshStandardMaterial color={new THREE.Color("red")} /> {/* Utilisez THREE.Color */}
      </mesh>
  );
}

export default Box;
