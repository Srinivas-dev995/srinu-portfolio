import React from "react";
import { items } from "../data/items";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 400, 
        settings: {
          slidesToShow: 1, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 1240, 
        settings: {
          slidesToShow: 3, 
        },
      },
    ],
  };

  return (
    <section id="projects" className="bg-black p-3">
      <div className="container mt-5 mb-5">
        <h1 className="text-center text-white mb-5">Projects</h1>
        <Slider {...settings} className="projects">
          {items.map((item) => (
            <div className="project-card">
              <div className="p-2">
                <div className="card-image d-flex justify-content-center ">
                  <img
                    src={item.image}
                    alt="frontendcard"
                    className="project-image mt-2"
                  />
                </div>
                <hr />
                <div className="card-skills-section  text-center">
                  <h4 className="skill-section mb-3" style={{fontWeight:"600"}}>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="frontend-body">
                <p>
                  <a href="https://github.com/Srinivas-dev995" target="_blank">
                    <FaExternalLinkAlt className="link-icon" style={{fontSize:"1.5rem"}} />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
