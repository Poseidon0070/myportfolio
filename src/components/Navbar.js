import '../css/index.css'
import profileImg from '../assets/images/profile-pic.png'

let Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container d-flex flex-column">
                    <a className="navbar-brand mx-auto" href="#/">
                        <span className="h1 fw-bold d-block d-lg-none">Shikhar Reyya</span>
                        <img src={profileImg} id="profile_img" className="d-none d-lg-block mb-4 rounded-circle" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex flex-column">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#home"><span>Summary</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about"><span>Education</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills"><span>Skills</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects"><span>Projects</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services"><span>Services</span></a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#contact"><span>Contact</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar