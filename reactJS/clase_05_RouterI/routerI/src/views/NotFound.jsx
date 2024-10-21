import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h4>404</h4>
          <p>Pagina no encontrada</p>

          <div className="d-grid gap-2 mt-5">
            <Button variant="dark" size="lg" as={Link} to="/">
              Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
