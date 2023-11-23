import React, { useState } from "react";
import "./App.css";
import data from "./data";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import Filter from "./Components/Filter";

const App = () => {
  const [movies, setMovies] = useState(data);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  // const Adding = (newMovie) => {
  //   setMovies([...movies, newMovie]);
  // };

  return (
    <div className="App">
      <center>
        <Filter setSearch={setSearch} setRating={setRating} />
        <br />
        {/* <AddMovie Adding={Adding}  /> */}
        <AddMovie movies={movies} setMovies={setMovies} />
        <br />
        <MovieList
          data={movies.filter(
            (el) =>
              el.title.trim().toLocaleLowerCase().includes(search) &&
              el.rating >= rating
          )}
        />
      </center>
    </div>
  );
};

export default App;
