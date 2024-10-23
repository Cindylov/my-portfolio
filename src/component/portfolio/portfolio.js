import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./portfolio.css";
import cv from "./AnyaohaUjunwaCynthiaResume.pdf";
import photimages from "../../component/images/phot1.png";
import wheatherimages from "../../component/images/wheather.png";
// import todoimages from "../../component/images/to-do.PNG";
import expenses from "../../component/images/expenses.png"
// import surveyimages from "../../component/images/survey.PNG";
import fitimages from "../../component/images/fitgoals.png"
import {
  RiMenuFill,
  RiCloseFill,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { BiSolidUpvote } from "react-icons/bi";

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

  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Function to handle scrolling and show/hide the button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach scroll event listener
  window.addEventListener("scroll", handleScroll);

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
            <img src={fitimages} alt="image" />
            <div className="task">
              <h3>fit Goals</h3>
              <div className="proj">
              <a href="https://fitgoals.onrender.com" target="blank">
              Live Preview
              </a>
              <a href="https://github.com/Cindylov/fitgoals" target="blank">View Code</a>
              </div>
            </div>
          </div>

          <div className="fp">
            <img src={expenses} alt="image" />
            <div className="task">
              <h3>Expenses Tracker</h3>
              <div className="proj">
              <a href="https://expenses-taupe.vercel.app/" target="blank">
              Live Preview
              </a>
              <a href="https://github.com/Cindylov/expenses" target="blank">View Code</a>
              </div>
            </div>
          </div>

          <div className="fp">
            <img src={wheatherimages} alt="image" />
            <div className="task">
              <h3>wheather App</h3>
              <div className="proj">
              <a href=" https://cindylov.github.io/weather/" target="blank">
              Live Preview
              </a>
              <a href="https://github.com/Cindylov/weather" target="blank">View Code</a>
              </div>
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

      <button
        onClick={scrollToTop}
        className="scrollto"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: isVisible ? "block" : "none",
        }}
      >
        <BiSolidUpvote />
      </button>
    </div>
  );
};

export default Portfolio;
