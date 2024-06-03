import React from "react";
import { TbArrowWaveRightDown } from "react-icons/tb";

const Featured = () => {
  return (
    <section id="featured" className="feature-container" style={{backgroundColor:"#EAE7DC"}}>
      <div className="container">
        <div className="row featured-section pt-5 pb-5 d-flex justify-content-center align-items-center">
          <div className="col-lg-4">
            <h1 className="mb-3">
              Featured On <TbArrowWaveRightDown />
            </h1>
          </div>
          <div className="my-works  col-lg-4 mb-3">
            <img className="upwork" src="upwork.png" alt="upwork" />
          </div>
          <div className="my-works  col-lg-4">
            <img className="fiverr" src="fiverr.png" alt="fiverr" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
