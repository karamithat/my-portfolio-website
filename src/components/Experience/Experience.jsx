import React from "react";
import "./Experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiRedis } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="icon" />
              <div>
                <h4>TAILWIND CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNextdotjs className="icon" />
              <div>
                <h4>NEXT.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="icon" />
              <div>
                <h4>NODE.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="icon" />
              <div>
                <h4>EXPRESS.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="icon" />
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPostgresql className="icon" />
              <div>
                <h4>POSTGRESQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPrisma className="icon" />
              <div>
                <h4>PRISMA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiRedis className="icon" />
              <div>
                <h4>REDIS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
