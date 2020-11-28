import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import "./ShopPage.scss";

const ShopPage = ({ match: { path } }) => {
  return (
    <div className="shop-page">
      <Route exact path={path} component={CollectionOverview} />
      <Route
        path={`${path}/:collectionId`}
        render={({ match: { params } }) => <CollectionPage {...params} />}
      />
    </div>
  );
};

export default ShopPage;
