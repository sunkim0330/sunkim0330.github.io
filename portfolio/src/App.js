import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";

function MainPage() {
  return (
    <div className="App">
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
