import React from 'react'
import './Projects.css'


function Card() {
    return (
        <div className="card">
            <img src="/shpunt.jpg" className="card--image" />
            <div className="card--stats">
                <span>Object's name</span>
                <span className="gray"> • </span>
                <span className="gray">Location</span>
            </div>
            <p>Characteristics</p>
        </div>
    )
}


export default Card












