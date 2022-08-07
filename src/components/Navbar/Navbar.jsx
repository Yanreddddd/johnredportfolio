import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

import "./Navbar.scss";
import { images } from "../../constants";

import { useStateContext } from "../../constants/StateContext";
import { navbar } from "../../constants/profileData";

const Navbar = () => {
  const { toggle, handleMenu } = useStateContext();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" href="#home" />
      </div>
      <ul className="app__navbar-links">
        {navbar.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiOutlineMenuAlt4 size="44px" onClick={handleMenu} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <HiX size="44px" onClick={handleMenu} />
            <ul>
              {navbar.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={handleMenu}>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
