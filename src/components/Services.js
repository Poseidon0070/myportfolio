import React from 'react'
import { useMediaQuery } from '@mui/material';
import "bootstrap-icons/font/bootstrap-icons.css";
import { PencilSquare, PcDisplay } from 'react-bootstrap-icons';

function Services() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <section id="services" className="full-height px-lg-5">
                <div className="container">

                    <div className="row pb-4" data-aos="fade-down">
                        <div className="col-lg-8">
                            <h6 className="text-brand">SERVICES</h6>
                            <h1>What I Offer</h1>
                        </div>
                    </div>

                    <div className="row gy-4">

                        {/* Frontend */}
                        <div className="col-md-6" data-aos="fade-right" data-aos-delay="200">
                            <div className="service p-4 bg-base rounded-4 shadow-effect">
                                <div className="iconbox rounded-4">
                                    <PencilSquare />
                                </div>
                                <h5 className="mt-4 mb-2 text-decoration-underline">Frontend Development</h5>
                                <p>
                                    I specialize in building scalable, responsive, and visually engaging user interfaces 
                                    using modern frameworks such as <strong>React.js</strong>, <strong>Next.js</strong>, 
                                    and UI libraries like <strong>Material UI</strong>, <strong>Mantine</strong>, 
                                    and <strong>TailwindCSS</strong>.  
                                    From SaaS platforms to interactive visualizers, I focus on delivering seamless 
                                    user experiences, ensuring optimized performance, accessibility, and maintainability.
                                </p>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="col-md-6" data-aos="fade-left" data-aos-delay="600">
                            <div className="service p-4 bg-base rounded-4 shadow-effect">
                                <div className="iconbox rounded-4">
                                    <PcDisplay />
                                </div>
                                <h5 className="mt-4 mb-2 text-decoration-underline">Backend Development</h5>
                                <p>
                                    I design and implement robust backend systems using <strong>Node.js</strong>, 
                                    <strong>Express.js</strong>, <strong>NestJS</strong>, and <strong>FastAPI</strong>.  
                                    My expertise includes creating secure APIs, managing authentication, and 
                                    architecting efficient serverless solutions with <strong>AWS</strong>.  
                                    I have hands-on experience with both SQL and NoSQL databases, including 
                                    <strong>MongoDB</strong>, <strong>MySQL</strong>, and <strong>Redis</strong>, ensuring 
                                    scalable and high-performance applications.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services
