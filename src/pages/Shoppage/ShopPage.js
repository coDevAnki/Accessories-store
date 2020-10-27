import React, { Component } from "react";
import PreviewCollection from "../../components/Previewcollection/PreviewCollection";
import SHOP_DATA from "./shopdata";
import "./ShopPage.scss";

export class ShopPage extends Component {
  state = { collections: SHOP_DATA };
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherProps }) => {
          return <PreviewCollection key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
