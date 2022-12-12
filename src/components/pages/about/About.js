import React from "react";
import CommonBanner from "../../common/banner/CommonBanner";
import Header from "../../common/header/Header";
import InfoSection from "../../common/infoSection/InfoSection";
import introImg from "./images/intro-img.jpeg";

class About extends React.Component {
  render() {
    return (
      <>
        <Header />

        <CommonBanner>About Us</CommonBanner>
        <InfoSection
          name="A BIT ABOUT COMPANY HISTORY"
          title="Delivering value-driven solutions with innovation"
          image={introImg}
        >
          <p>
            Brain HR IT Solutions (BITS) is a comprehensive business solutions
            provider. Our mission is to deliver business-centric solutions by
            integrating latest technologies and resources & help industries
            reach their goals faster.
          </p>
          <p>
            Our services are custom-tailored & help the clients to adapt &
            innovate to succeed. We have a bespoken ecosystem with access to
            high-end technology & global resources.
          </p>
          <p>
            At BrainHR IT SOLUTIONS, we are committed to helping businesses
            transform their digital presence, increase efficiency, and realize
            maximum ROI. As a global leader in business technology solutions, we
            work with clients to develop the right solution for their needs,
            drawing on our expertise in <b>TO BE UPDATED</b>
          </p>
          <p>
            We are a dedicated team providing innovative solutions to our
            client’s problems. Our people at BrainHR IT Solutions have the
            richest of expertise and experience in diverse fields & are
            handpicked for their unique dexterity. We help fortune 500
            companies, start-ups, and SMBs across the globe, deliver expert
            solutions for their online presence. We've been pushing the
            boundaries for over 10 years and love to help businesses understand
            how to bank on technology that works for them.
          </p>
        </InfoSection>
      </>
    );
  }
}
export default About;
