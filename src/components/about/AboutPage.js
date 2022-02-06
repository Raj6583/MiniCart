import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import banner from "../../assets/img/mini-cart-banner.png";
import "./AboutPage.scss";

const AboutPage = () => (
  <>
    <Row>
      <Col>
        <h2>About MC</h2>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <Image src={banner} rounded className="mc-banner" />
      </Col>
      <Col md={8}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          ullamcorper posuere diam elementum semper. Duis nec vestibulum enim.
          Donec eu faucibus orci, vel posuere ante. Aenean sed placerat leo.
          Etiam in rhoncus magna. Curabitur ultrices, augue iaculis faucibus
          porta, arcu ipsum iaculis est, eget ultrices lacus lacus ut elit.
        </p>
        <p>
          Proin lorem libero, consequat ac tortor blandit, molestie blandit
          eros. Etiam in commodo urna. Nam tristique vestibulum volutpat. Nam
          faucibus odio eget fringilla egestas. Nulla facilisi.
        </p>
      </Col>
    </Row>
  </>
);

export default AboutPage;
