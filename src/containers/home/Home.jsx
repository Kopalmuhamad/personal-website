import React from 'react'
import './Home.css'
import homeImage from '../../assets/images/man.png'
import { Button } from '../../components/IndexComponents'

function Home() {
    return (
        <>
            <section className="home-container">
                <main className="home-image">
                    <img src={homeImage} alt="" />
                </main>
                <main className="home-text">
                    <h1 className="home-title">Hi, I'm Muhamad Kopal</h1>
                    <h2 className="home-subtitle">I'm a Frontend web Developer</h2>
                    <Button text={'For More'} />
                </main>
            </section>
        </>
    )
}

export default Home