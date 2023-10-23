import React from 'react'
import './About.css'
import aboutImage from '../../assets/images/man.png'

const About = () => {
    return (
        <>
            <section className="about-container" id='about'>
                <h1 className="section-title about">About</h1>
                <div className="about-wrapper">
                    <main className="about-image">
                        <img src={aboutImage} alt="" />
                    </main>
                    <main className="about-text">
                        <h1 className='about-title'>Muhamad Kopal</h1>
                        <p className='about-subtitle'>Halo, perkenalkan, Nama saya Muhamad Kopal Al Jamili. Saya adalah seorang Junior Frontend Developer dengan semangat dan dedikasi untuk teknologi serta pemrograman. Dengan lebih dari setahun pengalaman dalam industri ini, saya telah membangun dasar yang kuat dalam pengembangan situs web yang responsif dan menarik.</p>
                    </main>
                </div>
            </section>
        </>
    )
}

export default About 