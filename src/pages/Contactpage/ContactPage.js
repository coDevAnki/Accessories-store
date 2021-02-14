import React from "react";
import FaqAccordian from "../../components/FaqAccordian/FaqAccordian";
import "./ContactPage.scss";
const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <div className="side-header"> Contact</div>
      <div className="contact-container">
        <p>
          We are here to help and love hearing from existing and prospective
          customers alike. If you cannot find the information you are looking
          for in the FAQ below, please contact us via the message box. This will
          beam your inquiry directly to our support team, and will be fielded
          within 24 hours. We may even surprise you and respond much quicker.
        </p>

        <div className="faq">
          <h4>FAQ</h4>
          <FaqAccordian />
        </div>

        <form className="form-container">
          <h4>CONTACT FORM</h4>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" />
          <input placeholder="Message Subject" />
          <textarea placeholder="Your message to us" rows="15" />
        </form>
        <div className="our_info_container">
          <div className="our_info_row">
            <div className="our_info_label">Our Email</div>
            <div className="our_info_detail"> abcd@gmail.com </div>
          </div>
          <div className="our_info_row">
            <div className="our_info_label">Our Address</div>
            <div className="our_info_detail">
              kolkata -74, west bengal, india
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
