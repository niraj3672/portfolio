import React from "react";
import "./Education.css";

function Education() {
  return (
    <div>
      <div className="container1">
        <div className="resume-container">
          <div className="title1">
            <h1>Resume</h1>
          </div>
        </div>
        {/* <h3 class="resumetitle">Sumary</h3> */}
        <div className="resumeitem">
          <h4>NIRAJ PATEL</h4>
          <ul>
            <li>Kadi,Gujrat,India</li>
            <li>+91 9426578027</li>
            <li>patelniraj3000@gmail.com</li>
          </ul>
          <h4 className="resumetitle1">* Education</h4>
          <h4 className="resumetitle2">Bachelor of computer application</h4>
          <h5>2020 - 2023</h5>
          <p>
            <em>Shree R.K.Patel BCA College,KADI</em>
          </p>
          <p>
            a Bachelor of Computer Applications (BCA) degree is that it can lead
            to a multi-faceted career.
          </p>
          <h4 class="resumetitle1">* Training Experience</h4>
          <h4 className="resumetitle2">FRONT-END DEVELOPER</h4>
          <h5>2023 - Present</h5>
          <p>
            <em>Promise Academy,Naranpura,Ahmedabad </em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
