import React from "react";
import "./infoSection.css";
class InfoSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section">
        <div className="intro-section">
          <div className="intro-section-details from-left animation-delay-4">
            <div className="section-name">{this.props.name}</div>
            <div className="section-title">{this.props.title}</div>
            <div className="section-title-seperator"></div>
            <div className="section-description">{this.props.children}</div>
          </div>
          <div className="intro-section-img from-left animation-delay-2">
            <img src={this.props.image} alt="intro image" />
          </div>
        </div>
      </section>
    );
  }
}
export default InfoSection;
