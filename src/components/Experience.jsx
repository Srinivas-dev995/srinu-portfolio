import React from "react";
import "../styling/tickerexp.css";
import Marquee from "react-fast-marquee";

const Experience = () => {
  const techStacks = [
    "React",
    "Next.js",
    "Framer Motion",
    "Framer",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Java",
    "Spring Boot",
    "Sql",
  ];
  return (
    <section id="experience">
      <div className="container overflow-hidden">
        <div className="hidden lg:block overflow-hidden absolute top-[200px] left-[50px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500 to-red-500 blur-[400px] "></div>{" "}
        <div className="flex align-middle justify-center flex-col items-center">
          <h2 className="text-[#C5C5C5] font-bold text-[20px]">
            EXPERIENCE WITH
          </h2>

          <Marquee
            className="max-w-[70%] pt-4"
            passOnHover={true}
            pauseOnClick={true}
          >
            {techStacks.map((tech, index) => (
              <div
                key={index}
                className="tech-stack-item text-white text-xl mx-4 cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Experience;
