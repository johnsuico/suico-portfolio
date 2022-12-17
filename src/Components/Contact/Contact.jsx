import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css';

import {AiTwotoneMail, AiFillLinkedin} from 'react-icons/ai';

const Contact = () => {

  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(false);

  const form = useRef();

  const successEmail = () => {
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 5000)
  }

  const errorEmail = () => {
    setErr(true);
    setTimeout(() => {
      setErr(false);
    }, 5000)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
        successEmail();
    }, (error) => {
        console.log(error.text);
        errorEmail();
    });
  }

  return (
    <div className="contact-container">
      <h2 className="project-section-title" id="contact">Contact</h2>

      <div className="contact-info-container">
        <div className="contact-links">
          <div className="contact-link-group">
            <AiTwotoneMail className="contact-email-icon"/>
            <p className="contact-text">johncdsuico@gmail.com</p>
          </div>
        </div>
        <div className="email-notif-container">
          { sent ?
            <p className="email-sent">Email sent successfully.</p>
          :
            null
          }

          { err ? 
            <p className="email-err">Something went wrong. Try emailing manually.</p>
          :
            null
          }
        </div>
      </div>


      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label className="contact-form-label">Name</label>
        <input type="text" name="user_name" className="contact-form-input" placeholder="Your name"/>

        <label className="contact-form-label">Email</label>
        <input type="email" name="user_email" className="contact-form-input" placeholder="Your email"/>

        <label className="contact-form-label">Message</label>
        <textarea name="message" className="contact-form-text-area" />

        <input type="submit" value="Send" className="contact-form-btn" />
      </form>
    </div>
  )
}

export default Contact