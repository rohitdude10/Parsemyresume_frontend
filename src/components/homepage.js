import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { uploadPdf } from "../api.js";
import ParseData from "./parseddata.js";
import ProcessingLoader from "./loader.js";

function HomePage() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file.");
      return;
    }
    if (!file.type.includes("pdf")) {
      setError("Please upload a PDF file.");
      return;
    }

    setLoading(true);

    try {
      setData(null)
      const response = await uploadPdf(file);
      console.log(response);
      setLoading(false);
      setData(response);
      setError(null);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("An error occurred while processing the file.");
    }
  };
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={12}>
            <br />
            <Form onSubmit={handleFileUpload}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Your Resume</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Upload
              </Button>
            </Form>
            {error && <div className="text-danger">{error}</div>}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12}>
            <p>Instructions: Upload your resume in PDF format.</p>
          </Col>
        </Row>
      </Container>
      {loading ? <ProcessingLoader /> : <></>}
      {data ? <ParseData data={data} /> : <></>}
    </>
  );
}

export default HomePage;
