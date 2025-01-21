import Image from "next/image";
import React from "react";
import "../styling/cssbuttons.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="flex align-middle justify-center flex-col items-center">
          <div className="mb-7 font-bold text-[35px] bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent dark:from-[#FF5C8A] dark:to-[#D62463]">
            PROJECTS
          </div>
          <div className="flex-col gap-5 flex items-center justify-center md:flex-row md:justify-center md:items-center md:gap-10">
            <div className="flex flex-col relative rounded-lg">
              <Image
                src="/p1.png"
                width={500}
                height={500}
                alt="mentor project"
                className="w-full sm:w-9/10"
              />

              <div className="flex align-middle p-3 justify-between items-center bg-[#2A2A2A] rounded-b-lg">
                <div className="flex flex-col items-start">
                  <div className="font-poppins font-extrabold text-[10px] text-[#C5C5C5]">
                    CLICK HERE TO VISIT
                  </div>
                  <div className="text-white font-poppins font-extrabold text-[19px]">
                    HTML TUTORIAL
                  </div>
                </div>
                <div>
                  {/* <Image src="/view.svg" width={10} height={10} alt="navigation icon" /> */}

                  <a href="#" className="button1">
                    <span className="button1__icon-wrapper">
                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button1__icon-svg"
                        width="10"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button1__icon-svg button1__icon-svg--copy"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative rounded-lg">
              <Image
                src="/p1.png"
                width={500}
                height={500}
                alt="mentor project"
                className="w-full sm:w-9/10 md:w-auto"
              />
              <div className="flex align-middle p-3 justify-between items-center bg-[#2A2A2A] rounded-b-lg">
                <div className="flex flex-col items-start">
                  <div className="font-poppins font-extrabold text-[10px] text-[#C5C5C5]">
                    CLICK HERE TO VISIT
                  </div>
                  <div className="text-white font-poppins font-extrabold text-[19px]">
                    HTML TUTORIAL
                  </div>
                </div>
                <div>
                  {/* <Image src="/view.svg" width={10} height={10} alt="navigation icon" /> */}

                  <a href="#" className="button1">
                    <span className="button1__icon-wrapper">
                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button1__icon-svg"
                        width="10"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button1__icon-svg button1__icon-svg--copy"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
