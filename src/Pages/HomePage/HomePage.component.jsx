import React from "react";
import "./homepage.styles.scss";

import DirectoryComponent from "../../Components/Directory/Directory.component";

const HomePageComponent = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <DirectoryComponent />
    </div>
  );
};
export default HomePageComponent;
