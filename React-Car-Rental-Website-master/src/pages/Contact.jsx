import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import emailjs from 'emailjs-com';
import "../styles/contact.css";

const socialLinks = [
  { url: "#", icon: "ri-facebook-line" },
  { url: "#", icon: "ri-instagram-line" },
  { url: "#", icon: "ri-linkedin-line" },
  { url: "#", icon: "ri-twitter-line" },
];

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("Sending...");
      await emailjs.sendForm('service_n7t5q5g', 'template_jb2cy5f', e.target, '09hPdqNCCNZT7ULD0');
      setStatus("Email sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send email. Please try again later.");
    }
  };

  return (
    <Helmet title="Contact">
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    required
                  ></textarea>
                </FormGroup>
                <Button className="contact__btn" type="submit">
                  {status ? status : "Send Message"}
                </Button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">Monaco 12A</p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+40754623454</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">luxury_rent@gmail.com</p>
                </div>
                <h6 className="fw-bold mt-4">Follow Us</h6>
                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a href={item.url} key={index} className="social__link-icon">
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
