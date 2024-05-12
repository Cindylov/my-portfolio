import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./portfolio.css";
import cv from "./AnyaohaUjunwaCynthiaResume.pdf";
import photimages from "../../component/images/phot1.png";
import foodimages from "../../component/images/resturant.PNG";
import todoimages from "../../component/images/to-do.PNG";
import surveyimages from "../../component/images/survey.PNG";
import {
  RiMenuFill,
  RiCloseFill,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d60cxss", "template_ntnnksl", form.current, {
        publicKey: "tcwjVToVZUdL5zJ1u",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowAlert(true);
          form.current.reset();
          setTimeout(() => setShowAlert(false), 10000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 90 },
    { name: "JAVASCRIPT", level: 80 },
    { name: "REACT JS", level: 70 },
    { name: "NODE JS", level: 60 },
    { name: "EXPRESS JS", level: 50 },
    { name: "MONGODB", level: 40 },
  ];

  useEffect(() => {
    skills.forEach((skill) => {
      const progress = document.getElementById(skill.name);
      const width = (progress.parentElement.offsetWidth * skill.level) / 100;
      progress.style.width = `${width}px`;
      progress.style.backgroundColor = "#00aeff"; // Adjust color as needed
    });
  }, []);

  return (
    <div className="container">
      {/* the header part */}
      <header>
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? (
              <RiCloseFill fontSize={27} />
            ) : (
              <RiMenuFill fontSize={27} />
            )}
          </div>
          <div className="logo"></div>
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* my info/bio design section */}
      <section id="home">
        <div className="info">
          <div className="bio">
            <h3>Hello, It's me</h3>
            <h1>Anyaoha Ujunwa Cynthia</h1>
            <h3>
              I am a <span>Frontend Developer.</span>
            </h3>
            <p>
              A dedicated web developer, focused on creating visually appealing
              <br />
              and user-friendly websites through innovative approaches and
              <br />
              collaboration.
            </p>
            <a href={cv} target="new" className="btn">
              Download my resume
            </a>

            <div class="social">
              <a
                href="https://www.facebook.com/ujunwa.cynthia.737?mibextid=JRoKGi"
                target="blank"
              >
                <RiFacebookCircleFill />
              </a>
              <a href="https://twitter.com/AnyaohaUjunwa" target="blank">
                <RiTwitterXFill />
              </a>
              <a
                href="https://www.instagram.com/ujunwa.cynthia.737?igsh=MWNseWRsNmhteGVxbg%3D&utm_source=qr"
                target="blank"
              >
                <RiInstagramLine />
              </a>
              <a
                href="https://www.linkedin.com/in/ujunwa-cynthia-47a9b628a"
                target="blank"
              >
                <RiLinkedinFill />
              </a>
            </div>
          </div>

          <div className="infoimgcont">
            <img src={photimages} alt="my picture" className="photo" />
          </div>
        </div>
      </section>

      {/* skill section design */}
      <section id="skill" className="skill">
        <h1>My Skills</h1>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div className="progress" id={skill.name}></div>
                <div className="progress-percent">{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* future project design section */}
      <section id="project" className="project">
        <h1>
          <span>Projects</span>
        </h1>
        <div className="project-container">
          <div className="fp">
            <img src={foodimages} alt="image" />
            <div className="task">
              <h3>Restaurant Landing-page</h3>
              <a href="" target="blank">
                The link
              </a>
            </div>
          </div>

          <div className="fp">
            <img src={todoimages} alt="image" />
            <div className="task">
              <h3>To-do list</h3>
              <a href="" target="blank">
                The link
              </a>
            </div>
          </div>

          <div className="fp">
            <img src={surveyimages} alt="image" />
            <div className="task">
              <h3>survey-form</h3>
              <a href="" target="blank">
                The link
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* contact design section */}
      <section id="contact" className="contact">
        <h1>Contact Me</h1>
        <div className="detail">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" />
            <br />
            <input type="email" name="user_email" placeholder="Email" />
            <br />
            <textarea name="message" placeholder="Message" />
            <br />
            <button type="submit">Send</button>
          </form>
          {showAlert && (
            <div className="alert">
              <p>Message sent successfully!</p>
            </div>
          )}
        </div>
      </section>

      {/* footer */}
      <footer>
        <p>&copy; Cindy</p>
      </footer>
    </div>
  );
};

export default Portfolio;
