import React from "react";
import "./Carousal.scss";

const Slider = ({ src, alt = "altimage" }) => {
  return (
    <div className="slider_img">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Slider;
