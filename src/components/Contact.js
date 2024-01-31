import React, { useRef, useState } from 'react'
import { useMediaQuery } from '@mui/material';
import emailjs from 'emailjs-com'
import LinearProgress from '@mui/material/LinearProgress';

function Contact() {
    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    const [isLoading, setLoading] = useState(false)

    const formRef = useRef(null)

    let submitHandler = async(e) => {
        e.preventDefault()
        setLoading(true)

        let sendMail = async() => {

            emailjs.sendForm('service_mvp4f8r','template_ycbtkds',formRef.current,'eAo3xjd0asJHv6aGv')
            .then((result) => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })

        }

        await sendMail()

        alert("Sent Successfully")
        setLoading(false)

    }

    return (
        <>
            {isLoading && <LinearProgress />}
            <div className={`${isScreenMd ? 'shift' : ''}`}>
                <section id="contact" className="full-height px-lg-5">
                    <div className="container">

                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8 pb-4" data-aos="fade-left">
                                <h6 className="text-brand">CONTACT</h6>
                                <h1>In case of any query, feel free to contact me
                                </h1>
                            </div>

                            <div className="col-lg-8" data-aos="fade-right" data-aos-delay="100">
                                <form action="#" ref={formRef} className="row g-lg-3 gy-3" onSubmit={submitHandler}>
                                    <div className="form-group col-md-6">
                                        <input name="name" type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input name="email" type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group col-12">
                                        <input name="subject" type="text" className="form-control" placeholder="Enter subject" />
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea name="description" rows="4" className="form-control" placeholder="Enter your message"></textarea>
                                    </div>
                                    <div className="form-group col-12 d-grid">
                                        <button type="submit" className="btn btn-brand">Contact me</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact

// npm i emailjs-com