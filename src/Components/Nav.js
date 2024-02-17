import React from "react";
import "./Nav.css";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skill from "./Skill";
import Contact from "./Contact";

function Nav() {
  return (
    <div>
      <div className="navbar">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">EDUCATION</a>
        <a href="#">SKILL</a>
        <a href="#">CONTACT</a>
      </div>
      <Home />
      <About />
      <Education />
      <Skill />
      <Contact />
    </div>
  );
}

export default Nav;
