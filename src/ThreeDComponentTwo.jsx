import { useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'

const RotatingModelTwo = () => {
  let fbx = useFBX('ЗД.fbx')
  let modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.05;
    }
  });

  return (
    <primitive object={fbx} ref={modelRef} />
  );
};

  const My3DModelTwo = () => {
    return (
    <div style={{ 

      width: '30%', 
      height: '400px', 
      zIndex: 1, 
      position: 'absolute', 
      left: '30%',
      top: '200px',  
      overflow: 'visible',
      
      }} className="model">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <RotatingModelTwo />
      </Canvas>
    </div>
  )
}
  
  export default My3DModelTwo;
