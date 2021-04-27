import React from "react";
import "./Carousal.scss";

const Slider = ({ src, srcset, text, position, alt = "altimage" }) => {
  return (
    <div className="slider_img">
      <picture>
        {srcset
          ? srcset.map(({ srcset, media }, index) => (
              <source
                key={`slider-srcset ${index}`}
                srcset={srcset}
                media={media}
              ></source>
            ))
          : null}
        <img src={src} alt={alt} />
      </picture>
      <div className={`overlay-text${position ? " " + position : ""}`}>
        <span className="reveal">{text}</span>
      </div>
    </div>
  );
};

export default Slider;
