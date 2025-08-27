import React from 'react'
import { useMediaQuery } from '@mui/material';
import { skills } from '../assets/images/skills/exporter'
import '../css/index.css'

function Skills() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    const svgKeys = Object.keys(skills);

    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <section id="skills" className="full-height px-lg-5">
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4 fw-bold mb-4 mb-md-5 text-center text-lg-start" data-aos="fade-down">
                                <span className="text-brand">My Skills</span>
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className='skill-container' style={{ height: "auto", width: "auto" }}>
                                {svgKeys.map((key, index) => {
                                    return (
                                        <div key={index} className='skill-box' data-aos="zoom-in" data-aos-delay={index * 50}>
                                            <img
                                                src={skills[key]}
                                                className={isScreenMd ? 'skill-md' : 'skill-sm'}
                                                alt={`${key} Technology Icon`}
                                                loading="lazy"
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills

