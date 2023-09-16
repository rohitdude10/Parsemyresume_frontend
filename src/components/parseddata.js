import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function ParseData(parsedata) {
  console.log("parse", parsedata.data);

  const parsedDataStyle = {
    background: "#f8f9fa",
    padding: "20px",
    border: "2px solid #ced4da",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const listItemStyle = {
    border: "none",
    marginBottom: "10px",
    fontSize: "18px",
  };

  return (
    <Container style={parsedDataStyle}>
      <Row>
        <h2>Extracted Data</h2>
        <Col md={12}>
          <ListGroup variant="flush">
            <ListGroup.Item style={listItemStyle}>
              <strong>Name:</strong> {parsedata.data.name}
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <strong>CONTACT NUMBER:</strong>{" "}
              {parsedata.data.contact_number}
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <strong>EMAIL:</strong> {parsedata.data.email}
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <strong>SKILLS:</strong>{" "}
              {parsedata.data.skill.join(", ")}
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <strong>SOCIAL:</strong>{" "}
              <span>
                LinkedIn: {parsedata.data.social.linkedin},{" "}
                Github: {parsedata.data.social.github}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
