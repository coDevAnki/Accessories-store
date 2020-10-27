import React, { Component } from "react";
import Directory from "../../components/Directory/Directory";
import "./Homepage.scss";

export class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
