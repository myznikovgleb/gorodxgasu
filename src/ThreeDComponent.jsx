import { Canvas } from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'

const My3DModel = () => {
  let fbx = useFBX('untitled.fbx')

  return (
    <div style={{ width: '600px', height: '600px' }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="blue" position={[10, 10, 10]} />
        <primitive object={fbx} />
      </Canvas>
    </div>
  )
}
  
  export default My3DModel;

