import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const SneakerSize = () => {
  return (
    <Form>
      <Form.Group controlId="formGroupText">
        <Form.Row>
          <Col>
            <Form.Control type="number" placeholder="Size" />
          </Col>
          <Col>
            <Form.Control type="number" placeholder="Quantity(pair)" />
          </Col>
          <Col>
            <Button className="mb-2">Submit</Button>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  );
};

export default SneakerSize;
