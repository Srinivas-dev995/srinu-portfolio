import React from "react";
import {motion} from "framer-motion";

const variants = {
  hidden : {
    scale : 0.5,
    opacity : 0,
    transition : {
      duration : .3
    }
  },
  visible : {
    scale : 1,
    opacity : 1,
    transition : {
      duration : 1
    }
  }
}

const About = () => {
  return (
    <div>
      <section id="about" className="about" style={{backgroundColor:"#44318D"}}>
        <div className="container">
          <div className="row about-section pt-5 pb-5">
            <motion.div className="col-lg-6 mb-3 mt-sm-2 about-heading order-2 about-mobile"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            >
              <h1 className="mt-3 text-info" style={{textDecoration:"underline"}}>About Myself</h1>
              <h2 className="mt-3" style={{fontSize:"1.5rem",color:"white"}}>I'm Srinivasa Reddy</h2>
              <p style={{color:"white"}} className="about-myself mt-2">
                Hello and welcome! I'm Srinivasa Reddy , an aspiring Java Full
                Stack Developer passionate about creating innovative solutions
                and pushing the boundaries of technology. I graduated in the stream of Mechanical Engineering with an aggregate percentage of 80% from the prestegious IIIT-ONGOLE which is located in 
                Andhra Pradesh.
              </p>
            </motion.div>
            <motion.div className="col-lg-6 mb-3 about-heading order-1 d-flex justify-content-center align-items-center"
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:.5}}
            viewport={{once:true}}
            >
              <img className="about-image" src="839.jpg" alt="my image"/>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
