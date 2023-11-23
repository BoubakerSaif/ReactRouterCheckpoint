import React from "react";
import { Container, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";

const Filter = ({ setSearch, setRating }) => {
  return (
    <div>
      <Container>
        <Form className="d-flex" style={{ marginTop: "20px" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="search"
              placeholder="Movie Title"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Rating
          name="simple-controlled"
          max={10}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </Container>
    </div>
  );
};

export default Filter;
