import React from "react";
import introImg from "./images/intro-img.jpeg";
class Sections extends React.Component {
  render() {
    return (
      <section class="section">
        <div class="intro-section">
          <div class="intro-section-details from-left animation-delay-4">
            <div class="section-name">BRAINHR IT SOLUTIONS (BITS)</div>
            <div class="section-title">
              Delivering World Class Automation for all your Business needs
            </div>
            <div class="section-title-seperator"></div>
            <div class="section-description">
              <p>
                BrainHR IT solutions Inc. (BITS) is a Leading Software
                Consultancy firm catering to the IT Consulting needs and
                delivering End-End Solutions to Software Development Projects
                for Various Prestigious Companies and our Esteemed Clients in
                USA and India.
              </p>
              <p>
                We Offer best-in-class Technology solutions as well as Digital
                Marketing solutions with our In-house developed Automation Tools
                for each Scenario measured and Driven through our Data
                Engineering and Analytics.
              </p>
              <p>
                BITS Services add Value, Quality, Speed & invent Cost effective
                Strategies in our all Business Models.We are Robust, Adaptive,
                Flexible, Innovative in implementing and executing our Day-Day
                activities and Projects with our CCCC (Core Client-Customer
                Centric) Engagement Model.
              </p>
              <p>
                <a href="#" class="btn-full">
                  Read More
                </a>
              </p>
            </div>
          </div>
          <div class="intro-section-img from-left animation-delay-2">
            <img src={introImg} alt="intro image" />
          </div>
        </div>
      </section>
    );
  }
}
export default Sections;
