import React from 'react'
import './App.css'


function Logos(props) {
    return (
        <div>
            <a href={props.siteLink} target="_blank">
            <img src={props.imgLink} className="logo"/>
            </a>
        </div>
    )
}

export default Logos