import React from 'react'
import { useMediaQuery } from '@mui/material';
import ProjectContainer from './ProjectContainer';
import reactTube from '../assets/images/projects/ReactTube.png'
import foodApp from '../assets/images/projects/FoodApp.png'
import expenceTracker from '../assets/images/projects/ExpenseTracker.png'
import shooterGame from '../assets/images/projects/2DshooterGame.png'
import taskManagementApp from '../assets/images/projects/TaskManagementApp.png'

//"./assets/images/project-1.jpg"

function Projects() {

    const isScreenMd = useMediaQuery((theme) => theme.breakpoints.up('md'))
    const suf = '-/'
    return (
        <div className={`${isScreenMd ? 'shift' : ''}`}>
            <section id="projects" className="full-height px-lg-5">
                <div className="container">

                    <div className="row pb-4" data-aos="fade-up">
                        <div className="col-lg-8">
                            <h1 className="display-4 fw-bold mb-5 ms-3" data-aos="fade-down"><span className="text-brand">
                                My Projects</span></h1>
                        </div>
                    </div>

                    <div className="row gy-4">

                        <ProjectContainer
                            img={reactTube}
                            right={true}
                            link={"https://clone-df0d7.web.app"}>
                            <h4>Video player application - ReactTube</h4>
                            <p>Developed a fully responsive YouTube clone website using React and Material-UI
                                Integrated the RAPIDAPI to fetch and display dynamic content, including video details, channel information, and search results.
                            </p>
                        </ProjectContainer>
                        <ProjectContainer 
                        img={foodApp}
                        link={"https://food-order-app-81bdd.firebaseapp.com"}>
                            <h4>Food ordering application - ReactMeal</h4>
                            <p>A food ordering app created using React JS and Bootstrap.
                                The webpage comprises different components, each designed to serve a specific purpose.
                                Used Firestore as the backend to store food data and order delivery details.
                            </p>
                        </ProjectContainer>
                        <ProjectContainer 
                        img={expenceTracker} 
                        right={true}
                        link={"https://expense-tracker-baa45.firebaseapp.com"}>
                            <h4>Expense tracker application</h4>
                            <p>
                                An efficient and user-friendly expense tracker app , which embodies core concepts of ReactJS, including props and state management.
                                Integrates Bootstrap for a polished and responsive user interface.
                            </p>
                        </ProjectContainer>
                        <ProjectContainer 
                        img={shooterGame} 
                        link={`https://poseidon0070.github.io/2d-Shooter-Game${suf}`}>
                            <h4>2D Shooter Game</h4>
                            <p>
                                An efficient and user-friendly expense tracker app , which embodies core concepts of ReactJS, including props and state management.
                                Integrates Bootstrap for a polished and responsive user interface.
                            </p>
                        </ProjectContainer>
                        <ProjectContainer 
                        img={taskManagementApp} 
                        link={`https://65b7d4c6aa96151eb7175335--aesthetic-buttercream-603993.netlify.app/`}>
                            <h4>Task Management App</h4>
                            <p>
                            Robust Task Management System using React, Bootstrap, and Express, with MongoDB as the backend database.
                            Leveraging the power of React Grid DND, the system empowers users to seamlessly add, delete, reorder, and mark tasks as complete or incomplete.
                            </p>
                        </ProjectContainer>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Projects
