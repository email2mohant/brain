import React from "react";
import "./banners.css";

import banner1 from "./images/home-banner-11.jpeg";
import banner2 from "./images/home-banner-8.jpeg";
import banner3 from "./images/home-banner-6.jpeg";
import banner4 from "./images/home-banner-5.jpeg";
class Banners extends React.Component {
  render() {
    return (
      <div
        id="home-page-banners"
        className="carousel slide banners-container"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#home-page-banners"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#home-page-banners"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#home-page-banners"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#home-page-banners"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} alt="..." />
            <div className="carousel-caption">
              <p className="banner-headline from-top animation-delay-8">
                An Innovative
              </p>
              <p className="banner-title from-top animation-delay-6">
                Digital Enterprise
              </p>
              <p className="banner-description from-top animation-delay-2">
                We develop custom solutions for you no matter your industry or
                need.
              </p>
              <a href="#" className="btn-full">
                Learn More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} alt="..." />
            <div className="carousel-caption">
              <p className="banner-headline from-top animation-delay-8">
                Your Next Business Advantage
              </p>
              <p className="banner-title from-top animation-delay-6">
                Digital Transformation
              </p>
              <p className="banner-description from-top animation-delay-2">
                Delivering Value through Cybernated Implementations
              </p>
              <a href="#" className="btn-full">
                Learn More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} alt="..." />
            <div className="carousel-caption">
              <p className="banner-headline from-top animation-delay-8">
                Optimizing System Governance with Big Data
              </p>
              <p className="banner-title from-top animation-delay-6">
                Data Engineering
              </p>
              <p className="banner-description from-top animation-delay-2">
                Delivering Value through Cybernated Implementations
              </p>
              <a href="#" className="btn-full">
                Learn More
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner4} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <p className="banner-headline from-top animation-delay-8">
                Connect Industries & Drive the Change
              </p>
              <p className="banner-title from-top animation-delay-6">
                Salesforce
              </p>
              <p className="banner-description from-top animation-delay-2">
                Drive, Deliver & Expand Seamlessly with the World’s #1 CRM
              </p>
              <a href="#" className="btn-full">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banners;
