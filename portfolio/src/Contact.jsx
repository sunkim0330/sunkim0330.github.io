import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  return (
    <div id="contact">
      <h2 style={{ color: "#aef241" }}>Let's Connect!</h2>
      <ul>
        <a href="https://www.linkedin.com/in/sunhukim/">
          <i className="bi bi-linkedin"></i>&ensp;LinkedIn
        </a>
      </ul>
      <ul>
        <i className="bi bi-github"></i>
        <a href="https://github.com/sunkim0330">&ensp;Github</a>
      </ul>
      <ul>
        <a href="mailto:sunkim0205@gmail.com">
          <i className="bi bi-envelope-fill"></i>&ensp;Email
        </a>
      </ul>
    </div>
  );
};

export default Contact;
