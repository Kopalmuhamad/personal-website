import React from 'react'
import './Portfolio.css'

import projectImage from '../../assets/images/movieRated.png'
import { Button } from '../../components/IndexComponents'

const Portfolio = () => {
    return (
        <>
            <section id='portfolio' className="portfolio-container">
                <h1 className="section-title portfolio">Portfolio</h1>
                <div className="portfolio-wrapper card-container">
                    <div className="card">
                        <div className="card-image">
                            <img src={projectImage} alt="" />
                        </div>
                        <div className="card-text">
                            <h1 className="card-title">Movie Rated</h1>
                            <p className="card-subtitle">Movie Rated adalah sebuah website rating sebuah film yang di buat menggunakan Framework React.js dan menggunakan API yang dinamis dari TMDB API</p>
                        </div>
                        <div className="card-button">
                            <Button text={'Visit'} icon={'bx bxs-show'} href={'https://movie-rated.vercel.app'} />
                            <Button text={'Demo'} icon={'bx bxl-github'} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio