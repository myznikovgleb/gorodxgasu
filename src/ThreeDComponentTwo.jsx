import { useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'

const RotatingModelTwo = ({isRotating, setIsRotating}) => {
  let fbx = useFBX('nodeMortgage.fbx')
  let modelRef = useRef();

  useFrame(() => {
    if (isRotating && modelRef.current) {
      modelRef.current.rotation.y += 0.01;
      // modelRef.current.rotation.z += 0.01;
      modelRef.current.rotation.x += 0.01;
    }
  });

  const handleModelClick = () => {
    setIsRotating(prevState => !prevState);
  };

  return (
    <primitive object={fbx} ref={modelRef} onClick={handleModelClick}/>
  );
};

  const My3DModelTwo = () => {
    const[isRotating, setIsRotating] = useState(true);
    return (
    <div style={{ 

      width: '33%', 
      height: '400px', 
      zIndex: 1, 
      position: 'absolute', 
      left: '33%',
      top: '200px',  
      overflow: 'visible',
      
      }} className="model">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <RotatingModelTwo isRotating={isRotating} setIsRotating={setIsRotating}/>
      </Canvas>
    </div>
  )
}
  
  export default My3DModelTwo;
