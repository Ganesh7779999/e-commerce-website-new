import React from "react";
import "./Directory.styles.scss";

import MenuItemComponent from "../MenuItem/MenuItem.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/Directory/DirectorySelector";

const DirectoryComponent = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((section) => {
      // eslint-disable-next-line no-lone-blocks
      {
        /* console.log(sections); */
      }
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(DirectoryComponent);
// export default DirectoryComponent;
