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
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="text-left lg:col-span-3 sm:col-span-1 p-4 bg-dark2 rounded-lg h-[564px]"> 
          <Map/> 
        </div>
        <form ref={form} onSubmit={sendEmail} className="text-left lg:col-span-2 sm:col-span-1 flex flex-col p-8 bg-dark2 rounded-lg">

          <label className=" text-md font-semibold mb-2" >Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="text-sm mb-4 p-2 rounded-md border-2 border-dark3 bg-dark text-gray focus:outline-none"
            placeholder="Your Name"
          />

          <label className=" text-md font-semibold mb-2" >Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="text-sm mb-4 p-2 rounded-md border-2 border-dark3 bg-dark text-gray focus:outline-none"
            placeholder="Your Email"
          />

          <label className=" text-md font-semibold mb-2" >Message</label>
          <textarea
            name="message"
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
