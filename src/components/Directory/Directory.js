import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectory } from "../../selectors/directorySelector";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";

const Directory = ({ directory }) => {
  return (
    // <>
    //   <div
    //     className="landing-page"
    //     style={{
    //       backgroundImage: `url("https://res.cloudinary.com/codevanki/image/upload/v1601534107/images/Acc_category_fclnlm.webp")`,
    //     }}
    //   />
    <div className="directory-menu">
      {Object.values(directory).map(({ id, ...otherProps }) => (
        <MenuItem id={id} {...otherProps} />
      ))}
    </div>
    // </>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectDirectory,
});

export default connect(mapStateToProps)(Directory);
