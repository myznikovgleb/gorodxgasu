import React, { useState } from 'react'
import './Projects.css'
import './index.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';



const ModelWindow = ({ isOpen, onClose }) => {
    return (
      <div className={`model-window ${isOpen ? 'open' : ''}`}>
        <div className="model-content">
          {isOpen && (
            <Canvas>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <directionalLight intensity={0.5} />
              <Model />
            </Canvas>
          )}
        </div>
      </div>
    );
  };


  


  const Model = () => {
    const fbx = useFBX('nodeMortgage1.fbx');
    return <primitive object={fbx} />;
  };



const Card = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isWindowOpen, setIsWindowOpen] = useState(false);
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
    };
  
    const handleToggleWindow = () => {
      setIsWindowOpen((prevState) => !prevState);
    };
  
    const cards = [
      {
        imageUrl: '/shpunt.jpg',
        name: 'Наименование 1',
      },
      {
        imageUrl: '/area.jpg',
        name: 'Наименование 2',
      },
    ];
  
    const currentCard = cards[activeIndex];
  
    return (
      <div className="card-container">
        <div className="card">
          <img src={currentCard.imageUrl} className="card--image" />
        </div>
        <div className="card--content">
          <div className="card--stats">
            <span>{currentCard.name}</span>
          </div>
          <div className="card--buttons">
            <button className="projectsButton" style={{ marginLeft: '40px' }}>
              Information
            </button>
            <button className="projectsButton" onClick={handleToggleWindow}>
              Show 3D model
            </button>
          </div>
        </div>
        
        <button className="arrow prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="arrow next" onClick={handleNext}>
          Next
        </button>
        
        <ModelWindow isOpen={isWindowOpen} onClose={() => setIsWindowOpen(false)} />
        
      </div>
      
    );
  };

  export default Card;