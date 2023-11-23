import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ data }) => {
  return (
    <div>
      {data.map((el) => (
        <MovieCard movieInfo={el} />
      ))}
    </div>
  );
};

export default MovieList;
