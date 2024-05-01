import React, { useState }from 'react'
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
    const fbx = useFBX('nodeCorner.fbx');
  
    return <primitive object={fbx} />;
  };
  
  const Card = (props) => {
    const [isWindowOpen, setIsWindowOpen] = useState(false);
  
    const handleToggleWindow = () => {
      setIsWindowOpen((prevState => !prevState));
    };
  
    return (
      <div className="card-container">
        <div className="card">
          <img src={props.link} className="card--image"/>
        </div>
        <div className="card--content">
          <div className="card--stats">
            <span>{props.name}</span>
          </div>
          <div className="card--buttons">
            <button className='projectsButton' style={{ marginLeft: '40px' }}>Information</button>
            <button className='projectsButton' onClick={handleToggleWindow}>Show 3D model</button>
          </div>
        </div>
        <ModelWindow isOpen={isWindowOpen} />
      </div>
    );
  };
  
  export default Card;

  
// function Card(props) {
//     return (
//         <div className="card-container">
//             <div className="card">
                
//                 <img src={props.link} className="card--image"/>

//             </div>
//             <div className="card--content">
//                 <div className="card--stats">
//                     <span>{props.name}</span>
//                     
//                 </div>
//                 <div className="card--buttons" >

//                     <button className='projectsButton' style={{ marginLeft: '40px' }}>Information</button>

                    

//                     <button className='projectsButton'>Show 3D model</button>

//                 </div>
//             </div>
//         </div>
        
//     )
// }


// export default Card

