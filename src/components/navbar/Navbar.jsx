import React, { useState } from 'react'
import './Navbar.css'
import { Button, Toggle } from '../IndexComponents'

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <section className="navbar-container container">
                <main className="navbar-wrapper wrapper">
                    <a href='#' className={'navbar-logo'} to={''}>Personal Web</a>
                    <ul className={`navbar-list ${menu ? 'active' : ''}`}>
                        <li className="list-item"><a href='#' className="link">Home</a></li>
                        <li className="list-item"><a href='#about' className="link">About</a></li>
                        <li className="list-item"><a href='#portfolio' className="link">Portfolio</a></li>
                        <li className="list-item"><Button className={`message-button`} text={'Get in touch'} href='#contact' /></li>
                    </ul>
                    <Toggle onClick={handleMenu} icon={menu ? 'bx bx-x' : 'bx bx-menu'} className={'navbar-toggle'} />
                </main>
            </section>
        </>
    )
}

export default Navbar