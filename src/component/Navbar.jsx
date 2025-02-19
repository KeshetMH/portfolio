import React from 'react';
import logo from '../images/logo_navbar.png';
import './Navbar.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; 
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Navbar = () => {

return <div>
            <nav className="navbar">
                <div>
                    <ScrollLink to='intro' spy={true} smooth={true} offset={-100} duration={500}>
                        <img src={logo} alt='logo'/>
                    </ScrollLink>
                </div>
                    <ScrollLink activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='nav-menu'>About</ScrollLink>
                    <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='nav-menu'>Skills</ScrollLink>
                    <ScrollLink activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='nav-menu'>Projects</ScrollLink>
                    <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='nav-menu'>Contacts</ScrollLink>
            </nav>
        </div>
}

export default Navbar