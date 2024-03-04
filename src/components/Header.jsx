import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const variants = {
  hidden: {
    x: 0,
    opacity: 0,
    transition: {
      delay: 0,
      duration: 1,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.8,
    },
  },
};

const Header = () => {
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

  const [open, setOpen] = useState(false);

  return (
    <div className="container-fluid">
      <header className="navabar">
        <div className="logo-container">
          <a className="logo-name" href="">
            Portfolio<span className="span-element">.</span>
          </a>
        </div>
        <div
          variants={variants}
          className={`sections ${open ? "visible" : "hidden"}`}
        >
          {menuItems.map((item) => (
            <Link
              to={item.link}
              className="links"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-20}
              duration={200}
              onClick={() => setOpen(!open)}
            >
              {item.home}
            </Link>
          ))}
        </div>
        <div className="follow-section">
          <a href="https://www.linkedin.com/in/srinivasa-reddy-elakoti-249075241/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Srinivas-dev995" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/srasri_28?igsh=MTI1MGJmM2xpOWxybg==" target="_blank">
            <FaInstagram />
          </a>
        </div>
        <div className="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? (
            <RxCross2 style={{ fontSize: "2.5rem" }} />
          ) : (
            <FiMenu style={{ fontSize: "2.5rem" }} />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
