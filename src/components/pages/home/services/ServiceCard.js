import { motion } from "framer-motion";
import React from "react";
import "./serviceCard.css";
const fadeIn = {
  hidden: {
    backgroundColor: "#1a2322",
    color: "#fff",
  },
  visible: {
    backgroundColor: "#fff",
    color: "#1a2322",
  },
};
export default class ServiceCard extends React.Component {
  render() {
    return (
      <motion.div
        variants={fadeIn}
        inherit="hidden"
        whileHover="visible"
        className="serviceCard"
      >
        <div className="serviceCardContainer">
          <div className="serviceCardIcon">
            <i className={this.props.icon}></i>
          </div>
          <div className="serviceCardTitle">{this.props.title}</div>
          <div className="serviceCardDescription">{this.props.description}</div>
          <div className="serviceCardLink">
            <a href="#">
              Learn More <i class="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
}
