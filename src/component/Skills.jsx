import React from 'react';
import './Skills.css';
import { useState } from 'react';
import react from '../images/react-logo.png';
import javascript from '../images/javascript-logo.png';
import html5 from '../images/html-5-logo.png';
import css from '../images/css-logo.png';
import github from '../images/github-logo.png';
import nodejs from '../images/node-js-logo.png';
import revit from '../images/revit-logo.png';
import autocad from '../images/autodesk-logo.png';
import sketchup from '../images/sketchup-logo.png';


const Skills = () => {
    
    const [isReactHovered, setReactIsHovered] = useState(false);
    const [isJavascriptHovered, setJavascriptHovered] = useState(false);
    const [isHtml5Hovered, setHtml5Hovered] = useState(false);
    const [isCssHovered, setCssHovered] = useState(false);
    const [isGithubHovered, setGithubHovered] = useState(false);
    const [isNodejsHovered, setNodejsHovered] = useState(false);
    const [isRevitHovered, setRevitHovered] = useState(false);
    const [isAutocadHovered, setAutocadHovered] = useState(false);
    const [isSketchupHovered, setSketchupHovered] = useState(false);

return <div className='skills-container' id='skills'> {/* {id for the Navbar} */}
            <div>
                <h1 className='skills-title'>Skills</h1>
            </div>
            <div className='allSkills'>
                <section className='skillsPosion1'>

                    <div className='skillSize' onMouseEnter={() => setReactIsHovered(true)} onMouseLeave={() => setReactIsHovered(false)}>
                    {!isReactHovered ? (
                    <div>React JS</div>
                         ) : (
                        <img
                        src={react}
                        alt="react logo"
                        className="image-logo"
                        />
                    )}

                    </div> 
                    {/* the text and the image is wraped in one div because the enter/leave mouse need an element to exist
                    everytime a person is hover over it. if I will separete it to two elements then once the it will turn to 
                    be a picture but then the text elemet wont be exist any more so we wouldnt know to leave from elemet that doesnt exist */}

                    <div className='skillSize' onMouseEnter={() => setJavascriptHovered(true)} onMouseLeave={() => setJavascriptHovered(false)}>
                        {!isJavascriptHovered ? (
                        <div>JavaScript</div>
                            ) : (
                            <img
                            src={javascript}
                            alt="javascript logo"
                            className="image-logo"
                            />
                        )}
                    </div>
                    
                    <div className='skillSize' onMouseEnter={() => setHtml5Hovered(true)} onMouseLeave={() => setHtml5Hovered(false)}>
                        {!isHtml5Hovered ? (
                        <div>HTML5</div>
                            ) : (
                            <img
                            src={html5}
                            alt="html5 logo"
                            className="image-logo"
                            />
                        )}
                    </div>
                </section>
                
                <section className='skillsPosion2'>
                    <div className='skillSize' onMouseEnter={() => setCssHovered(true)} onMouseLeave={() => setCssHovered(false)}>
                        {!isCssHovered ? (
                        <div>CSS</div>
                            ) : (
                            <img
                            src={css}
                            alt="css logo"
                            className="image-logo"
                            />
                        )}
                    </div>
                    
                    <div className='skillSize' onMouseEnter={() => setGithubHovered(true)} onMouseLeave={() => setGithubHovered(false)}>
                        {!isGithubHovered ? (
                        <div>Git Hub</div>
                            ) : (
                            <img
                            src={github}
                            alt="github logo"
                            className="image-logo"
                            />
                        )}
                    </div>

                    <div className='skillSize' onMouseEnter={() => setNodejsHovered(true)} onMouseLeave={() => setNodejsHovered(false)}>
                        {!isNodejsHovered ? (
                        <div>Node JS</div>
                            ) : (
                            <img
                            src={nodejs}
                            alt="nodejs logo"
                            className="image-logo"
                            />
                        )}
                    </div>
                </section>

                <section className='skillsPosion3'>
                        <div className='skillSize' onMouseEnter={() => setRevitHovered(true)} onMouseLeave={() => setRevitHovered(false)}>
                            {!isRevitHovered ? (
                            <div>Revit</div>
                                ) : (
                                <img
                                src={revit}
                                alt="revit logo"
                                className="image-logo"
                                />
                            )}
                        </div>

                        <div className='skillSize' onMouseEnter={() => setAutocadHovered(true)} onMouseLeave={() => setAutocadHovered(false)}>
                            {!isAutocadHovered ? (
                            <div>Autocad</div>
                                ) : (
                                <img
                                src={autocad}
                                alt="autocad logo"
                                className="image-logo"
                                />
                            )}
                        </div>
                        
                        <div className='skillSize' onMouseEnter={() => setSketchupHovered(true)} onMouseLeave={() => setSketchupHovered(false)}>
                            {!isSketchupHovered ? (
                            <div>SketchUp</div>
                                ) : (
                                <img
                                src={sketchup}
                                alt="sketchup logo"
                                className="image-logo"
                                />
                            )}
                        </div>
                </section>
            </div>
        </div>
}

export default Skills