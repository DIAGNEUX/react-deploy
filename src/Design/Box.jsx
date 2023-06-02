import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import state from './State';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

const Box = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/shirt_baked.glb`);


  const stateString = JSON.stringify(snap);

  useFrame(() => {
    // Mettez ici votre logique d'animation si nécessaire
  });

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.material}
        dispose={null}
        scale={[10, 10, 10]}
      />
    </group>
  );
};

export default Box;
