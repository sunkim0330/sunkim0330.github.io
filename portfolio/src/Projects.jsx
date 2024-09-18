import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import notgucci from "./images/cat_pic1.jpeg";
import meme from "./images/cat_pic2.jpeg";
import smokeys from "./images/cat_pic4.jpeg";
import willbe from "./images/willberestaurant.png";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="projects-title" style={{ color: "#aef241" }}>
        Projects
      </h1>
      <div className="list-of-projects">
        <div className="first-project">
          <img src={willbe} width={300} height={300} alt="will-be" />
          <a href="will-be-restaurant.vercel.app">
            <i class="bi bi-globe"></i>&ensp;Will Be Restaurant
          </a>
        </div>
        <div className="second-project">
          <img src={notgucci} width={300} height={300} alt="not-gucci" />
          <a href="https://github.com/sunkim0330/catwalk">
            <i class="bi bi-github"></i>&ensp;Not Gucci
          </a>
        </div>
        <div className="third-project">
          <img src={meme} width={300} height={300} alt="Meme" />
          <a href="https://github.com/sunkim0330/MVP">
            <i class="bi bi-github"></i>&ensp;Meme Generator
          </a>
        </div>
        <div className="fourth-project">
          <img
            src={smokeys}
            width={300}
            height={300}
            alt="smokey-marketplace"
          />
          <a href="https://github.com/sunkim0330/Smokeys-Marketplace">
            <i class="bi bi-github"></i>&ensp;Smokey's Marketplace
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
