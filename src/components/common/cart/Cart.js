import React, { useState, useEffect, useRef } from "react";
import { Nav, Col, Button, Toast, Badge, Card } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeProductSuccess } from "../../../redux/actions/productActions";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.scss";

const Cart = ({ products, removeProductSuccess, ...props }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  const { mobileView } = props;

  // Toaster hide
  // when you click outside the toaster
  function RefOutsideAlert(ref) {
    useEffect(() => {
      function handleOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      }

      // Add event listener
      document.addEventListener("mousedown", handleOutside);
      return () => {
        // Remove event listener
        document.removeEventListener("mousedown", handleOutside);
      };
    }, [ref]);
  }

  // Toaster ref
  const toasterRef = useRef(null);
  RefOutsideAlert(toasterRef);

  // Total cart items
  const getCartTotal = () => {
    var cartTotal = 0;
    products.map((qty) => {
      return (cartTotal += qty.quantity);
    });
    return cartTotal;
  };

  // Total price of cart items
  const getCartTotalPrice = () => {
    const cartTotalQty = getCartTotal();
    return cartTotalQty * 39;
  };

  return (
    <Nav
      className={
        "mc-cart " + (mobileView === "true" ? "mc-mobile-view" : "mc-web-view")
      }
    >
      <Col className="me-auto">
        <Button onClick={toggleShow} className="mb-2" size="sm">
          <FaShoppingCart size="2em" />
          <Badge bg="secondary">{getCartTotal()}</Badge>
        </Button>
        <Toast
          show={show}
          onClose={toggleShow}
          ref={toasterRef}
          className="mc-cart-toast"
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto cart-title">
              Cart
              <small
                style={{
                  display: "block",
                  fontWeight: "normal",
                  fontSize: "14px",
                }}
              >
                {getCartTotal()} items
              </small>
            </strong>
          </Toast.Header>
          {products.map((item) => (
            <Toast.Body key={item.id} className="cart-items">
              <button
                type="button"
                className="btn-close"
                onClick={() => removeProductSuccess(item)}
              ></button>
              <span className="item-title">
                {item.title} x {item.quantity}
              </span>
              <span className="item-price">
                {item.currency} {item.price}
              </span>
            </Toast.Body>
          ))}
          <Card className="check-out">
            <Card.Body>
              <Card.Title className="mb-2 text-muted">
                <span style={{ float: "left" }}>Subtotal</span>
                <span>$ {getCartTotalPrice()}</span>
              </Card.Title>
              <Button variant="primary" size="lg" className="btn-checkout">
                CHECKOUT
              </Button>
            </Card.Body>
          </Card>
        </Toast>
      </Col>
    </Nav>
  );
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  removeProductSuccess: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = {
  removeProductSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
