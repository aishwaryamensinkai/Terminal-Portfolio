import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "../css/contact.css";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o5tzkrv",
        "template_163h6lo",
        form.current,
        "t9u-bNa8nPhSk2YkO"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          form.current.reset();
          navigate("/");
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="installer">
      <h2 className="installer-title">[!] Contact Form</h2>
      <p className="installer-description" style={{ textAlign: "justify" }}>
        I am interested in freelance opportunities - especially on ambitious or
        large projects. However, if you have any other requests or questions,
        don't hesitate to contact me using below form either.
      </p>
      <div className="installer-content">
        <div className="installer-options">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-fields">
              <input placeholder="Name" type="text" name="name" required />
              <input placeholder="Email" type="email" name="email" required />
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="installer-buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
