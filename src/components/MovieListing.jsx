import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <h1>{movies.Error}</h1>
    );

  return <div className="flex flex-wrap gap-5 mx-auto w-11/12 justify-center">{renderMovies}</div>;
};

export default MovieListing;
