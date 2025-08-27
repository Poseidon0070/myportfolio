import React from 'react'
import { useMediaQuery } from '@mui/material';
import { Linkedin, Whatsapp, Github, Twitter } from 'react-bootstrap-icons'


function Footer() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <footer className="py-4 py-lg-5 px-lg-5">
                <div className="container">
                    <div className="row gy-4 justify-content-center text-center">
                        <div className="col-12">
                            <div className="social-icons d-flex justify-content-center flex-wrap">
                                <a
                                    href="https://www.linkedin.com/in/shikhar-reyya-368451229/"
                                    rel="noreferrer"
                                    className='mx-2 my-1 social'
                                    target="_blank"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://github.com/Poseidon0070"
                                    rel="noreferrer"
                                    className='mx-2 my-1 social'
                                    target="_blank"
                                    aria-label="GitHub Profile"
                                >
                                    <Github />
                                </a>
                                <a
                                    href="https://twitter.com/Voldemort_7585"
                                    rel="noreferrer"
                                    className='mx-2 my-1 social'
                                    target="_blank"
                                    aria-label="Twitter Profile"
                                >
                                    <Twitter />
                                </a>
                                <a
                                    href="https://chatwith.io/s/shikhar-reyya"
                                    rel="noreferrer"
                                    className='mx-2 my-1 social'
                                    target="_blank"
                                    aria-label="WhatsApp Contact"
                                >
                                    <Whatsapp />
                                </a>
                            </div>
                            <p className="text-center mt-3 mb-0 text-muted">
                                © 2025 Shikhar Reyya. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
