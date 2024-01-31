import React from 'react'
import { useMediaQuery } from '@mui/material';
import {skills} from '../assets/images/skills/exporter'
import '../css/index.css'

function Skills() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    const svgKeys = Object.keys(skills);

    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <section id="skills" className="full-height px-lg-5">
                <div className='container'>
                    <h1 className="display-4 fw-bold mb-5 ms-5" data-aos="fade-down"><span className="text-brand">
                        My Skills</span></h1>
                    <div className='skill-container' style={{ height: "auto", width: "auto", backgroundColor: "" }}>
                        {svgKeys.map((key, index) => {
                            return (
                                <div className='skill-box'>
                                    <img key={index} src={skills[key]} className={isScreenMd ? 'skill-md' : 'skill-sm'} alt={`${key} Icon`} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills

