import React from "react";
import "./homepage.styles.scss";

import DirectoryComponent from "../../Components/Directory/Directory.component";

const HomePageComponent = () => {
  return (
    <div className="homepage">
      <DirectoryComponent />
    </div>
  );
};
export default HomePageComponent;
