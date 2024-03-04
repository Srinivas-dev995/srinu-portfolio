import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  const menuItems = [
    {
      home: "Home",
      link: "home",
    },
    {
      home: "About",
      link: "about",
    },
    {
      home: "Skills",
      link: "skills",
    },
    {
      home: "Projects",
      link: "projects",
    },
    {
      home: "Contact me",
      link: "contact",
    },
  ];

  return (
    <section id="footer">
      <div className="container-fluid">
        <div className="footer-container">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,192L48,165.3C96,139,192,85,288,58.7C384,32,480,32,576,48C672,64,768,96,864,117.3C960,139,1056,149,1152,154.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="body-container">
            <div className="footer-section">
              <ul className="footer-sections">
                {menuItems.map((item) => (
                  <Link
                    className="footer-item text-black"
                    to={item.link}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                  >
                    {item.home}
                  </Link>
                ))}
              </ul>
              <div className="gg d-flex justify-content-center align-items-center flex-column">
                <div className="footer-icons">
                  <a
                    className="text-black"
                    href="https://www.linkedin.com/in/srinivasa-reddy-elakoti-249075241/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="text-black"
                    href="https://github.com/Srinivas-dev995"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="text-black"
                    href="https://www.instagram.com/srasri_28?igsh=MTI1MGJmM2xpOWxybg=="
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
                <div className="footer-copy">
                  <hr style={{ width: "90%" }} />
                  <div className="d-flex justify-content-center">
                    <FaRegCopyright
                      className="mt-1"
                      style={{ marginRight: "5px" }}
                    />
                    <p className="copyRight">Srinivasa Reddy, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
