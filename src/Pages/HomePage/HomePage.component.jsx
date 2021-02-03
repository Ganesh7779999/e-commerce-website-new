import React from "react";
// import "./homepage.styles.scss";

import DirectoryComponent from "../../Components/Directory/Directory.component";

import { HomePageContainer } from "./HomePage.styles";

const HomePageComponent = () => {
  // const sections = {
  //   sections: [
  //     {
  //       title: "hats",
  //       imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //       id: 1,
  //       linkUrl: "ShopPage/hats",
  //     },
  //     {
  //       title: "sneakers",
  //       imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",

  //       id: 2,
  //       linkUrl: "ShopPage/sneakers",
  //     },
  //     {
  //       title: "jackets",
  //       imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //       id: 3,
  //       linkUrl: "ShopPage/jackets",
  //     },
  //     {
  //       title: "womens",
  //       imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //       size: "large",
  //       id: 4,
  //       linkUrl: "ShopPage/womens",
  //     },
  //     {
  //       title: "mens",
  //       imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  //       size: "large",
  //       id: 5,
  //       linkUrl: "ShopPage/mens",
  //     },
  //   ],
  // };
  return (
    <HomePageContainer>
      {/* <DirectoryComponent sections={sections} /> */}
      <DirectoryComponent />
    </HomePageContainer>
  );
};
export default HomePageComponent;
