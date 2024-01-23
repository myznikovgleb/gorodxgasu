import React from 'react'
// import gasuLogo from '/gasu.svg'
// import gorodLogo from '/gorod.svg'
import './App.css'
import Card from './Projects.jsx'
import datacards from './dataProjects.jsx'
import Logos from './Logos.jsx'
import datalogos from './dataLogos.jsx'

function App() {
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
    

    
      // {/* <div>
      //   <a href="https://www.sk-gorod.com/" target="_blank">
      //     <img src={gorodLogo} className="logo" alt="Gorod logo" />
      //   </a>
      //   <a href="https://www.spbgasu.ru/" target="_blank">
      //     <img src={gasuLogo} className="logo gasu" alt="Gasu logo" />
      //   </a>
      // </div> */}
      // <>
      // <h1>Gorod x Gasu</h1>
      // <div className="card">
      //   <button className="projectsButton">
      //     Projects
      //   </button>

      //   <button className="testsButton">
      //     Tests
      //   </button>
      // </div>
      {/* <p className="read-the-docs">
        The project for students and teachers by SK Gorod
      </p> */}
      return (

        <div>
          {logos}
          {cards}
        </div>
      )
      
    // </>
      
  
}

export default App
