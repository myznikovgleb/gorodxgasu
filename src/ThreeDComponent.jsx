import { useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'



const RotatingModel = () => {
  let fbx = useFBX('untitled.fbx');
  let modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;

    }
  });



  return (
    <primitive object={fbx} ref={modelRef} />
  );
  };

  const My3DModel = () => {
    return (
  
    <div style={{ 

      width: '30%', 
      height: '400px', 
      zIndex: 1, 
      position: 'absolute', 
      left: '0', 
      top: '200px', 
      overflow: 'visible',
      

      }} className="model">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <RotatingModel />
      </Canvas>
    </div>
  )
}
  
  export default My3DModel;

