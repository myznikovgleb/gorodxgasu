import React from 'react'
import './App.css'
import './index.css'
import Card from './Projects.jsx'
import datacards from './dataProjects.jsx'
import Logos from './Logos.jsx'
import datalogos from './dataLogos.jsx'
import { useRef } from 'react'
import { gsap } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import RunningLine from './runningLine.jsx'
import './runningLine.css'
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

  
  const cards = datacards.map(item => {
    return (
      <Card 
        name={item.name}
        location={item.location}
        characteristics={item.characteristics}
        link={item.link}
      />
    )
  })
  const logos = datalogos.map(item => {
    return (
      <Logos
        siteLink={item.siteLink}
        imgLink={item.imgLink}
      />
    )
  })



  
    
  return (
    
    <div>

      {logos}
      
      <RunningLine/>

      {/* <MovingText /> */}

      <My3DModel />
      
      <My3DModelTwo />

      <My3DModelThree />
      
      
      <h1 className='card block' style={{ marginTop: '350px', userSelect: 'none'}}>Projects</h1>

      <button className="projectsButton">
        About us
      </button>

      <button className="projectsButton" onClick={() => scrollTo(artRef1.current)}>
        Projects
      </button>

      <button className="testsButton" onClick={() => scrollTo(artRef2.current)}>
        Tests
      </button>
      
      <section ref={ artRef1 }>

        {cards} 
        
      </section>

      <section ref={ artRef2 }>

        Test Section

      </section>
      
      <p className="read-the-docs">
        The project for students and teachers by SK Gorod
      </p>

    </div>
    )
}

export default App
