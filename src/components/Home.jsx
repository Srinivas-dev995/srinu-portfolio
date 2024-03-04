import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className=""
      style={{ backgroundColor: "InactiveCaption" }}
    >
      <div className="container home d-flex justify-content-center align-items-center">
        <div
          className="row d-flex justify-content-center align-items-center mb-5"
          style={{ marginTop: "90px", height: "61vh" }}
        >
          <motion.div className="col-lg-6 col-sm-12 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <motion.h1
                style={{ color: "#2A2B2DFF" }}
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 20, damping: 20 }}
                className="home-header"
              >
                I'm a Java Full Stack Developer
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 20, damping: 20 }}
              >
                <p>
                  Experienced in end-to-end development of scalable web
                  applications using Java-based technologies for both frontend
                  and backend components. Skilled in Spring Boot, Hibernate, and
                  modern frontend frameworks. Proficient in database management,
                  RESTful API development, testing, Agile methodologies.
                  Passionate about continuous learning and driving innovation.
                </p>
                <a
                  className="resume-button"
                  href="https://drive.google.com/file/d/1JItBNe3uemVrf2oye0lazc0DQrzoiLVn/view?usp=drivesdk"
                  target="_blank"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
