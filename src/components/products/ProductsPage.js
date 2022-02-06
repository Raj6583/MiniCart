import React, { useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loadItems,
  addItemSuccess,
  removeItemSuccess,
} from "../../redux/actions/productActions";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import "./ProductsPage.scss";

const ProductsPage = ({
  products,
  loadItems,
  addItemSuccess,
  removeItemSuccess,
}) => {
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (products.length === 0) {
      loadItems().catch((error) => {
        alert("Loading items failed " + error);
      });
    }
  }, []);

  return (
    <div className="mc-products">
      <Row>
        <Col>
          <h2>Products</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {products.map((item) => (
            <Card key={item.id}>
              <Card.Body>
                <Row className="mc-product-container">
                  <Col md={7}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.desc}</Card.Text>
                  </Col>
                  <Col md={3}>
                    <Row>
                      <Col md={3} xs={3} className="text-end">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => removeItemSuccess(item)}
                        >
                          <FaMinusCircle color="white" />
                        </Button>
                      </Col>
                      <Col md={6} xs={6}>
                        <Form.Control
                          type="text"
                          value={item.quantity}
                          className="text-center"
                          readOnly
                        />
                      </Col>
                      <Col md={3} xs={3}>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => addItemSuccess(item)}
                        >
                          <FaPlusCircle color="white" />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={2} className="item-price">
                    {item.currency}
                    {item.price}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  addItemSuccess: PropTypes.func.isRequired,
  removeItemSuccess: PropTypes.func.isRequired,
  loadItems: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = {
  loadItems,
  addItemSuccess,
  removeItemSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
