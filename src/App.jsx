import React from 'react'
import './App.css'
import './index.css'
import Card from './Projects1.jsx'
// import Swipe from './Swipe.jsx'
// import datacards from './dataProjects.jsx'
import Logos from './Logos.jsx'
import datalogos from './dataLogos.jsx'
import { useRef } from 'react'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import RunningLine from './runningLine.jsx'
//import { useLayoutEffect } from 'react'
// import MovingText from './tryRunningLine.jsx'
import My3DModel from './ThreeDComponent.jsx'
import My3DModelTwo from './ThreeDComponentTwo.jsx'
import My3DModelThree from './ThreeDComponentThree.jsx'




function App() {
  
  //скролл на нужный раздел//
  gsap.registerPlugin(ScrollToPlugin);
  const artRef1 = useRef(null);
  const artRef2 = useRef(null);
  const scrollTo = (target) => 
  gsap.to(window, { duration: 1, scrollTo: target });

  
  // const cards = datacards.map(item => {
  //   return (
  //     <Card
  //       name={item.name}
  //       location={item.location}
  //       characteristics={item.characteristics}
  //       link={item.link}
  //     />
  //   )
  // })
  const logos = datalogos.map(item => {
    return (
      <Logos
        siteLink={item.siteLink}
        imgLink={item.imgLink}
      />
    )
  })

//часть для свайпа//
  // const [activeIndex, setActiveIndex] = useState(0);

  // const swipes = ['Swipe']; 

  // const handlePrev = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === 0 ? swipes.length - 1 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === swipes.length - 1 ? 0 : prevIndex + 1));
  // };
  
//часть для свайпа//
    
  return (
    
    <div style={{ margin: '2px'}}>

      {logos}
      

      <RunningLine />

      {/* <MovingText /> */}

      <My3DModel />
      
      <My3DModelTwo />

      <My3DModelThree />
      
      
      <h1 className='card block' style={{ marginTop: '380px', userSelect: 'none', marginBottom: '0px',}}>Projects</h1>
      <div>
      <button className="projectsButton">
        About us
      </button>

      <button className="projectsButton" onClick={() => scrollTo(artRef1.current)}>
        Projects
      </button>

      <button className="testsButton" onClick={() => scrollTo(artRef2.current)}>
        Tests
      </button>
      </div>
    
      <section ref={ artRef1 }>

        {/* {cards}  */}

        {/* <div className="swipe-container">
      {swipes.map((content, index) => (
        <Swipe key={index} content={content} isActive={index === activeIndex} />
      ))}
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div> */}
    
        <Card />

      </section>

      <section ref={ artRef2 } style={{ marginTop: '650px'}}>

        Test Section

      </section>
      
      <p className="read-the-docs">
        The project for students and teachers by SK Gorod
      </p>

    </div>
    )
}

export default App
