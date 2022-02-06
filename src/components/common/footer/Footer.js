import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => (
  <Container>
    <Row>
      <Col>
        <div className="footer">
          <p>&copy; Copyright 2022 Mini Cart Company.</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Footer;
