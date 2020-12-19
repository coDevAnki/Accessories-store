import React, { useEffect, useState } from "react";
import Carousal from "../../components/Carousal/Carousal";
import Directory from "../../components/Directory/Directory";
import useOnSreen from "../../custom-hooks/useOnScreen";
import "./Homepage.scss";
import images from "./images";

const HomePage = ({ doTransition }) => {
  const [active, setActive] = useState(false);
  const [visible, setRef] = useOnSreen({ rootMargin: "-100px" });
  useEffect(() => {
    setActive(visible);
  }, [visible]);

  return (
    <div className={`homepage ${doTransition ? "reveal" : ""}`}>
      <Carousal
        allImages={images}
        // autoplay={5}
        active={1}
      />
      <Directory />
      <div ref={setRef} className={`slide-in${active ? " active" : ""}`}>
        <img
          src="https://res.cloudinary.com/codevanki/image/upload/v1607403889/images/home-speaker-system-balance-hero_fvkeeh.webp"
          alt="img"
        />
      </div>
    </div>
  );
};

export default HomePage;
