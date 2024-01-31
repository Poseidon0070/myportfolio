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
                                        <p className="text-brand mb-2">Bachelor of Technology in Computer Science • 2023 - Present</p>
                                        <p className="mb-0">Currently pursuing my B.tech in Computer Science at IIIT, Naya Raipur with a cumulative CGPA of 8.26.</p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-right" data-aos-delay="500">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Nirmal Higher Secondary School, Jagdalpur(C.G)
                                        </h4>
                                        <p className="text-brand mb-2">CBSE className 12th • 2019-20</p>
                                        <p className="mb-0">Completed my senior secondary education from N.V.H.S achieving 91.6% (Ranked 3rd in my batch).</p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-right" data-aos-delay="700">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Nirmal Higher Secondary School, Jagdalpur(C.G)
                                        </h4>
                                        <p className="text-brand mb-2">CBSE className 10th • 2017-18</p>
                                        <p className="mb-0">Completed my secondary level education from N.V.H.S achieving 94.7% (Ranked 1st in my batch).</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">

                            <h3 className="mb-4" data-aos="fade-left" data-aos-delay="300">Experience</h3>
                            <div className="row gy-4">

                                <div className="col-12" data-aos="fade-left" data-aos-delay="300">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Samsung PRISM R&D Intern</h4>
                                        <p className="text-brand mb-2">July 2023 - present</p>
                                        <p className="mb-0">Project aims to develop a Named Entity Recognition (NER) class Nameifier,
                                            where the goal is to identify and class Nameify specific named entities in text, such as persons, places, organizations, etc.
                                            </p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-left" data-aos-delay="500">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Imocha Problem Setter Intern</h4>
                                        <p className="text-brand mb-2">May 2023 - present</p>
                                        <p className="mb-0">Working as a Data Structure and Algorithm Problem-setter invloved in creating new problems, testcases, documentation and reviewing.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12" data-aos="fade-left" data-aos-delay="700">
                                    <div className="bg-base p-4 rounded-4 shadow-effect">
                                        <h4>Forage Virtual Program (G.M.S)</h4>
                                        <p className="text-brand mb-2">June 2023</p>
                                        <p className="mb-0">Conducted an in-depth analysis of password protection mechanisms, with a focus on cracking passwords using
                                            Hashcat and assessing their security.
                                            Successfully cracked a range of passwords using Hashcat and identified the type of hashing algorithm used to protect passwords.</p>
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
