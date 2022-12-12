import React from "react";
import { Link } from "react-router-dom";
import Header from "../../common/header/Header";
import Banners from "./banners/Banners";
import InfoSection from "../../common/infoSection/InfoSection";
import introImg from "./images/intro-img.jpeg";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banners />
        <div style={{ marginTop: "35rem" }}>
          <InfoSection
            name="BRAINHR IT SOLUTIONS (BITS)"
            title="Delivering World Class Automation for all your Business needs"
            image={introImg}
          >
            <p>
              BrainHR IT solutions Inc. (BITS) is a Leading Software Consultancy
              firm catering to the IT Consulting needs and delivering End-End
              Solutions to Software Development Projects for Various Prestigious
              Companies and our Esteemed Clients in USA and India.
            </p>
            <p>
              We Offer best-in-class Technology solutions as well as Digital
              Marketing solutions with our In-house developed Automation Tools
              for each Scenario measured and Driven through our Data Engineering
              and Analytics.
            </p>
            <p>
              BITS Services add Value, Quality, Speed & invent Cost effective
              Strategies in our all Business Models.We are Robust, Adaptive,
              Flexible, Innovative in implementing and executing our Day-Day
              activities and Projects with our CCCC (Core Client-Customer
              Centric) Engagement Model.
            </p>
            <p>
              <Link to="/about" className="btn-full">
                Read More
              </Link>
            </p>
          </InfoSection>
        </div>
      </>
    );
  }
}
export default Home;
