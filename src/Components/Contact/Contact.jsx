import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css';

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
      <h2 className="project-section-title">Contact</h2>

      {sent ? 
        <div className="email-notif-container">
          <p className="email-caption email-sent">Message sent successfully</p>
        </div>
      :
        null
      }

      {err ? 
        <div className="email-notif-container">
          <p className="email-caption email-err">Something went wrong.</p>
        </div>
      :
        null
      }

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact