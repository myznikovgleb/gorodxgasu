import React from 'react'
import './index.css'


function Buttons(props) {
    return (
        <button className={props.style}>
          {props.buttonName}
        </button>
    )
}

export default Buttons