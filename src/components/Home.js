import React from 'react'
import '../css/index.css'
import { useMediaQuery } from '@mui/material';

function Home() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <section id="home" className="full-height px-lg-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10">
                            <h1 className="display-4 fw-bold mb-5" data-aos="fade-down">Hi, I'M Shikhar Reyya<br /> <span className="text-brand">
                                Mern Stack Developer</span></h1>
                            <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">I am well-organized and goal-oriented undergrad with a strong foundation in MERN stack technologies, adept in working in both
                                front-end and back-end with efficiency and quality. Strong problem-solving skills and eager to join a dynamic and collaborative
                                development team to contribute my expertise and help to create innovative and effective solutions for real-world problems.</p>
                            <div className="d-flex align-items-center mt-5">
                                <div className='resume'>
                                <button data-aos="fade-right" data-aos-delay="600" onClick={() => window.open(require('../assets/images/Shikhar_Resume.pdf'), '_blank')} className="btn resume btn-brand btn-lg btn-outline-dark me-4">
                                    <a href={require('../assets/images/Shikhar_Resume.pdf')} style={{ textDecoration: "none",color:"#491d1d" }} target='_blank' rel="noreferrer">Resume</a>
                                </button>
                                </div>
                                <a data-aos="fade-left" data-aos-delay="600" href="!#" className="link-custom"><span className="h5" style={{ fontFamily: "monospace" }}>Call:(+91) 9179104891</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 

export default Home
