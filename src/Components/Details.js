import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import data from "../data";

const Details = () => {
  let { id } = useParams();
  let specificMovie = data.filter((el) => el.id === id);
  console.log(specificMovie);
  return (
    <div>
      {specificMovie &&
        specificMovie.map((el) => (
          <Card style={{ width: "800px", margin: "auto" }}>
            <Card.Body>
              <iframe
                src={el.trailerUrl}
                width="650"
                height="400"
                title="Youtube Video Player"
              ></iframe>
              <Card.Title> {el.title} </Card.Title>
              <Card.Text>{el.description}</Card.Text>
              <Button variant="primary">
                <Link
                  style={{ textDecoration: "none", color: "White" }}
                  to={"/"}
                >
                  Back Home
                </Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Details;
