import React from "react";
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import welcome1 from "../assets/welcome1.jpg";
import welcome2 from "../assets/welcome2.jpg";
import welcome3 from "../assets/welcome3.jpg";
import welcome4 from "../assets/welcome4.jpg";

const HomePage = () => {
  const items = [
    { img: welcome1, title: "HoloBeam Pro", desc: "Cutting-edge holographic technology for immersive experiences." },
    { img: welcome2, title: "QuantumCompute X", desc: "Revolutionizing data processing with quantum efficiency." },
    { img: welcome3, title: "WarpCore Drive", desc: "Propelling humanity beyond the stars with quantum physics." },
    { img: welcome4, title: "NeuralVision Glasses", desc: "Empowering minds with next-gen augmented reality." },
  ];

  return (
    <Container
      fluid
      className="p-5 text-center"
      style={{
        backgroundColor: "#121212",
        color: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h1 className="mb-4" style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "bold" }}>
        Welcome to <span style={{ color: "#00ffcc" }}>Neon Future</span>
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        Discover the most advanced futuristic technologies, designed for tomorrow.
      </p>
      <Button
        variant="outline-light"
        size="lg"
        className="mb-4"
        style={{
          boxShadow: "0 4px 8px rgba(0, 255, 204, 0.5)",
          fontFamily: "'Orbitron', sans-serif",
        }}
      >
        Shop Now
      </Button>

      <Row xs={1} md={2} lg={2} className="g-4">
        {items.map((item, idx) => (
          <Col key={idx}>
            <Card
              className="h-100"
              style={{
                backgroundColor: "#1a1a1a",
                color: "#f8f9fa",
                border: "1px solid #00ffcc",
                boxShadow: "0 4px 8px rgba(0, 255, 204, 0.4)",
              }}
            >
              <Card.Img
                as={Image}
                src={item.img}
                alt={item.title}
                fluid
                style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }}
              />
              <Card.Body>
                <Card.Title style={{ fontFamily: "'Orbitron', sans-serif" }}>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button
                  variant="outline-light"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 255, 204, 0.3)",
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
