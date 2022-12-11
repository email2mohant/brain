import React from "react";

import Header from "../common/header/Header";
import Banners from "./banners/banners";
import Sections from "./sections/Sections";
class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banners />
        <Sections />
      </>
    );
  }
}
export default Home;
