import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Bienvenido a Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quaerat.
          </p>
          <div className="d-grid gap-2">
            <Button variant="dark" size="lg" as={Link} to="/login">
              Iniciar Sesion
            </Button>
            <Button variant="dark" size="lg" as={Link} to="/registro">
              Registrarse
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
