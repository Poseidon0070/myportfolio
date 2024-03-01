import React from 'react'

function ProjectContainer({ img, children, right, link }) {
    return (
        <div className="col-md-6" data-aos={`${right ? 'fade-right' : 'fade-left'}`}>
            <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-image rounded-4 p-2">
                    <img className="rounded-4" src={img} alt="" style={{ height: "400px" }} />
                </div>
                <div className="card-custom-content p-4">
                    {children}
                    <a href={link} className="link-custom" rel="noreferrer" target='_blank'>
                        <b>
                            Visit
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                            </svg>
                        </b>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer
// D:\Vs_Code\Dev\BOOTCAMP\5.REACT\portfolio\src\assets\images\projects