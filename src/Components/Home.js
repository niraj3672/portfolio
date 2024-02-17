import React from "react";
import "./Home.css";
import img1 from "./image/1.avif";

function Home() {
  return (
    <div>
      <div className="main1">
        <img src={img1} className="img"></img>
        <div className="devinfo">
          <div className="name">Niraj Patel</div>
          <div className="about">I'm Front-End Developer</div>
          <div className="buttons">
            <button className="btn">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
