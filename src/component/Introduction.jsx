import React from 'react';
import './Introduction.css'
import me from '../images/Keshet.jpeg'


const Introduction = () => {
return <div className="intro" id="intro">
        <div className='introContent'>
            <span className='hello'>Hi,</span>
            <span className='introText'>I'm <span className='introName'>Keshet</span><br />Web Developer</span>
            <a
                href='./KeshetCV.pdf' // Replace with your file URL or path
                download='Keshet Melman Hausman CV.pdf' // Optional: the name you want the file to have when downloaded
                className="download-button"
                >
                <button className='CV'>Download CV</button>
           </a>
        </div>
        <div>
                <img className ="img-me" src={me} alt='me'/>
        </div>
        </div>
}

export default Introduction