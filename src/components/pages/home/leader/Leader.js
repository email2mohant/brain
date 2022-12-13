import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "./leader.css";

const Sentence = {
  hidden: {
    color: "#f26822",
    diplay: "none",
  },
  visible: {
    diplay: "inline",
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Letter = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
class Leader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { industryIndex: 0 };
    this.industries = ["Corporate IT Resource", "IT Staffing"];
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState) => {
      return {
        industryIndex:
          prevState.industryIndex < this.industries.length - 1
            ? prevState.industryIndex + 1
            : 0,
      };
    });
  }
  render() {
    const industries = [
      "Corporate IT Resource",
      "IT Staffing",
      "Digital Transformation",
    ];
    return (
      <section className="leaderSection" onLoad={this.onLoad}>
        <div className="container">
          <span className="title">We Are A Leader In</span>{" "}
          <div>
            {industries.map((ind, index) => {
              return (
                this.state.industryIndex == index && (
                  <motion.div
                    className="title"
                    variants={Sentence}
                    initial="hidden"
                    whileInView="visible"
                    style={{ display: "inline" }}
                    key={ind}
                  >
                    {ind.split("").map((char, index) => {
                      return (
                        <motion.span
                          variants={Letter}
                          className="industryName"
                          key={char + "-" + index}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </motion.div>
                )
              );
            })}
          </div>
          <div className="sub-text">
            BrainHR IT Solutions provides services that improve the way business
            is done in the world.
          </div>
        </div>
      </section>
    );
  }
}
export default Leader;
