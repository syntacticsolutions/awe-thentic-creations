import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
  const [recaptchaVerified, setRecaptchaVerified] = useState(
    process.env.NODE_ENV === "development"
  );
  const [messageSent, setMessageSent] = useState(false);
  const [data, setData] = useState({});

  const setInputValue = (key: string) => (e: any) => {
    setData({ ...data, [key]: e.target.value });
  };

  async function sendText() {
    if (recaptchaVerified) {
      const response = await fetch(
        "https://us-central1-directed-galaxy-221521.cloudfunctions.net/messaging-backend/sendMessage",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        setMessageSent(true);
      }
    }
  }

  async function onChange(value: any) {
    const url =
      "https://us-central1-directed-galaxy-221521.cloudfunctions.net/messaging-backend/verify";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: value,
      }),
    });

    const data = await response.json();

    if (data.responseCode === 0) {
      setRecaptchaVerified(true);
    }
  }
  return (
    <div className="contact-form-container">
      <div className="form-description">
        <h2>Ready to get in touch?</h2>
        <p>Make an Event Request</p>
      </div>
      <div className="contact-form">
        <div className="flex">
          <input
            onChange={setInputValue("name")}
            value={data.name}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={setInputValue("phone")}
            value={data.phone}
            type="text"
            placeholder="Phone Number"
          />
          <input
            onChange={setInputValue("email")}
            value={data.email}
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea
          onChange={setInputValue("message")}
          value={data.message}
          placeholder="Message"
        />

        <ReCAPTCHA
          sitekey="6LcFxeofAAAAAJcRIQ1-uhuGa0fpH8rUGnKDPsu9"
          onChange={onChange}
          style={{ marginBottom: "20px" }}
        />
        <button
          disabled={!recaptchaVerified || messageSent}
          type="submit"
          onClick={sendText}
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};
