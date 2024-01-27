import React from 'react'
import './App.css'
import Card from './Projects.jsx'
import datacards from './dataProjects.jsx'
import Logos from './Logos.jsx'
import datalogos from './dataLogos.jsx'
import Buttons from './navButtons.jsx'
import databuttons from './dataButtons.jsx'

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
  const buttons = databuttons.map(item => {
    return (
      <Buttons
        style={item.style}
        buttonName={item.buttonName}
      />
    )
  })
    
  return (

    <div>
      {logos}
      <h1 className="card">Gorod x Gasu</h1>
      {buttons}
      {cards}
      <p className="read-the-docs">
        The project for students and teachers by SK Gorod
      </p>
    </div>
    )
}

export default App
