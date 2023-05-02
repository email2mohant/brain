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
              title="Consulting"
              description="With a team of experienced consultatns, We are a leading partner in many IT companies across the US as their strategic IT consultant."
              link="/services/consulting"
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-mobile-screen"
              title="Staff Augmentation"
              description="With a vast network of qualified IT professionals, We provide skilled and experienced talent to supplement a client's existing team."
              link="/services/staff-augmentation"
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-book"
              title="Strategic HR Solutions"
              description="With a focus on data-driven solutions, We provide actionable insights that help organizations make informed HR decisions."
              link="/services/hr-solutions"
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-share-from-square"
              title="Recruitment"
              description="We offer best in class Recruiting Solutions tailored for your staffing needs with extremely skilled candidates in neumerous technologies."
              link="/services/recruiting"
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-layer-group"
              title="Onsite-Offshore Model"
              description="Our Onsite-Offshore model reduces the cost burdent on reducing and maintaining the staff augmentation with permanent and temporary positions."
              link="/services/onsite-offshore"
            ></ServiceCard>
            <ServiceCard
              icon="fa-solid fa-puzzle-piece"
              title="Training"
              description="We are a leading global talent development corporation offering training and development solutions to individuals and corporate clients."
              link="/services/trainings"
            ></ServiceCard>
          </motion.div>
        </motion.div>
      </section>
    );
  }
}
