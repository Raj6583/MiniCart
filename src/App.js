import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./components/common/header/Header";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ProductsPage from "./components/products/ProductsPage";
import Footer from "./components/common/footer/Footer";
import { Container } from "react-bootstrap";

function App({ products }) {
  return (
    <>
      <Header items={products} />
      <Container style={{ minHeight: "80vh" }}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

App.propTypes = {
  products: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps)(App);
