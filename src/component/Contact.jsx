import React from 'react';
import './Contact.css';
import linkedinIcon from '../images/linkedinIcon.png';
import emailjs from '@emailjs/browser';
import { useRef } from "react";


const Contact = () => {
        const form = useRef();
        const sendEmail = (e) => {
                e.preventDefault();
            
                emailjs
                  .sendForm('service_4g6db3j', 'template_xdrh5ju', form.current, {
                    publicKey: 'pH92XqDwrtcvg_a3b', //all info from the website
                  })
                  .then(
                    () => {
                      console.log('SUCCESS!');
                      e.target.reset(); //to clean the form
                      alert('email sent!');
                    },
                    (error) => {
                      console.log('FAILED...', error.text);
                    },
                  );
              };
return <div className='contact-container' id="contact">{/* {id for the Navbar} */}
                <h1 className='projects-title'>Contact me</h1>
                <span>Please fill up the form to keep in touch</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                        <input type="text" className='name' placeholder='Your Name' name='your_name'/>
                        <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                        <textarea name='message' className='msg' rows='5' placeholder='Your Message'></textarea>
                        <button type='sumit' value='Send' className='submitBtn'>Submit</button>
                <a href='https://www.linkedin.com/in/keshet-melman-hausman/' target="_blank" rel="noopener noreferrer" className='links'>
                        <img src={linkedinIcon} alt='linkedin' className='link' />
                </a>
                </form>
            
        </div>
}

export default Contact