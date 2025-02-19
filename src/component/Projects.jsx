import React from 'react';
import './Projects.css';
import mentora from '../images/mentora-app.png'


const Projects = () => {
return <div className='projects-container' id="projects">{/* {id for the Navbar} */}
        <h1 className='projects-title'>Projects</h1>
        <section className='projects-section'>
                <div className='project-text'>
                <h2>Mentora App</h2>
                <p>This app was my final projects in the end of the bootcamp. It was createed with the goal of make it easy for people to achive their health goals through personalized, AI-driven workout and nutrition plans.
                After signing up, users provide key information such as their age, weight, height, fitness goals, etc and the AI processes this data and generates a customized plan.
                </p>
                </div>
                <div>
                 <img className='img-project' src={mentora}/>
                 <a href='https://mentora.surge.sh/' target="_blank" rel="noopener noreferrer">
                        <button>See project</button>
                 </a>
                </div>
        </section>

        </div>
}

export default Projects