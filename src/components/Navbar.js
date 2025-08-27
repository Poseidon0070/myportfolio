import '../css/index.css';
import profileImg from '../assets/images/profile-pic.png';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const Navbar = () => {
    const isScreenLg = useMediaQuery((theme) => theme.breakpoints.up('md'));

    // Smooth scrolling + offcanvas close
    useEffect(() => {
        const handleNavLinkClick = (event) => {
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (!targetId) return;

            event.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (!targetElement) return;

            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({ top: targetPosition, behavior: 'smooth' });

            // Close offcanvas if link is inside it
            const offcanvasElement = document.getElementById('mobileNav');
            if (offcanvasElement && event.currentTarget.closest('.offcanvas') && window.bootstrap) {
                const offcanvasInstance = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
                offcanvasInstance.hide();
            }
        };

        document.querySelectorAll('.nav-link[href^="#"]').forEach((link) =>
            link.addEventListener('click', handleNavLinkClick)
        );

        return () => {
            document.querySelectorAll('.nav-link[href^="#"]').forEach((link) =>
                link.removeEventListener('click', handleNavLinkClick)
            );
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-dark fixed-top">
                <div className="container-fluid px-3">
                    {/* MOBILE: Toggler + Brand Text */}
                    {!isScreenLg && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                minWidth: 0,
                                width: '100%',
                            }}
                        >
                            <button
                                className="navbar-toggler border-0 me-2"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#mobileNav"
                                aria-controls="mobileNav"
                                style={{ flexShrink: 0 }}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <a
                                className="navbar-brand fw-bold text-brand"
                                href="#/"
                                style={{
                                    fontSize: '1.25rem',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                Shikhar Reyya
                            </a>
                        </div>
                    )}

                    {/* DESKTOP: Profile Image + Nav Links */}
                    {isScreenLg && (
                        <>
                            <div className="d-flex align-items-center w-100">
                                <a className="navbar-brand d-flex align-items-center" href="#/">
                                    <img
                                        src={profileImg}
                                        id="profile_img"
                                        className="mb-4 rounded-circle ms-5"
                                        alt="Shikhar Reyya Profile"
                                    />
                                </a>
                            </div>
                            <div className="collapse navbar-collapse show">
                                <ul className="navbar-nav ms-auto d-flex flex-column text-center">
                                    <NavLinks />
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>

            {/* Mobile Offcanvas */}
            <div
                className="offcanvas offcanvas-end text-bg-dark"
                tabIndex="-1"
                id="mobileNav"
                aria-labelledby="mobileNavLabel"
                data-bs-scroll="true"
                data-bs-backdrop="false"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-brand fw-bold" id="mobileNavLabel">
                        Shikhar Reyya
                    </h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white btn-close-custom"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <NavLinks />
                    </ul>
                </div>
            </div>
        </>
    );
};

const NavLinks = () => (
    <>
        <li className="nav-item">
            <a className="nav-link" href="#home" data-bs-dismiss="offcanvas">
                Summary
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#about" data-bs-dismiss="offcanvas">
                Education
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#skills" data-bs-dismiss="offcanvas">
                Skills
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#projects" data-bs-dismiss="offcanvas">
                Projects
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#services" data-bs-dismiss="offcanvas">
                Services
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#contact" data-bs-dismiss="offcanvas">
                Contact
            </a>
        </li>
    </>
);

export default Navbar;
