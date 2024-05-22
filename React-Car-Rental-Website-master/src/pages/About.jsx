import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.png";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Our Commitment
                </h2>

                <p className="section__description">
                Luxury Cars Rental of Monaco is dedicated to making your driving dreams a reality.
                Our team is passionate about cars and customer satisfaction,
                ensuring that each rental is a memorable experience.
                We believe that driving a luxury car should be more than just transportation – it should be an unforgettable adventure.
                </p>

                <p className="section__description">
                Thank you for choosing Luxury Cars Rental of Monaco.
                We look forward to being a part of your next journey.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+40754623454</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
             
              <h2 className="section__title">Owners</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
