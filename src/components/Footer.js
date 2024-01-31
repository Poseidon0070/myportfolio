import React from 'react'
import { useMediaQuery } from '@mui/material';
import { Linkedin, Whatsapp, Github, Twitter } from 'react-bootstrap-icons'


function Footer() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
  return (
    <div className={`${isScreenMd ? 'shift' : ''}`}>
       <footer className="py-5 px-lg-5">
            <div className="container">
                <div className="row gy-4 justify-content-center">
                    <div className="col-auto">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/shikhar-reyya-368451229/" rel="noreferrer" className='mx-2 social' target="_blank"><Linkedin /></a>
                            <a href="https://github.com/Poseidon0070" rel="noreferrer" className='mx-2 social' target="_blank"><Github /></a>
                            <a href="https://twitter.com/Voldemort_7585" rel="noreferrer" className='mx-2 social' target="_blank"><Twitter /></a>
                            <a href="https://chatwith.io/s/shikhar-reyya" rel="noreferrer" className='mx-2 social' target="_blank"><Whatsapp /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
 
export default Footer
