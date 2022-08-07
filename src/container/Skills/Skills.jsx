import React from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { useStateContext } from "../../constants/StateContext";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { urlFor } from "../../client";

const Skills = () => {
  const { skills, experiences, tooltip, setTooltip } = useStateContext();

  return (
    <>
      <h2 className="head-text">Skills and Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill._id}
                data-tip
                data-for={skill.name}
                onMouseEnter={() => setTooltip(true)}
                onMouseLeave={() => setTimeout(() => setTooltip(false), 5000)}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: "#edf2f8" }}
                >
                  <img src={urlFor(skill.icon)} alt={"img-" + skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
              {tooltip && (
                <ReactTooltip
                  id={skill.name}
                  effect="solid"
                  arrowColor="#c15858"
                  className="skills-tooltip"
                >
                  {skill.desc}
                </ReactTooltip>
              )}
            </>
          ))}
        </motion.div>
        <motion.div>
          <div className="app__skills-exp">
            {experiences.map((experience) => (
              <motion.div className="app__skills-exp-item" key={experience._id}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work, index) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work app__flex"
                        data-tip
                        data-for={work.name}
                        key={work._id}
                        onMouseEnter={() => setTooltip(true)}
                        onMouseLeave={() =>
                          setTimeout(() => setTooltip(false), 5000)
                        }
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      {tooltip && (
                        <ReactTooltip
                          id={work.name}
                          effect="solid"
                          arrowColor="#c15858"
                          className="skills-tooltip"
                        >
                          {work.desc}
                        </ReactTooltip>
                      )}
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
