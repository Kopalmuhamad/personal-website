import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <main className="footer-wrapper">
                    <div className="box-footer sosial-media">
                        <a href="#" className='sosial-icon'><i className='bx bxl-instagram'></i></a>
                        <a href="#" className='sosial-icon'><i className='bx bxl-whatsapp'></i></a>
                        <a href="#" className='sosial-icon'><i className='bx bxl-github'></i></a>
                        <a href="#" className='sosial-icon'><i className='bx bxl-linkedin'></i></a>
                    </div>
                    <div className="box-footer address">
                        <span><i className='bx bxs-pin'></i> Kp.Tulus redjo, RT.004/RW.003,Kel. Muarasari,Kec. Bogor selatan, Kota Bogor</span>
                    </div>
                </main>
                <div className="copyright">
                    <span>Copyright &copy; 2021</span>
                </div>
            </footer>
        </>
    )
}

export default Footer