import React from "react";
import "./ItemInfoFooter.scss";

const ItemInfoFooter = ({ name, price, forPage }) => {
  return (
    <div className={`collection-footer ${forPage === "shop" ? "shop" : ""}`}>
      <span className="name ">{name}</span>
      <span className="price">Rs {price}</span>
    </div>
  );
};

export default ItemInfoFooter;
