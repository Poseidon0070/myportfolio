import React from 'react'
import { useMediaQuery } from '@mui/material';

function About() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <section id="about" className="full-height px-lg-5">
                <div className="container">

                    <div className="row pb-4" data-aos="fade-up">
                        <h1 className="display-4 fw-bold mb-5" data-aos="fade-down"><span className="text-brand">
                            My Education and Experience</span></h1>
                    </div>

                    <div className="row gy-5">
                        <div className="col-lg-6">

                            <h3 className="mb-4" data-aos="fade-right" data-aos-delay="300">Education</h3>
                            <div className="row gy-4">

                                <div className="col-12" data-aos="fade-right" data-aos-delay="300">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>International Institute of Information Technology, Naya Raipur
                                        </h4>
                                        <div className='d-flex justify-content-between'>
                                        <p className="text-brand mb-2">B.Tech Computer Science</p>
                                        <p className="text-brand mb-2">2023 - Present</p>

                                        </div>
                                        <p className="mb-0">Currently pursuing my B.tech in Computer Science at IIIT, Naya Raipur with a cumulative CGPA of <b>8.26.</b></p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-right" data-aos-delay="500">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Nirmal Higher Secondary School, Jagdalpur(C.G)
                                        </h4>
                                        <div className='d-flex justify-content-between'>
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
                                        <div className='d-flex justify-content-between'>
                                        <p className="text-brand mb-2">CBSE 10th</p>
                                        <p className="text-brand mb-2">2017-18</p>

                                        </div>
                                        <p className="mb-0">Completed my secondary level education from N.V.H.S achieving <b>94.7% </b>(Ranked 1st in my batch).</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <h3 className="mb-4" data-aos="fade-left" data-aos-delay="300">Experience</h3>
                            <div className="row gy-4">

                                <div className="col-12" data-aos="fade-left" data-aos-delay="300">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Developer Intern</h4>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text-brand'>Samsung PRISM</p>
                                            <p className="text-brand">July 2023 - present</p>
                                        </div>
                                        <p className="mb-0">Project aims to develop a Named Entity Recognition (NER) class Nameifier,
                                            where the goal is to identify and class Nameify specific named entities in text, such as persons, places, organizations, etc.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-left" data-aos-delay="500">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Problem Setter Intern</h4>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text-brand'>Interview Mocha</p>
                                            <p className="text-brand">May 2023 - July 2023</p>
                                        </div>
                                        <p className="mb-0">Working as a Data Structure and Algorithm Problem-setter invloved in creating new problems, testcases, documentation and reviewing.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-left" data-aos-delay="700">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Postman API Expert</h4>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text-brand'>Postman</p>
                                            <p className="text-brand">Feb 2024</p>
                                        </div>
                                        <p className="mb-0"> Gained hands-on experience in working with APIs and essential skills for modern software development.
                                            Utilized Postman to interact with APIs and efficiently perform HTTP requests.
                                            Mastered API key authorization mechanisms, understanding and implementing secure access protocols.
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
