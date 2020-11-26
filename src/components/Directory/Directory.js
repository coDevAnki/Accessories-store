import React from "react";
import Carousal from "../Carousal/Carousal";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

let content = {
  Speaker: {
    title: "Speaker",
    imageUrl:
      "https://res.cloudinary.com/codevanki/image/upload/v1601534107/images/Balance_her_natural_oak_fckiw4.webp",
    size: "large",
    id: 2,
    linkUrl: "/speaker",
  },
  Headphones: {
    title: "Headphones",
    imageUrl:
      "https://res.cloudinary.com/codevanki/image/upload/v1601534108/images/h9-anthracite_CMS_CT1_xeqxqy.webp",
    size: "large",
    id: 3,
    linkUrl: "/headphones",
  },
  Earplugs: {
    title: "Earplugs",
    imageUrl:
      "https://res.cloudinary.com/codevanki/image/upload/v1601534108/images/earfins_e6_ywhxqz.webp",
    size: "large",
    id: 4,
    linkUrl: "/earplugs",
  },
};

const Directory = () => {
  return (
    <>
      <div
        className="landing-page"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/codevanki/image/upload/v1601534107/images/Acc_category_fclnlm.webp")`,
        }}
      />
      {/* <div className="landing-page">
        <Carousal />
      </div> */}
      <div className="directory-menu">
        {Object.values(content).map(({ id, ...otherProps }) => (
          <MenuItem id={id} {...otherProps} />
        ))}
      </div>
    </>
  );
};

export default Directory;
