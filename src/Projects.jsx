import React from 'react'
import './Projects.css'
//import My3DModel from './ThreeDComponent.jsx'


function Card(props) {
    return (
        <div>
            <div className="card">
                
                <img src="/shpunt.jpg" className="card--image" />
                
            </div>
            <div className="card--stats">
                <span>{props.name}</span>
                <span className="gray"> • </span>
                <span className="gray">{props.location}</span>
                <p>{props.characteristics}</p>
            </div>
        </div>
        
    )
}


export default Card