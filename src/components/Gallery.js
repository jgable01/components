import React from "react";
import Images from "../img/AR-VR.jpg";

function Gallery() {
  return (
    <div id="gallery">
      <h2 class="title-gallery">Gallery</h2>
      <div className="gallery-list">
        <div className="img1">
          <img src={Images}></img>
        </div>
        <div className="img2">
          <img src={Images}></img>
        </div>
        <div className="img3">
          <img src={Images}></img>
        </div>
        <div className="img4">
          <img src={Images}></img>
        </div>
        <div className="img5">
          <img src={Images}></img>
        </div>
        <div className="img6">
          <img src={Images}></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
