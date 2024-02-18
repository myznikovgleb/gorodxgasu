import React from 'react'

export default function Loader() {
    const style = {
        height: '150px',
        // width:'200px',
        margin:'0 auto',
        // background: 'green',
        textAlign:'center',
        color:'grey',
        textTransform: 'uppercase',
        // paddingTop: '10px',
        animation: 'text 10s infinite linear',
        paddingLeft: '100%',
        whiteSpace: 'nowrap',
    }
    return (
        <div style={style}> <h1>Gorod X Gasu</h1>
        <style>{`
            @keyframes text {
                 0% { transform: translate(0, 0); }
                 100% { transform: translate(-160%, 0); }
            }
        `}</style>
        </div>
    )
}

