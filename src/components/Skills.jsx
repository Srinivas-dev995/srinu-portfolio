import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const cards = [
    {
      image: "frontendCard.jpg",
      title: "Frontend Skills",
      skill: [
        "HTML",
        "CSS",
        "BOOTSTRAP",
        "JAVASCRIPT",
        "REACTJS",
        "FRAMER-MOTION",
        "THREE.JS",
      ],
    },
    {
      image: "backendCard.jpg",
      title: "Backend Skills",
      skill: ["Java", "SPRING", "SpringBoot", "SQL", "PYTHON", "HIBERNATE"],
    },
  ];

  return (
    <section id="skills" className="skill">
      <div className="container">
        <h1 className="text-center mb-5 text-white">Technical Skills</h1>
        <div className="cards-container">
          {cards.map((item, i) => (
            <motion.div
              className="frontend-card"
              initial={{ opacity: 0, translateY: -70 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: i * 0.3,
              }}
            >
              <div>
                <div className="card-image d-flex justify-content-center ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="frontend-image mt-2"
                  />
                </div>
                <hr />
                <div className="card-skills-section  text-center">
                  <h4 className="skill-section mb-3">{item.title}</h4>
                  <ul className="skill-container">
                    {item.skill.map((skills, i) => (
                      <motion.li
                        className="mySkill"
                        key={skills}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05, duration: 1 }}
                      >
                        {skills}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
