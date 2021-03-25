import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4 mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>{"★".repeat(movie.rate)}</Card.Text>
        </Card.Body>
        <Link to={`/Trailer/${movie.title}`}>More info</Link>
      </Card>
    </div>
  );
};

export default MovieCard;
