import React from "react";
import Carousal from "../../components/Carousal/Carousal";
import Directory from "../../components/Directory/Directory";
import RevealCard from "../../components/RevealCard/RevealCard";
import "./Homepage.scss";
import images from "./images";

const HomePage = () => {
  return (
    <div className="homepage reveal">
      <Carousal
        allImages={images}
        // autoplay={5}
        active={1}
      />
      <Directory />

      <div className="stories_container">
        <div className="story1">
          <RevealCard>
            <img
              src="https://res.cloudinary.com/codevanki/image/upload/v1613214143/images/level_home_launch_3_udcqzu.webp"
              alt=""
            />
            <h1> Superior sound that's made to move </h1>
            <p>
              Five powerful drivers meets adaptive sound technology. Move with
              your music in new ways at home.
            </p>
            {/* <h1>Home Is A Hub For Everything</h1>
            <div>
              Made with every listener in mind. Purpose-built, boldly simple
              headphones.
            </div> */}
          </RevealCard>
        </div>
        <div className="story2">
          <RevealCard>
            <img
              src="https://res.cloudinary.com/codevanki/image/upload/v1613217049/images/c240_201202_BEO_HSS_DAY293490_4_v03_small_2_rdvogu.webp"
              alt=""
            />
            <h1> Speakers, simply connected </h1>
            <p>
              Sounds better together. Enjoy an immersive listening experience
              throughout your home. Simple, seamless, stunning.{" "}
            </p>
          </RevealCard>
        </div>
        <div className="story3">
          <RevealCard>
            <img
              src="https://res.cloudinary.com/codevanki/image/upload/v1613214470/images/BL20s_bqdrx5.webp"
              alt=""
            />
            <h1>Music Matters</h1>
            <div> The Sound of Unstoppable </div>
          </RevealCard>
        </div>
        <div className="story4">
          <RevealCard>
            <img
              src="https://res.cloudinary.com/codevanki/image/upload/v1607403889/images/home-speaker-system-balance-hero_fvkeeh.webp"
              alt=""
            />
            <h1>Create your own Sound environment </h1>
          </RevealCard>
        </div>
        <div className="story5">
          <RevealCard>
            <img
              src="https://res.cloudinary.com/codevanki/image/upload/v1613214424/images/Natale_portrait_ksxplm.webp"
              alt=""
            />
            <h1>Crafting moments</h1>
            <div> Gifts for celebrating music</div>
          </RevealCard>
        </div>
        <div className="story6">
          <RevealCard>
            <img
              src="https://res.cloudinary.com/codevanki/image/upload/v1613214660/images/BL90_square_new_olzgaw.webp"
              alt=""
            />
            <h1> The Sound of Home</h1>
          </RevealCard>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
