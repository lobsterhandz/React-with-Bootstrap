import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import notFoundImage from "../assets/404-image.png";

const NotFound = () => {
  return (
    <Container
      className="text-center p-5"
      style={{
        backgroundColor: "#1f1f1f",
        color: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={notFoundImage}
            alt="404 Error"
            className="img-fluid"
            style={{ borderRadius: "10px", maxHeight: "300px" }}
          />
        </Col>
        <Col md={6}>
          <h1 className="mb-4">404 - Page Not Found</h1>
          <p>The page you are looking for does not exist or has been moved.</p>
          <NavLink to="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
