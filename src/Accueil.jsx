import React from 'react'
import Box from './Design/Box';
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"; 

const Accueil = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <Canvas >
      <ambientLight />
      <pointLight position={[10 , 10 , 10]} />
      <Box/>
      </Canvas>    
    </div>
  )
}

export default Accueil