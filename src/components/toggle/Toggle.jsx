import React from 'react'
import './Toggle.css'

const Toggle = (props) => {
    return (
        <i className={`toggle ${props.icon} ${props.className}`} onClick={props.onClick}></i>
    )
}

export default Toggle