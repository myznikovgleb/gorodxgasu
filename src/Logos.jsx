import React from 'react'
import './App.css'


function Logos(props) {
    return (
        <a href={props.siteLink} target="_blank">
        <img src={props.imgLink} className="logo"/>
        </a>
    )
}

export default Logos