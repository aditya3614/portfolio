import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import instagram from '../../images/social/instagram.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <div className='para'>
      <p>You can reach me through my social media accounts or by email at adityadave992@gmail.com.</p>
      </div>
      
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/aditya3614"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-dave-aa68961b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://instagram.com/aditya_dave89?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Facebook Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
