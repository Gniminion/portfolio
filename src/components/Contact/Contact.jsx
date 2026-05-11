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
          setTimeout(() => setStatus(''), 30000); 
        },
        (error) => {
          setStatus('FAIL');
          setTimeout(() => setStatus(''), 30000);
        },
      );
  };

  return (
    <div className="mt-4 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
        <div className="lg:col-span-3 h-[280px] lg:h-[520px]"> 
          <Map/> 
        </div>
        
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="text-left lg:col-span-2 flex flex-col p-4 sm:p-6 bg-dark2 "
        >
          <label className="text-sm sm:text-md font-medium mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="text-sm p-2  border border-dark3 bg-dark text-gray focus:outline-none mb-4"
            placeholder="Your Name"
          />

          <label className="text-sm sm:text-md font-medium mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="text-sm p-2  border border-dark3 bg-dark text-gray focus:outline-none mb-4"
            placeholder="Your Email"
          />

          <label className="text-sm sm:text-md font-medium mb-2">Message</label>
          <textarea
            name="message"
            required
            className="text-sm p-2  border border-dark3 bg-dark text-gray focus:outline-none mb-4"
            placeholder="Your Message"
            rows="10"
          ></textarea>

          <h4 className="flex flex-col items-center">
            <input
              type="submit"
              value="Send Email"
              className="w-full px-6 py-2 bg-primary font-medium cursor-pointer"
            />
            {status === 'SUCCESS' && (
              <p className="text-primary mt-2 text-xs font-mono"> [ Email sent successfully! ]</p>
            )}
            {status === 'FAIL' && (
              <p className="text-gray mt-2 text-xs font-mono"> [ Failed to send email. Please try again later or send message to m75zhang@uwaterloo.ca ] </p>
            )}
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Contact;
