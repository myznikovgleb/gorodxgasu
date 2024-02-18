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
import Loader from './runningLine.jsx'
//import './runningLine.css'
//import { useLayoutEffect } from 'react'




function App() {
  
  //скролл на нужный раздел//
  gsap.registerPlugin(ScrollToPlugin);
  const artRef1 = useRef(null);
  const artRef2 = useRef(null);
  const scrollTo = (target) => 
  gsap.to(window, { duration: 1, scrollTo: target });

  //бегущая строка//
  // const textRef = useRef(null);
  // constspanRef = useRef(null);
  // useLayoutEffect (() => {
  //     gsap.fromTo(
  //         textRef.current,
  //             { x: -spanRef.current.clientWidth + "px" },
  //             { x: 0, duration: 5, repeat: -1, ease: "none" }
  //     );
  // }, []);


  const cards = datacards.map(item => {
    return (
      <Card 
        name={item.name}
        location={item.location}
        characteristics={item.characteristics}
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

      
      {/* <section>
        <div className="container"> 

          <p className="text" ref={textRef}>
            <span ref={spanRef}>Hello, World!!! </span> 
            <span>Hello,World!!!</span>
            <span>Hello,World!!!</span>
            <span>Hello,World!!!</span>
            <span>Hello,World!!!</span>
            <span>Hello,World!!!</span>
            <span>Hello,World!!!</span>
          </p>
        
        </div>
      </section> */}
            
      
      {logos}

      <Loader/>
      {/* <h1 className="card block">Gorod x Gasu</h1> */}
      

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
