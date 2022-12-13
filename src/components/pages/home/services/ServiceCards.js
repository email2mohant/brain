import React from "react";
import { motion } from "framer-motion";

import "./serviceCards.css";
import ServiceCard from "./ServiceCard";
import AppAnimations from "../../../../common/js/animations";

export default class ServiceCards extends React.Component {
  render() {
    return (
      <section className="section">
        <motion.div
          variants={AppAnimations.none}
          initial="hidden"
          whileInView="visible"
          className="services"
        >
          <motion.div
            variants={AppAnimations.slideToTop}
            className="servicesHeading"
          >
            OUR SERVICES
          </motion.div>
          <motion.div
            variants={AppAnimations.slideToTop}
            className="servicesSubHeading"
          >
            What We Provide
          </motion.div>
          <motion.div
            variants={AppAnimations.slideToTop}
            className="servicesHeadingSeperator"
          >
            &nbsp;
          </motion.div>
          <motion.div
            variants={AppAnimations.slideToTop}
            className="servicesHeadingSubText"
          >
            BrainHR IT Solutions is a provider of IT management solutions for
            companies and organizations around the world. Over the past decade,
            we've helped our clients reduce their costs, improve their
            performance, and achieve more with their IT infrastructure.
          </motion.div>
          <motion.div
            variants={AppAnimations.slideToTop}
            className="serviceCards"
          >
            <ServiceCard
              icon="fa-solid fa-users-viewfinder"
              title="Service A"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum non, sequi tempora corporis, vel eum nihil, eligendi animi quasi quae. Culpa harum incidunt doloremque minima optio quos minus alias?
              "
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-mobile-screen"
              title="Service B"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum non, sequi tempora corporis, vel eum nihil, eligendi animi quasi quae. Culpa harum incidunt doloremque minima optio quos minus alias?
              "
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-book"
              title="Service C"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum non, sequi tempora corporis, vel eum nihil, eligendi animi quasi quae. Culpa harum incidunt doloremque minima optio quos minus alias?
              "
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-share-from-square"
              title="Service D"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum non, sequi tempora corporis, vel eum nihil, eligendi animi quasi quae. Culpa harum incidunt doloremque minima optio quos minus alias?
              "
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-layer-group"
              title="Service E"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum non, sequi tempora corporis, vel eum nihil, eligendi animi quasi quae. Culpa harum incidunt doloremque minima optio quos minus alias?
              "
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-puzzle-piece"
              title="Service F"
              description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum non, sequi tempora corporis, vel eum nihil, eligendi animi quasi quae. Culpa harum incidunt doloremque minima optio quos minus alias?
              "
            ></ServiceCard>
          </motion.div>
        </motion.div>
      </section>
    );
  }
}
