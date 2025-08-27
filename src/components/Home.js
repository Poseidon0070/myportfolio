import React from 'react';
import '../css/index.css';
import { useMediaQuery } from '@mui/material';

function Home() {
  const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <div className={`${isScreenMd ? 'shift' : ''}`}>
      <section id="home" className="full-height px-lg-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-10 col-md-11 col-12 text-center text-lg-start">
              <h1
                className="display-3 fw-bold mb-4 mb-md-5"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                Hi, I'm Shikhar Reyya
                <br className="d-none d-md-block" />
                <p className="text-brand">Full Stack Developer</p>
              </h1>
              <p
                className="lead mt-3 mb-4 mb-md-5"
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ textAlign: 'justify' }}
              >
I’m a goal-driven Computer Science undergraduate with expertise in full-stack development and hands-on experience in building scalable applications using modern 
frameworks like React, Next.js, FastAPI, and NestJS. With a strong foundation in the Full stack development and proficiency in AI integration 
, I specialize in creating efficient, user-centric digital products. .
Passionate about problem-solving and emerging technologies, I’m eager to contribute to dynamic teams and deliver innovative, real-world solution              </p>
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-3 gap-sm-4 mt-4 mt-md-5">
                <button
                  data-aos="fade-right"
                  data-aos-delay="500"
                  onClick={() =>
                    window.open(
                      require('../assets/images/Shikhar_Resume_updated.pdf'),
                      '_blank'
                    )
                  }
                  className="btn btn-brand btn-lg shadow-effect w-100 w-sm-auto"
                  aria-label="Download Shikhar Reyya's Resume"
                >
                  Download Resume
                </button>
                <a
                  data-aos="fade-left"
                  data-aos-delay="600"
                  href="tel:+919179104891"
                  className="link-custom text-center text-sm-start"
                  aria-label="Call Shikhar Reyya"
                >
                  <span className="h5 fw-bold" style={{ fontFamily: 'monospace' }}>
                    Call: (+91) 9179104891
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;