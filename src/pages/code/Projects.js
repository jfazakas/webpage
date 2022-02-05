import React from "react";
import marinaParkingImg from "./images/marina_parking_opt.jpg";
import togitalImg from "./images/togital_opt.jpg";
import u3cImg from "./images/pexels-photomix-company-106344_opt.jpg";
import bmwImg from "./images/bmw.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="content-wrap item-details divider">
        <h2>Featured Projects</h2>

        <section className="project-item">
          <img className="img" src={bmwImg} alt="BMW WLTP" />
          <h3>BMW Group - WLTP project</h3>
          <p>
            Implemented core solutions for the EVE application in support of the
            World Harmonized Light Vehicles Test Procedure project.
          </p>
          <a
            className="btn"
            href="https://www.bmw.com/en/innovation/wltp.html"
            target="_blank"
          >
            View company
          </a>
        </section>

        <section className="project-item">
          <img
            className="img"
            src={marinaParkingImg}
            alt="Small Marina Booking Application"
          />
          <h3>Small Marina Booking Application</h3>
          <p>
            Acted as a member of an Agile team responsible for developing a
            Small Marina Booking System to manage boat space leasing and service
            booking without contacting a human operator using JavaScript, React,
            PHP, and MySQL.
          </p>
          <a
            className="btn"
            href="https://www.redrock.no/digital-infrastructure/showcase/#"
            target="_blank"
          >
            View company
          </a>
        </section>

        <section className="project-item">
          <img
            className="img"
            src={togitalImg}
            alt="Togital Transportation Management System"
          />
          <h3>Togital Transportation Management System</h3>
          <p>
            Contributed to the implementation and improvement of several modules
            for the Togital Transportation Management System consisting of a
            web-shop, integrated multiple payment providers, comprehensive
            administration solution, embedded route maps, Android and iOS apps,
            and a creative POS (Point of Sale) solution to issue tickets to
            passengers using Angular, jQuery, PHP, and MySQL.
          </p>
          <a
            className="btn"
            href="https://www.redrock.no/digital-infrastructure/showcase/#"
            target="_blank"
          >
            View company
          </a>
        </section>

        <section className="project-item">
          <img
            className="img"
            src={u3cImg}
            alt="Unified Contact Center Control"
          />
          <h3>U3C - Unified Contact Center Control</h3>
          <p>
            Collaborated with an agile team to implement modules for a Quality
            Management System based on COPC and Lean principles, including
            client surveys, agent monitoring, audit calibration, and integrated
            feedback loops; utilized JavaScript, ELM, TypeScript, Rx/JS, PHP,
            and PostgreSQL.
          </p>
          <a className="btn" href="http://intersoft.nl" target="_blank">
            View company
          </a>
        </section>
      </div>
    </section>
  );
};

export default Projects;
