import '../css/index.css';
import profileImg from '../assets/images/profile-pic.png';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

let Navbar = () => {
  const isScreenLg = useMediaQuery((theme) => theme.breakpoints.up('md'));

  // Handle smooth scrolling and offcanvas dismissal
  useEffect(() => {
    const handleNavLinkClick = (event) => {
      const targetId = event.currentTarget.getAttribute('href')?.substring(1); // Remove '#'
      if (targetId) {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });

          // Close offcanvas if the link is inside it
          const offcanvasElement = document.getElementById('mobileNav');
          if (offcanvasElement && event.currentTarget.closest('.offcanvas') && window.bootstrap) {
            const offcanvasInstance = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);
            offcanvasInstance.hide();
          }
        }
    }
    };

    // Attach event listeners to nav links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Cleanup event listeners
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-dark fixed-top">
        <div className="container-fluid px-3">
          {/* Brand and toggle button in same row on mobile */}
<div className="d-flex flex-grow-1 justify-content-center align-items-center">
  {/* Brand / Profile */}
  <div className='flex flex-grow-1 justify-content-between ms-4'>
    <a className="navbar-brand d-flex justify-content-center align-items-center" href="#/">
      <span className="h3 fw-bold d-lg-none text-brand">Shikhar Reyya</span>
      <img
        src={profileImg}
        id="profile_img"
        className="d-none d-lg-block mb-4 rounded-circle"
        alt="Shikhar Reyya Profile"
      />
    </a>
  </div>
              <div className='flex-grow-1 ms-'>
            {/* Mobile Toggle Button */}
            {!isScreenLg && (
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileNav"
                aria-controls="mobileNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            )}
            </div>
          </div>

          {/* Desktop Nav (always visible in lg+) */}
          {isScreenLg && (
            <div className="collapse navbar-collapse show">
              <ul className="navbar-nav ms-auto d-flex flex-column text-center">
                <NavLinks />
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Offcanvas Menu (slides in from right) */}
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
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
          ></button>
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

// Extracted links to avoid repetition
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