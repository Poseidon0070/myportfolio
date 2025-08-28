import React from 'react'
import { useMediaQuery } from '@mui/material';

function About() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <section id="about" className="full-height px-lg-5">
                <div className="container">

                    <div className="row pb-4" data-aos="fade-up">
                        <div className="col-12">
                            <h1 className="display-4 fw-bold mb-4 mb-md-5 text-center text-lg-start" data-aos="fade-down">
                                <span className="text-brand">My Education and Experience</span>
                            </h1>
                        </div>
                    </div>

                    <div className="row gy-4 gy-lg-5">
                        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center">

                            <h3 className="mb-4 text-center text-lg-start" data-aos="fade-right" data-aos-delay="300">Education</h3>
                            <div className="row gy-4">

                                <div className="col-12" data-aos="fade-right" data-aos-delay="300">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>International Institute of Information Technology, Naya Raipur
                                        </h4>
                                        <div className='d-flex justify-content-between flex-column flex-sm-row'>
                                            <p className="text-brand mb-2">B.Tech CSE</p>
                                            <p className="text-brand mb-2">2023 - Present</p>
                                        </div>
                                        <p className="mb-0">Currently pursuing my B.tech in Computer Science at IIIT, Naya Raipur with a cumulative CGPA of <b>8.26.</b></p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-right" data-aos-delay="500">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Nirmal Higher Secondary School, Jagdalpur(C.G)
                                        </h4>
                                        <div className='d-flex justify-content-between flex-column flex-sm-row'>
                                            <p className="text-brand mb-2">CBSE 12th</p>
                                            <p className="text-brand mb-2">2019-20</p>
                                        </div>
                                        <p className="mb-0">Completed my senior secondary education from N.V.H.S achieving <b>91.6%</b> (Ranked 3rd in my batch).</p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-right" data-aos-delay="700">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Nirmal Higher Secondary School, Jagdalpur(C.G)
                                        </h4>
                                        <div className='d-flex justify-content-between flex-column flex-sm-row'>
                                            <p className="text-brand mb-2">CBSE 10th</p>
                                            <p className="text-brand mb-2">2017-18</p>
                                        </div>
                                        <p className="mb-0">Completed my secondary level education from N.V.H.S achieving <b>94.7% </b>(Ranked 1st in my batch).</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6 col-12">

                            <h3 className="mb-4 text-center text-lg-start" data-aos="fade-left" data-aos-delay="300">Experience</h3>
                            <div className="row gy-4">

                                <div className="col-12" data-aos="fade-left" data-aos-delay="500">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Problem Setter Intern</h4>
                                        <div className='d-flex justify-content-between flex-column flex-sm-row'>
                                            <p className='text-brand mb-1'>Heizen (formerly OpenGig)</p>
                                            <p className="text-brand mb-2">Feb 2025 - Present</p>
                                        </div>
                                        <p className="mb-0">• Led end-to-end delivery of diverse client projects, spanning finance data pipeline development to building AI agents from scratch,
                                            ensuring alignment with complex business requirements.<br />
                                            • Designed and implemented scalable, high-performance solutions using latest tech stacks including React, Next.js, FastAPI,
                                            NestJS.<br />
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-left" data-aos-delay="700">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Frontend Developer Intern</h4>
                                        <div className='d-flex justify-content-between flex-column flex-sm-row'>
                                            <p className='text-brand mb-1'>VideoDubber.ai</p>
                                            <p className="text-brand mb-2">Oct 2024 - Feb 2025</p>
                                        </div>
                                        <p className="mb-0"> • Contributed to the development of a media editing SAAS application, enabling seamless manipulation of various media assets,
                                            including audio, video, and images, using Next.js and Mantine UI.<br />
                                            • Engineered the migration of SaaS app from from Page to App Router, enhancing code modularity and improving response times by
                                            15%.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12" data-aos="fade-left" data-aos-delay="300">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Research and Development Intern</h4>
                                        <div className='d-flex justify-content-between flex-column flex-sm-row'>
                                            <p className='text-brand mb-1'>Samsung PRISM</p>
                                            <p className="text-brand mb-2">July 2023 - April 2024</p>
                                        </div>
                                        <p className="mb-0">• Lead the developing a text classification model using BERT to categorize different entities in text documents, enhancing data
                                            categorization and reducing misclassification by 15%.<br />
                                            • Applied hyperparameter tuning, resulting in a substantial enhancement in model performance, achieving a top-tier classification
                                            accuracy exceeding 95%.
                                        </p>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default About
