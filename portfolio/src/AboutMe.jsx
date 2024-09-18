import React from "react";
import realProfilePic from "./images/linkedinprofilepic.jpeg";
import resume from "./images/Sun_Kim_Resume.pdf";

const AboutMe = () => {
  return (
    <div id="aboutme">
      <div id="profilepic">
        <img src={realProfilePic} width="400px" alt="profilepic" />
      </div>
      <div id="summary">
        <h1>
          My name is <strong>Sun Kim</strong>.
        </h1>
        <p>I am Software Engineer, a Gamer, and Crazy Cat Lady.</p>
        <p>
          I began my journey studying pharmacy. After getting a bachelor's
          degree I had been working as a technician alongside pharmacists,
          getting exposure to the industry. The longer I stayed, the clearer it
          got that healthcare field wasn't a right fit for me.
        </p>
        <p>
          I decided to pursue a career I always wanted. <strong>Coding.</strong>{" "}
          I didn't know anything about HTML or JavaScript, and jumped right into
          React. It was tough, but I loved it. I made my first React project and
          thought 'this is what I want to do. I want to learn more!' So in 2021,
          I quit pharmacy and got into a coding bootcamp. After intense 12
          weeks, I graduated and now, I am a software engineer.{" "}
        </p>
        <p>
          With so many ways people can influence programming, my greatest
          strength is my ability to keep things organized. This is especially
          important on large projects where a small bit of unorganized code can
          ripple into costly problems as the scope expands. I’m also patient,
          and able to stay calm in the heat of the moment, which is a skill I
          was able to practice while dealing with customers at the pharmacy.
        </p>
        <p>
          Although I am less experienced than other programmers, having only
          recently started studying it. I am a fast learner, and have both the
          passion and drive to succeed that can only come from experiencing a
          different industry firsthand. The challenges and lifestyle of a web
          developer fit my personality perfectly, and I intend to show the world
          why.
        </p>
      </div>
      <div id="resume">
        <a href={resume} download="SunKim_Resume">
          <i className="bi bi-download"></i>Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
