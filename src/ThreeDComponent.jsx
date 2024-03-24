import { Canvas } from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'

const My3DModel = () => {
  let fbx = useFBX('untitled.fbx')

  return (
    <div style={{ paddingLeft: '200px', width: '50%', height: '600px', zIndex: 1, marginTop: '0', position: 'absolute', overflow: 'visible'}} className="model">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[10, 10, 10]} />
        <primitive object={fbx} />
      </Canvas>
    </div>
  )
}
  
  export default My3DModel;

