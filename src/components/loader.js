import React from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

const ProcessingLoader = () => {
  return (
    <Container >
      <div className="scanning-loader" >
        <div className="scanner">
          <div className="light"></div>
        </div>
        <div className="loading-text">Parsing Resume ...</div>
      </div>
    </Container>
  );
};

export default ProcessingLoader;
