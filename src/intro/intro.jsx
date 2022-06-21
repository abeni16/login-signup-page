import React from "react";
import "./intro.css";
import Me from "../toppng.com-listening-music-2949x3993.png";
import logo from "../logo1.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-warpper">
          <div className="i-logo">
            <img src={logo} alt="" className="i-intro" />
          </div>

          <h2 className="i-name">
            Music,Podcast & AudioBook Streaming Platform
          </h2>
          <div className="i-btn">
            <button class="reset btn-gradient-2">Login</button>
            <button class="reset btn-gradient-2">SignUp</button>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
