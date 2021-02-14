import React from "react";
import "./Footer.scss";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer-row">
      <div className="footer-column">
        <h2>shop</h2>
        <ul>
          <li>
            <Link to="/shop/earphones">Earphones</Link>
          </li>
          <li>
            <Link to="/shop/headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/shop/speakers">Speakers</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>about</h2>
        <ul>
          <li>
            <Link to="/">Vision</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h2>contact</h2>
        <ul>
          <li>
            <Link to="/contact">Policy</Link>
          </li>
          <li>
            <Link to="/contact">Faqs</Link>
          </li>
          <li>
            <Link to="/contact">Info</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
