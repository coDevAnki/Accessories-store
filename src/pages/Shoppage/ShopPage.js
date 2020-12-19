import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import {
  convertCollectionSnapshopToMap,
  firestore,
} from "../../firebase/firebaseUtils";
import { updateCollection } from "../../redux/actions";
import CollectionPage from "../CollectionPage/CollectionPage";
import "./ShopPage.scss";

const ShopPage = ({ match: { path }, doTransition, updateCollection }) => {
  useEffect(() => {
    const collectionRef = firestore.collection("shopCollection");
    collectionRef.onSnapshot(async (snapShot) => {
      const collectionMap = await convertCollectionSnapshopToMap(snapShot);
      updateCollection(collectionMap);
    });
  }, []);

  return (
    <div className={`shop-page ${doTransition ? "reveal" : ""}`}>
      <Route exact path={path} component={CollectionOverview} />
      <Route
        path={`${path}/:collectionId`}
        render={({ match: { params } }) => <CollectionPage {...params} />}
      />
    </div>
  );
};

export default connect(null, { updateCollection })(ShopPage);
