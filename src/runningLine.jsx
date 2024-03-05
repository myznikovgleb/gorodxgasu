import React from 'react'

export default function Loader() {
    const style = {
        //margin:'0 auto',
        display: 'block',
        background: 'green',
        color:'grey',
        animation: 'marquee 10s infinite linear',
        //paddingLeft: '100%',
        whiteSpace: 'nowrap',
        width: '100%',
    }
    return (
        <div style={style}> 
        <h1>Gorod X Gasu Gorod X Gasu Gorod X Gasu</h1>
        <style>{`
            @keyframes marquee {
                 0% { transform: translate(0, 0); }
                 100% { transform: translate(-100%, 0); }
            }
        `}</style>
        </div>
    )
}

