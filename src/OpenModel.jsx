import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';

const ModelWindow = ({ isOpen, onClose }) => {
  return (
    <div className={`model-window ${isOpen ? 'open' : ''}`}>
      <div className="model-content">
        
        {isOpen && (
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.1} />
            <directionalLight color="grey" position={[10, 10, 10]} />
            <Model />
          </Canvas>
        )}
      </div>
    </div>
  );
};

const Model = () => {
  const fbx = useFBX('nodeTube.fbx');

  return <primitive object={fbx} />;
};

const ModelOpen = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const handleToggleWindow = () => {
    setIsWindowOpen(prevState => !prevState);
  };

  return (
    <div className="projectsButton">
      <button onClick={handleToggleWindow}>Show 3D model</button>
      <ModelWindow isOpen={isWindowOpen} />
    </div>
  );
};

export default ModelOpen;