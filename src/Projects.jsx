import React from 'react'
import './Projects.css'


function Card(props) {
    return (
        <div className="card-container">
            <div className="card">
                
                <img src={props.link} className="card--image"/>

            </div>
            <div className="card--content">
                <div className="card--stats">
                    <span>{props.name}</span>
                    <span className="gray"> • </span>
                    <span className="gray">{props.location}</span>
                    <p>{props.characteristics}</p>
                </div>
                <div className="card--buttons">

                    <button style={{ marginRight: '10px' }}>Information</button>

                    <button>Show 3D model</button>

                </div>
            </div>
        </div>
        
    )
}


export default Card