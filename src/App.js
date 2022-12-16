import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import "./common/css/styles.css";
import "./common/css/animations.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
