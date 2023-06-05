import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import state from './State';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

const Box = () => {
  const snap = useSnapshot(state);

const { scene: scene1 } = useGLTF(`${process.env.PUBLIC_URL}/motherboard.glb`);
const { scene: scene4 } = useGLTF(`${process.env.PUBLIC_URL}/intel.glb`);
const { scene: scene2 } = useGLTF(`${process.env.PUBLIC_URL}/hardisc.glb`);
const { scene: scene5 } = useGLTF(`${process.env.PUBLIC_URL}/usb.glb`);
const { scene: scene8 } = useGLTF(`${process.env.PUBLIC_URL}/plug.glb`);

  
  const stateString = JSON.stringify(snap);

  // Définir les positions des objets
  scene1.position.set(-12, -5, -5);
scene2.position.set(12, -5, -5);
scene4.position.set(-12, 5, -5);
scene5.position.set(12, 5, -5);
scene8.position.set(0, -5, -5); // Set position for plug.glb


const color = '#5918df';

scene1.traverse((child) => {
  if (child.isMesh) {
    child.material.color.set(color);
  }
});
scene2.traverse((child) => {
  if (child.isMesh) {
    child.material.color.set(color);
  }
});
scene4.traverse((child) => {
  if (child.isMesh) {
    child.material.color.set(color);
  }
});
scene5.traverse((child) => {
  if (child.isMesh) {
    child.material.color.set(color);
  }
});


scene8.traverse((child) => {
  if (child.isMesh) {
    child.material.color.set(color);
  }
});






useFrame((state, delta) => {
  scene1.rotation.x += 0.1 * delta;
  scene1.rotation.y += 0.2 * delta;

  scene2.rotation.x += 0.1 * delta;
  scene2.rotation.y += 0.2 * delta;

  scene4.rotation.x += 0.1 * delta;
  scene4.rotation.y += 0.2 * delta;

  scene5.rotation.x += 0.1 * delta;
  scene5.rotation.y += 0.2 * delta;

  scene8.rotation.x += 0.1 * delta; // Add rotation for plug.glb

;
});


return (
  <group key={stateString}>
    <group>
      <primitive object={scene4} dispose={null} scale={[2, 2, 2]} />
    </group>
    
    <group>
      <primitive object={scene1} dispose={null} scale={[0.2, 0.2, 0.2]} />
    </group>
    <group>
      <primitive object={scene2} dispose={null} scale={[0.5, 0.5, 0.5]} />
    </group>
    <group>
      <primitive object={scene5} dispose={null} />
    </group>
    
    <group>
      <primitive object={scene8} dispose={null} /> // Add plug.glb
    </group>
    
  </group>
);

};

export default Box;
