import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section className="contact-container" id='contact'>
                <h1 className="section-title contact">Contact</h1>
                <form name="submit-to-google-sheet" className='contact-wrapper'>
                    <div className="box-input">
                        <label htmlFor="email">Email :</label>
                        <input name="email" type="email" placeholder="Insert your email" required />
                    </div>
                    <div className="box-input">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder='Write here!'></textarea>
                    </div>
                    <button className='button' type="submit">Send</button>
                </form>
            </section>
        </>
    )
}

export default Contact