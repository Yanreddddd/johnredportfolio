import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import {
  profileVariants,
  scaleVariants,
} from "../../constants/animationVariants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>😉</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Welcome to my portfolio!</p>
              <h1 className="head-text">I'm, Johnred!</h1>
            </div>
          </div>

          <div className="tag-cmp">
            <p className="p-text">Creative Developer,</p>
            <p className="p-text">Freelancer</p>
            <p className="p-text">&</p>
            <p className="p-text">a Foodie.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={profileVariants}
        whileInView={profileVariants.whileInView}
        className="app__header-img"
      >
        {/* Todo: Please input your own profile picture, thanks! */}
        <img src={images.profilepic} alt="profilebg" />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.reactcircle, images.flutter, images.tailwind].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
