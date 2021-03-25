import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { stars } from "../assets/Data";
import { Button } from "react-bootstrap";
import AddMovie from "./AddMovie";

const MovieList = ({ listMovie, addFilm }) => {
  const [starList, setStarList] = useState(stars);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeColor = (id) => {
    setStarList(
      starList.map((star) =>
        star.id === id ? { ...star, isColored: !star.isColored } : star
      )
    );
  };
  return (
    <div>
      <div className="menu">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="primary" onClick={handleShow}>
          add movie
        </Button>
        <div>
          {starList.map((star) => (
            <span
              key={star.id}
              onClick={() => changeColor(star.id)}
              className={star.isColored ? "gold" : "star"}
            >
              {star.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="row">
        {listMovie
          .filter((movie) =>
            movie.title.toUpperCase().includes(search.toUpperCase())
          )
          .filter(
            (movie) =>
              movie.rate >=
              starList.filter((star) => star.isColored === true).length
          )
          .map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
      <AddMovie show={show} handleClose={handleClose} addFilm={addFilm} />
    </div>
  );
};

export default MovieList;
