import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Consulting from "./components/pages/services/Consulting";
import "./common/css/styles.css";
import "./common/css/animations.css";
import StaffAugmentation from "./components/pages/services/StaffAugmentation";
import HRStrategicSolution from "./components/pages/services/HrStategicSolution";

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
          <Route path="/services/consulting" element={<Consulting />} />
          <Route
            path="/services/staff-augmentation"
            element={<StaffAugmentation />}
          />
          <Route
            path="/services/hr-solutions"
            element={<HRStrategicSolution />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
