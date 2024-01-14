import { useState } from 'react'
import gasuLogo from '/gasu.svg'
import gorodLogo from '/gorod.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://www.sk-gorod.com/" target="_blank">
          <img src={gorodLogo} className="logo" alt="Gorod logo" />
        </a>
        <a href="https://www.spbgasu.ru/" target="_blank">
          <img src={gasuLogo} className="logo gasu" alt="Gasu logo" />
        </a>
      </div>
      <h1>Gorod x Gasu</h1>
      <div className="card">
        <button>
          Projects
        </button>

        <button>
          Tests
        </button>
      </div>
      <p className="read-the-docs">
        The project for students and teachers by SK Gorod
      </p>
    </>
  )
}

export default App
