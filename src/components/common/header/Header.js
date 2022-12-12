import React from "react";
import companyLogo from "./images/logo.png";
import "./header.css";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="headers-container">
          <div className="sub-header-container">
            <div className="sub-headers-1">
              <div className="sub-headers-2">
                <div className="sub-header">
                  <a
                    href="https://www.linkedin.com/company/brainhr-it-solutions"
                    target="_blank"
                  >
                    <span className="header-icon">
                      <i className="fa-brands fa-linkedin"></i>
                    </span>
                  </a>
                </div>
                <div className="sub-header partition">
                  <a
                    href="https://goo.gl/maps/p4z1JeSebCChziyU9"
                    target="_blank"
                  >
                    <span className="header-icon">
                      <i className="fa fa-solid fa-location-dot"></i>
                    </span>
                  </a>
                  <span>
                    33 Wood Avenue South, Suite 618, Iselin New Jersy 08830
                  </span>
                </div>
              </div>
              <div className="sub-header">
                <a href="#" target="_blank">
                  <span className="header-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </a>
                <span>info@brainhritsolutions.com</span>
              </div>
            </div>
          </div>
          <div className="main-headers-container">
            <div className="main-headers-1">
              <div className="company-logo-container">
                <img
                  className="company-logo"
                  src={companyLogo}
                  alt="Brain HR LOGO"
                />
              </div>
              <ul className="main-headers">
                <li className="header">
                  <span className="header-icon">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </span>
                  <span>Home</span>
                </li>

                <li className="header dropdown">
                  <span className="header-icon">
                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                  </span>
                  <span className="dropbtn">About</span>
                  <ul className="dropdown-items">
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-users"></i>
                        </span>
                        <span className="dropdown-item-text">Who We Are</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-bullseye"></i>
                        </span>
                        <span className="dropdown-item-text">Our Vision</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-rocket"></i>
                        </span>

                        <span className="dropdown-item-text">Our People</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-earth-americas"></i>
                        </span>
                        <span className="dropdown-item-text">Work Culture</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-lightbulb"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Research & Development
                        </span>
                      </a>
                    </li>

                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-handshake"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Partnership & Collaboration
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-dove"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Women & Minorities
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-hand-holding-heart"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Corporate Social Responsibility
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item dropdown">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-folder-open"></i>
                        </span>

                        <span className="dropdown-item-text">Projects</span>
                      </a>
                      <ul className="dropdown-items right-menu">
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-house-user"></i>
                            </span>
                            <span className="dropdown-item-text">
                              In House Projects
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-diagram-project"></i>
                            </span>
                            <span className="dropdown-item-text">
                              Client Projects
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="header dropdown">
                  <span className="header-icon">
                    <i className="fa-solid fa-bell-concierge"></i>
                  </span>
                  <span className="dropbtn">Services</span>
                  <ul className="dropdown-items">
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-user"></i>
                        </span>

                        <span className="dropdown-item-text">Consulting</span>
                      </a>
                    </li>

                    <li className="dropdown-item dropdown">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Information Technology
                        </span>
                      </a>

                      <ul className="dropdown-items right-menu overflow-scroll">
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-cloud"></i>
                            </span>
                            <span className="dropdown-item-text">AWS</span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-mobile-screen-button"></i>
                            </span>
                            <span className="dropdown-item-text">PEGA</span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-magic-wand-sparkles"></i>
                            </span>
                            <span className="dropdown-item-text">Java</span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-magic-wand-sparkles"></i>
                            </span>

                            <span className="dropdown-item-text">Devops</span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-magic-wand-sparkles"></i>{" "}
                            </span>
                            <span className="dropdown-item-text">SAP</span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>{" "}
                            </span>
                            <span className="dropdown-item-text">
                              Quality Assurance
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>
                            <span className="dropdown-item-text">.Net</span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>
                            <span className="dropdown-item-text">
                              Salesforce
                            </span>
                          </a>
                        </li>

                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>
                            <span className="dropdown-item-text">
                              Cloud Computing
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>

                            <span className="dropdown-item-text">
                              Mobile Application Development
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>
                            <span className="dropdown-item-text">
                              Cyber Security
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>

                            <span className="dropdown-item-text">
                              Data Analytics
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>

                            <span className="dropdown-item-text">
                              Automation & AI
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>

                            <span className="dropdown-item-text">
                              Machine Learning
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>

                            <span className="dropdown-item-text">
                              Robotics & RPA
                            </span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>

                            <span className="dropdown-item-text">ERP</span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>
                            <span className="dropdown-item-text">CRM</span>
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">
                            <span className="dropdown-item-icon">
                              <i className="fa-solid fa-shield"></i>
                            </span>
                            <span className="dropdown-item-text">CMS</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-shield"></i>
                        </span>

                        <span className="dropdown-item-text">Outsourcing</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-bullhorn"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Digital Marketing
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header dropdown">
                  <span className="header-icon">
                    <i className="fa-solid fa-cubes"></i>
                  </span>
                  <span className="dropbtn">Industries</span>
                  <ul className="dropdown-items overflow-scroll">
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Information Technology
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Government Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          National & Federal Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          International Projects ( MNCs )
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Banking & Finance
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Healthcare & Life Sciences
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Telecommunication Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Cyber Security Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Defense Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Automotive Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Large- & Small-Scale Industrial Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Insurance and Tax Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          Infrastructure & Construction Projects
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">Gaming</span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          AR & VR Augmentation
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-laptop-code"></i>
                        </span>
                        <span className="dropdown-item-text">
                          AI & Robotics
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header dropdown">
                  <span className="header-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </span>
                  <span className="dropbtn">Careers</span>
                  <ul className="dropdown-items">
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-folder-open"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Internal Positions
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-folder-tree"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Client Positions{" "}
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-book-open-reader"></i>
                        </span>
                        <span className="dropdown-item-text">Internships </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-graduation-cap"></i>
                        </span>

                        <span className="dropdown-item-text">Trainings </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-retweet"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Referral Program{" "}
                        </span>
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="#">
                        <span className="dropdown-item-icon">
                          <i className="fa-solid fa-globe"></i>
                        </span>

                        <span className="dropdown-item-text">
                          Global Opportunities
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header">
                  <span className="header-icon">
                    <i className="fa-solid fa-users"></i>
                  </span>
                  <span>Clients</span>
                </li>
                <li className="header">
                  <span className="header-icon">
                    <i className="fa-solid fa-briefcase"></i>
                  </span>
                  <span>Contact Us</span>
                </li>
              </ul>
            </div>
            <div className="main-headers-2">
              <a href="#" className="btn">
                <i className="fa-regular fa-calendar-days"></i> Schedule a
                Meeting
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
