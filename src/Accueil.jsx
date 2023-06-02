import React from 'react';
import Box from './Design/Box';
import { Canvas } from '@react-three/fiber';

const Accueil = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <div>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
          {/* Ajoutez d'autres cubes avec des positions différentes si nécessaire */}
        </Canvas>
      </div>
    </div>
  );
};

export default Accueil;
