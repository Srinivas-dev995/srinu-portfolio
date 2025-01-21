"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "#" },
    { name: "Skills", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#workexp" },

    { name: "Contact", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);

  // const [activeSection, setActiveSection] = useState("#");

  // useEffect(() => {
  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setActiveSection(entry.target.id);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.9, // Trigger when 60% of the section is in view
  //   });

  //   // Observe all sections
  //   const sections = document.querySelectorAll("section");
  //   sections.forEach((section) => observer.observe(section));

  //   return () => {
  //     // Cleanup observer on component unmount
  //     sections.forEach((section) => observer.unobserve(section));
  //   };
  // }, []);

  return (
    <header className="w-screen  bg-[#222222] top-0 left-0 fixed z-50">
      <nav className="container h-[70px] flex justify-between items-center px-4">
        <div>
          {/* <h2 className="font-bold text-blue-50 dark:text-purple-600 transition-colors duration-300">
            SR
          </h2> */}
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </div>

        <ul
          className={`fixed top-0 left-0 gap-11 w-full h-full bg-[#222222] text-white flex flex-col items-center justify-center align-middle transform transition-transform duration-500 ${
            open ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:flex lg:flex-row lg:w-auto lg:h-auto lg:translate-x-0 lg:bg-transparent lg:gap-5 lg:mb-0`}
        >
          {navItems.map((items, index) => (
            <li
              className="font-semibold text-lg my-2 lg:my-0"
              onClick={() => setOpen(!open)}
              key={index}
            >
              <a
                href={items.link}
                className="relative group text-white transition hover:text-gray-400 text-decoration-none"
              >
                {items.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
          ))}
        </ul>

        <div
          className="lg:hidden z-50 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <TfiClose className="text-white h-6 w-6" />
          ) : (
            <RxHamburgerMenu className="text-white h-6 w-6" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
