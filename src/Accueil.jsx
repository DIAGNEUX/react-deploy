import React from 'react';
import Box from './Design/Box';
import { Canvas } from '@react-three/fiber';

const Accueil = () => {
  return (
    <div>
      <div>
        <div className='flex_presentation'>
        <div className='presentation'>
          <p>Bonjour je m'appelle <span>Mame Diarra Niang</span> <br /></p>
          <p>Etudiante en bts Sio option SISR</p>
        </div>
        </div>
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
