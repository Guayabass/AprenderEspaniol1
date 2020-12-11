import React from 'react';


const buildColor = (color) => {
    return {
        color
    }
}

function Brick({color, text, onClick, id}){
    return(
    <div className="brick-container" onClick={onClick}>
        <div className="brick" style={buildColor(color)} id={id}>
            <p className="vertical-center">{text}</p>
        </div>
    </div>
    )
}

export default Brick