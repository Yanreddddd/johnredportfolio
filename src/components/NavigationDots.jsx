import React from "react";
import { navbar } from "../constants/profileData";

const NavigationDots = ({ active }) => {

  return (
    <div className="app__navigation">
      {navbar.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          key={index + item}
          href={`#${item}`}
          style={active === item ? { backgroundColor: "#C15858" } : {}}
          className="app__navigation-dot"
        />
      ))}
    </div>
  );
};

export default NavigationDots;
