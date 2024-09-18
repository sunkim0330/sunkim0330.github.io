import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import mask1 from "./images/koreanMask1.png";
import mask2 from "./images/koreanMask2.png";
import mask3 from "./images/koreanMask3.png";
import mask4 from "./images/koreanMask4.png";
import mask5 from "./images/koreanMask5.png";
import mask6 from "./images/koreanMask6.png";
import mask7 from "./images/koreanMask7.png";
import mask8 from "./images/koreanMask8.png";

export default function Home() {
  const scrollWithOffset = (ele, offset) => {
    window.scroll({
      top: ele.offsetTop - offset,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header>
        <div className="container container_solid">
          <img
            src={mask1}
            className="mask-left-bottom-middle"
            alt="mask-left-bottom-middle"
          />
          <img src={mask2} className="mask-left-top" alt="mask-left-top" />
          <img
            src={mask3}
            className="mask-left-top-middle"
            alt="mask-left-top-middle"
          />
          <img
            src={mask4}
            className="mask-left-middle"
            alt="mask-left-middle"
          />
          <img
            src={mask5}
            className="mask-right-middle"
            alt="mask-right-middle"
          />
          <img
            src={mask6}
            className="mask-right-top-middle"
            alt="mask-right-top-middle"
          />
          <img src={mask7} className="mask-right-top" alt="mask-right-top" />
          <img
            src={mask8}
            className="mask-right-bottom-middle"
            alt="mask-right-bottom-middle"
          />
          <div className="title_wrapper">
            <h1>Welcome</h1>
          </div>
        </div>

        <div className="container container_image" aria-hidden="true">
          <div className="title_wrapper">
            <h1>Welcome</h1>
          </div>
        </div>
      </header>
      <Navbar className="navbar">
        <Nav className=".justify-content-center">
          <Nav.Link href="/#aboutme" className="nav-link">
            About Me
          </Nav.Link>
          <Nav.Link href="/#projects" className="nav-link">
            Projects
          </Nav.Link>
          <Nav.Link href="/#contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
