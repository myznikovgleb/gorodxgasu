import React from 'react'
import './Projects.css'


function Card(props) {
    return (
        <div className="card">
            <img src="/shpunt.jpg" className="card--image" />
            <div className="card--stats">
                <span>{props.name}</span>
                <span className="gray"> • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.characteristics}</p>
        </div>
    )
}


export default Card