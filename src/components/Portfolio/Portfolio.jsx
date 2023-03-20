import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG";
import IMG4 from "../../assets/portfolio4.PNG";
import IMG5 from "../../assets/portfolio5.PNG";
import IMG6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Admin Dashboard</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/karamithat/admin-dashboard"
              className="btn "
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://admin-dashboard-karamithat.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Fitness App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/karamithat/gym-app"
              className="btn "
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://fitness-app-karamithat.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Booking.com Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/karamithat/booking.com-ui"
              className="btn "
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://booking-ui-clone.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Task Management</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/karamithat/react-task"
              className="btn "
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://tasking-management.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Fit Food Shop</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/karamithat/food-shop"
              className="btn "
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://fit-food-shop.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Wonder Tour App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/karamithat/wander-tour-app"
              className="btn "
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://wonder-tour-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        
      </div>
    </section>
  );
};

export default Portfolio;
