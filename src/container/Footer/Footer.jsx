import React from "react";

import { images } from "../../constants";
import { useStateContext } from "../../constants/StateContext";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const { formData, handleChangeInput, handleSubmit, loading, isFormSubmitted } =
    useStateContext();

  const { username, email, message } = formData;

  return (
    <>
      <h2 className="head-text">Let's have brunch!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="img-email" />
          <a href="mailto:johnredkristian@gmail.com" className="p-text">
            johnredkristian.demafeliz@gmail.com
          </a>
        </div>
        
        <div className="app__footer-card">
          <img src={images.mobile} alt="img-mobile" />
          <a href="tel:+63 9519716337" className="p-text">
            +63 9519716337
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              name="username"
              placeholder="Your Name"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your E-Mail"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <textarea
              className="p-text"
              name="message"
              value={message}
              placeholder="Your message"
              onChange={handleChangeInput}
            />
          </div>
          <button className="p-text" onClick={handleSubmit} type="button">
            {!loading ? "Send Message" : "Sending message..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch! We'll be with you shortly.
          </h3>
        </div>
      )}
      
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
