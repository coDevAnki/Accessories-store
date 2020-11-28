import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../Collectionitem/CollectionItem";
import "./PreviewCollection.scss";

const PreviewCollection = ({ title, items, routeName }) => {
  console.log(routeName);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
      <Link to={routeName} className="view_all_link">
        VIEW ALL
      </Link>
    </div>
  );
};

export default PreviewCollection;
