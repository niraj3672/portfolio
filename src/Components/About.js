import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="aboutme">
        <div classname="contentabout">
          <h2 className="heading">About Me</h2>

          <p className="content">
            I am a front-end web developer. I can provide clean code and pixel
            <br></br>
            perfect design. I also make the website more & more interactive with
            web animations.I can provide clean code and pixel perfect design. I
            <br></br>
            also make the website more & more interactive with web animations. A
            responsive design makes your website accessible to all users,
            regardless of their device.
          </p>
          <h5 className="heading1">
            Front-End Developer <span className="n">& Web Designer</span>
          </h5>
        </div>
        <div className="detelis">
          <div class="col-lg-6">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Birthday : &nbsp;</strong>
                <span>06 November 2002</span>
              </li>

              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>Phone :&nbsp;</strong> &nbsp;
                <span>+91 9426578027</span>
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                <strong>City :&nbsp;</strong> <span>Kadi</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i> <strong>Age :&nbsp;</strong>
                <span>21</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li>
                <i class="bi bi-chevron-right"></i>
                <strong>Degree :&nbsp;</strong> <span>Bachelor</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i>
                <strong>mail :&nbsp;</strong>
                <span>patelniraj3000@gmail.com</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i>
                <strong>Freelance :&nbsp;</strong> <span>Available</span>
              </li>
              <li>
                <i class="bi bi-chevron-right"></i>
                <strong>Website :&nbsp;</strong> <span>www.example.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
