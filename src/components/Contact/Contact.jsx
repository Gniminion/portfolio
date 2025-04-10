import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Map from './Map.jsx';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5l57nvu", "template_0ea3z56", form.current, {
        publicKey: "sIWJ-dF4IT7vtd1PQ",
      })
      .then(
        () => {
          setStatus('SUCCESS'); 
          setTimeout(() => setStatus(''), 3000); 
        },
        (error) => {
          setStatus('FAIL');
          setTimeout(() => setStatus(''), 3000);
        },
      );
  };

  return (
    <div className="mt-4 text-white">
      <div className="grid grid-cols-7 gap-6">
        <div className="text-left col-span-4 flex flex-col p-6 bg-dark2 rounded-lg shadow-lg"> 
          <Map/> 
        </div>
        <form ref={form} onSubmit={sendEmail} className="text-left col-span-3 flex flex-col p-6 bg-dark2 rounded-lg shadow-lg">

          <label className=" text-md font-semibold mb-2" htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="text-sm mb-4 p-2 rounded-md border-2 border-dark3 bg-dark text-gray focus:outline-none"
            placeholder="Your Name"
          />

          <label className=" text-md font-semibold mb-2" htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="text-sm mb-4 p-2 rounded-md border-2 border-dark3 bg-dark text-gray focus:outline-none"
            placeholder="Your Email"
          />

          <label className=" text-md font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            className="text-sm mb-4 p-2 rounded-md border-2 border-dark3 bg-dark text-gray focus:outline-none"
            placeholder="Your Message"
            rows="10"
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="mt-2 mb-2 p-2 rounded-md bg-primary font-semibold cursor-pointer hover:bg-primary-dark transition-colors"
          />
          {status === 'SUCCESS' && (
          <p className="text-primary">Email sent successfully!</p>
          )}
          {status === 'FAILED' && (
          <p className="text-gray">Failed to send email. Please try again later.</p>
          )}
        </form>
        
      </div>
    </div>
  );
}

export default Contact;
