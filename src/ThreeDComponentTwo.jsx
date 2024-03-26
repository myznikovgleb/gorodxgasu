import { Canvas } from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'

const My3DModelTwo = () => {
  let fbx = useFBX('ЗД.fbx')

  return (
    <div style={{ width: '100%', height: '400px', zIndex: 1, position: 'absolute', left: '0', top: '500px', overflow: 'visible'}} className="model">
      <Canvas>
        <OrbitControls />
        
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <primitive object={fbx} />
      </Canvas>
    </div>
  )
}
  
  export default My3DModelTwo;
