import { motion } from "framer-motion";
import React from "react";
import "./infoSection.css";
import AppAnimations from "../../../common/js/animations";
class InfoSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section">
        <motion.div
          className="intro-section"
          variants={AppAnimations.slideToRight}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            varints={AppAnimations.slideToRightTwo}
            className="intro-section-details"
          >
            <div className="section-name">{this.props.name}</div>
            <div className="section-title">{this.props.title}</div>
            <div className="section-title-seperator"></div>
            <div className="section-description">{this.props.children}</div>
          </motion.div>
          <motion.div
            variants={AppAnimations.slideToRight}
            className="intro-section-img"
          >
            <img src={this.props.image} alt="intro image" />
          </motion.div>
        </motion.div>
      </section>
    );
  }
}
export default InfoSection;
