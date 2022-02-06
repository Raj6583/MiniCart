import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HomePage.scss";

const HomePage = () => (
  <>
    <Row>
      <Col style={{ textAlign: "center" }}>
        {/* <Image src={banner} rounded fluid className="banner-img" /> */}
        <div className="mc-banner">
          <div className="mc-title-container">
            <h2 className="mc-caption">
              <span>Best Products</span>
              <span>Best Service</span>
            </h2>
          </div>
        </div>
      </Col>
    </Row>
  </>
);

export default HomePage;
