import React, { useState, useEffect } from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import CarItem from "../components/UI/CarItem";
import Testimonial from "../components/UI/Testimonial";

const Home = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/cars");
      if (!response.ok) {
        throw new Error("Failed to fetch car data");
      }
      const data = await response.json();
      setCarData(data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              
              <h2 className="section__title">See our services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
             
              <h2 className="section__title">Check out our cars</h2>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h2 className="section__title">Our clients reviews</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>
      
    </Helmet>
  );
};

export default Home;
