import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";


const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/Yanreddddd" target="_blank" rel="noreferrer" >
      <div className="github" style={{cursor: "pointer"}}>
        <BsGithub />
      </div>
        </a>
      <a href="https://www.instagram.com/redddddyyyy/" target="_blank" rel="noreferrer" >
      <div className="instagram" style={{cursor: "pointer"}}>
        <BsInstagram />
      </div>
        </a>
        <a href="https://www.linkedin.com/in/johnred-demafeliz-ab87b9214/" target="_blank" rel="noreferrer" >
      <div className="linked-in" style={{cursor: "pointer"}}>
          <BsLinkedin />
      </div>
        </a>
    </div>
  );
};


export default SocialMedia;

