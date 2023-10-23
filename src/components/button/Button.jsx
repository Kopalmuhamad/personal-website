import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <a href={props.href} className={` button ${props.className}`} onClick={props.onClick}>{props.text} <i className={props.icon}></i> </a>
    )
}

export default Button