import React from "react";
import { urlFor } from "../../client";
import { motion } from "framer-motion";

import { hoverVariants } from "../../constants/animationVariants";

import "./About.scss";
import { useStateContext } from "../../constants/StateContext";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const { abouts } = useStateContext();

  return (
    <>
      <h2 className="head-text">
        {" "}
        I believe <span>Creative Designs</span> leads to{" "}
        <span>Successful Results</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            variants={hoverVariants}
            whileInView={hoverVariants.whileInView}
            whileHover={hoverVariants.whileHover}
            className="app__profile-item"
            key={about._id}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title + index} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
