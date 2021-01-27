import React from "react";
import "./Directory.styles.scss";

import MenuItemComponent from "../MenuItem/MenuItem.component";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { selectDirectorySections } from "./DirectorySelector";

const DirectoryComponent = (props) => {
  console.log(props);
  return (
    <div className="directory-menu">
      {props.sections.sections.map((section) => {
        console.log(section);
        return (
          <MenuItemComponent
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        );
      })}
    </div>
  );
};
// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySections,
// });
// export default connect(mapStateToProps)(DirectoryComponent);
export default DirectoryComponent;
