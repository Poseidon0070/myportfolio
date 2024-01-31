import React from 'react'
import { useMediaQuery } from '@mui/material';
import "bootstrap-icons/font/bootstrap-icons.css";
import { PencilSquare } from 'react-bootstrap-icons'
import { PcDisplay } from 'react-bootstrap-icons'

function Services() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <section id="services" className="full-height px-lg-5">
                <div className="container">

                    <div className="row pb-4" data-aos="fade-down">
                        <div className="col-lg-8">
                            <h6 className="text-brand">SERVICES</h6>
                            <h1>Services That I Provide</h1>
                        </div>
                    </div>

                    <div className="row gy-4">

                        <div className="col-md-6" data-aos="fade-right" data-aos-delay="200">
                            <div className="service p-4 bg-base rounded-4 shadow-effect">
                                <div className="iconbox rounded-4">
                                    <PencilSquare />
                                </div>
                                <h5 className="mt-4 mb-2 text-decoration-underline">Frontend </h5>
                                <p>
                                    As a web developer with a passion for crafting immersive digital experiences, I possess a
                                    diverse skill set encompassing HTML, CSS, JavaScript with proficiency in frameworks and libraries such as Bootstrap, React, and Material UI
                                    Through my expertise in front-end development, I bring ideas by combining creativity and technical proficiency to design visually appealing and user-friendly websites and web applications.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6" data-aos="fade-left" data-aos-delay="600">
                            <div className="service p-4 bg-base rounded-4 shadow-effect">
                                <div className="iconbox rounded-4">
                                    <PcDisplay />
                                </div>
                                <h5 className="mt-4 mb-2 text-decoration-underline">Backend</h5>
                                <p>
                                    I possess a strong foundation in Node.js Express.js and the EJS template engine,
                                    powerful technologies that allow me to build robust and scalable server-side applications.
                                    With proficiency in these frameworks, I create efficient APIs and handle data flow, ensuring seamless communication between the front-end and back-end components of web applications.
                                    My knowledge also extends to working with databases, including MongoDB and SQL.
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
