import React from "react";

export const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="form-description">
        <h2>Ready to get in touch?</h2>
        <p>Make an Event Request</p>
      </div>
      <div className="contact-form">
        <div className="flex">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea placeholder="Message" />
        <button type="submit">Get In Touch</button>
      </div>
    </div>
  );
};
