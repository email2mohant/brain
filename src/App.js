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
import OnsiteOffshore from "./components/pages/services/OnsiteOffShore";
import Recruiting from "./components/pages/services/Recruiting";
import Training from "./components/pages/services/Training";
import InformationTechnology from "./components/pages/services/InformationTechnology";
import Outsourcing from "./components/pages/services/Outsourcing";
import DigitalMarketing from "./components/pages/services/DigitalMarketing";
import Aws from "./components/pages/services/it/Aws";
import Pega from "./components/pages/services/it/Pega";
import NotFound from "./components/common/misc/NotFound";
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
          <Route path="/services/recruiting" element={<Recruiting />} />
          <Route
            path="/services/onsite-offshore"
            element={<OnsiteOffshore />}
          />
          <Route path="/services/trainings" element={<Training />} />
          <Route path="/services/it" element={<InformationTechnology />} />
          <Route path="/services/outsourcing" element={<Outsourcing />} />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route path="/services/aws" element={<Aws />} />
          <Route path="/services/pega" element={<Pega />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
