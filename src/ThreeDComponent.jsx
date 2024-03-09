import { Canvas } from '@react-three/fiber'
import { useFBX, OrbitControls } from '@react-three/drei'

const My3DModel = () => {
  let fbx = useFBX('3dnode.fbx')

  return (
    <div style={{ width: '1024px', height: '1024px' }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <primitive object={fbx} />
      </Canvas>
    </div>
  )
}
  
  export default My3DModel;

