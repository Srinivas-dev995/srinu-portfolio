
import Image from "next/image";
import React from "react";
import "../styling/cssbuttons.css";


const HeroSection = () => {
  return (
    <div className="container pt-[150px] items-center align-middle flex-col gap-5 lg:flex-row grid lg:grid-cols-2 grid-cols-1">
      <div className="flex flex-col gap-4 text-center lg:text-start">
        <div className="font-poppins font-extrabold text-[40px] max-w-xl text-white leading-[50px] lg:text-left">
          Hello , <br /> I'm{" "}
          <span className="text-[#15C196]">Srinivasa Reddy,</span> <br /> Front
          End Web Developer
        </div>
        <div className="text-[#C5C5C5] max-w-xl text-[18px] font-light max-wolg lg:text-left">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </div>

        <div className=" flex flex-col items-center gap-5 lg:flex lg:flex-row lg:gap-10">
          {/* <div className="bg-white text-black font-semibold text-lg py-2 px-4 rounded-[30px] cursor-pointer flex items-center justify-center align-middle">
            Resume
          </div> */}
          <button
            className="cssbuttons-io-button"
            style={{ cursor: "pointer" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
              ></path>
            </svg>
            <span>Resume</span>
          </button>

          {/* <div className="bg-none text-white border border-solid border-white font-semibold text-lg py-2 px-4 rounded-[30px] cursor-pointer flex items-center justify-center align-middle">
            Contact me
          </div> */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Contact me
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full">
        <Image
          src="/dev2.png"
          alt="hero image"
          width={500}
          height={500}
          layout="responsive"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
