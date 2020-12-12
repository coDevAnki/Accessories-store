import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/Collectionitem/CollectionItem";
import { selectCollection } from "../../selectors/shopSelector";
import "./CollectionPage.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div>
      <div className="collection-page">
        <h2 className="title">{collection.title}</h2>
        <div className="items">
          <div className="item-area">
            {collection.items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
