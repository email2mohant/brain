import React from "react";
import companyLogo from "../../../common/images/logo.png";
import "./footer.css";
export default class Footer extends React.Component {
  render() {
    console.log("API URL: ", process.env);
    return (
      <footer class="footer">
        <div class="footerContainer">
          <div class="footerSection footerCompany">
            <div class="footerCompany">
              <img className="companyLogoImg" src={companyLogo}></img>
            </div>
            <div>
              BrainHR IT Solutions is a team of highly skilled consultants and
              creative problem solvers who will help you reach your goals
              instead of just sell you a solution.
            </div>

            <div class="footerLinkedIn">
              <a
                href="https://www.linkedin.com/company/brainhr-it-solutions"
                target="_blank"
              >
                <span>
                  <i className="fa-brands fa-linkedin"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="footerSection">
            <div class="footerSectionHeader">Quick Links</div>
            <ul class="footerLinks">
              <li class="footerLink">
                <a href="#">About US</a>
              </li>
              <li class="footerLink">
                <a href="#">Services</a>
              </li>
              <li class="footerLink">
                <a href="#">Careers</a>
              </li>
              <li class="footerLink">
                <a href="#">Industries</a>
              </li>
              <li class="footerLink">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="footerSection">
            <div class="footerSectionHeader">Useful Links</div>
            <ul class="footerLinks">
              <li class="footerLink">
                <a href="#">Service A</a>
              </li>
              <li class="footerLink">
                <a href="#">Service B</a>
              </li>
              <li class="footerLink">
                <a href="#">Service C</a>
              </li>
              <li class="footerLink">
                <a href="#">Service D</a>
              </li>
            </ul>
          </div>
          <div class="footerSection">
            <div class="footerSectionHeader">Contact</div>
            <ul class="footerLinks">
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">About US</a>
              </li>
              <li>
                <a href="#">About US</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="copyright">
          <span>
            © 2022 BrainHR IT Solutions Incorporation. All rights reserved.
          </span>
        </div>
      </footer>
    );
  }
}
