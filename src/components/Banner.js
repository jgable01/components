import React from "react";
import Button from "./Button";
import Images from "../img/AR-VR.jpg";
import Images2 from "../img/coding.gif";

function Banner() {
  return (
    <div className="hero-banner">
      <div className="hero-banner_content">
        <div className="hero-banner_box">
          <div className="hero-banner_box-left">
            <h2 className="hero-banner_title">Tech-Quick</h2>
            <p>
              Connect with like-minded induviduals and expand your network; all
              while learning about the latest tech news and trends.
            </p>
            <div className="buttons">
              <Button text="Sign Up" type="button primary" />
              <Button text="Log in" type="button secondary" />
            </div>
          </div>
          <div className="hero-banner_box-right">
            <img src={Images2} alt="Coder" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
