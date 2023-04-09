import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Hi there👋 My name is Mithat. I graduated from the Department of
            Business Administration in 2017 and have since gained experience
            across a range of industries. However, I discovered that I wasn't
            fulfilled in those roles. When the pandemic hit, I turned to
            software development and found a new passion. Since then, I've been
            dedicating my time to self-improvement and continuous learning. <br/><br/> I
            completed a Frontend Developer course at Bilge Adam, where I honed
            my skills in Javascript and React.js. Currently, I'm not only
            working as an active Frontend Developer but also pursuing a degree
            in Computer Engineering. With a drive to innovate and create, I am
            excited to explore the possibilities that lie ahead in the world of
            software development.<br/><br/> Feel free to connect with me on LinkedIn as I
            am always eager to collaborate and learn from like-minded
            professionals. Let's shape the future of technology together!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mithat-kara/" className="btn btn-primary">
           LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
