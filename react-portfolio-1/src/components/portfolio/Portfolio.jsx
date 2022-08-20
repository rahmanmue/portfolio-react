import React from "react";
import "./portfolio.css";
import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
} from "../../assets";

const data = [
  {
    id: 1,
    img: portfolio1,
    title: "this title portfolio",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    img: portfolio2,
    title: "this title portfolio",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    img: portfolio3,
    title: "this title portfolio",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    img: portfolio4,
    title: "this title portfolio",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    img: portfolio5,
    title: "this title portfolio",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 6,
    img: portfolio6,
    title: "this title portfolio",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        {data?.map(({ id, title, img, github, demo }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio-image">
              <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}

        {/* <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={portfolio2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={portfolio3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={portfolio4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={portfolio5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio-image">
            <img src={portfolio6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
