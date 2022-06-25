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
            Hi there👋 My name is Mithat. I graduated from the department of
            business administration in 2017. I have experience in various
            industries. But I realized that I am not happy with the work I do. I
            started working on software during the pandemic period. I started to
            feel good. Since that day, I spend my time improving myself and
            learning. I graduated a frontend developer course with Angular and
            React js at Bilge Adam.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
