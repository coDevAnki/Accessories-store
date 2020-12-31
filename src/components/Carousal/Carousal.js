import React, { useEffect, useState } from "react";
import "./Carousal.scss";
import Slider from "./Slider";
export const data = [
  "https://res.cloudinary.com/codevanki/image/upload/v1603776820/images/Status-Audio_IEM-2X_Gunmetal_Main-02_900x_nailnc.jpg",
  "https://res.cloudinary.com/codevanki/image/upload/v1609042569/images/STATUS_about-flat-products_1400x_m3s24v.jpg",
  "https://res.cloudinary.com/codevanki/image/upload/v1606571836/images/Headphone-Zone-Skullcandy-Ink_d_-Wireless-Earbuds-Pastel-Pink-1160-1160-1_2000x_e8pazy.jpg",

  "https://res.cloudinary.com/codevanki/image/upload/v1603774374/images/BTS-2X_Storm_Right-Ear-1_On-Gray_900x_jlanun.jpg",

  "https://res.cloudinary.com/codevanki/image/upload/v1603777075/images/blue1_xxtftp.png",

  "https://res.cloudinary.com/codevanki/image/upload/v1603777281/images/Blue-Red-1_1024x1024_i3nekw.png",

  "https://res.cloudinary.com/codevanki/image/upload/v1603777517/images/Pink1_b89a069e-3db2-458a-8aa5-75229b819cf4_1024x1024_o6f88t.png",
];

const getPrev = (current, total) => {
  return (current - 1 + total) % total;
};
const getNext = (current, total) => {
  return (current + 1) % total;
};

const Carousal = ({ allImages = data, active, autoplay = false }) => {
  const [activeIndex, setActiveIndex] = useState(active || 0);
  const [transform, setTransform] = useState({
    translateX: -100,
    transition: 0,
  });

  const neededImages = () => {
    let prev = getPrev(activeIndex, allImages.length);
    let next = getNext(activeIndex, allImages.length);
    return [allImages[prev], allImages[activeIndex], allImages[next]];
  };

  const handleLeft = (e) => {
    if (e) e.preventDefault();
    setTransform({ translateX: 0, transition: 1 });
    setTimeout(() => {
      setActiveIndex(getPrev(activeIndex, allImages.length));
    }, 1000);
  };

  const handleRight = (e) => {
    if (e) e.preventDefault();
    setTransform({ translateX: -200, transition: 1 });
    setTimeout(() => {
      setActiveIndex(getNext(activeIndex, allImages.length));
    }, 1000);
  };

  useEffect(() => {
    setTransform({ translateX: -100, transition: 0 });
  }, [activeIndex]);

  useEffect(() => {
    let timer;
    if (autoplay) {
      timer = setInterval(handleRight, autoplay * 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [activeIndex]);

  return (
    <div className="carousal_wrapper">
      <div
        className="carousal_container"
        style={{
          transform: `translateX(${transform.translateX}vw)`,
          transition: `${transform.transition}s ease all`,
        }}
      >
        {neededImages().map((src, index) => (
          <Slider src={src} key={index + "slider"} />
        ))}
      </div>
      {autoplay ? null : (
        <>
          <button className="controller controller-left" onClick={handleLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="controller controller-right" onClick={handleRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousal;
