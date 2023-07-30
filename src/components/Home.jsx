import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import { APIKEY } from "../common/api/MovieApiKey";
import movieApi from "../common/api/MovieApi";
import { addMovies } from "../features/movies/movieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();




  useEffect(() => {
    const movieText = "Avengers";
    const fetchMovies = async () => {
      const res = await movieApi
        .get(`?apikey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(addMovies(res.data));
    };
    fetchMovies();
  }, []);
  return (
    <div className="w-screen mt-[50px]">
      <MovieListing />
    </div>
  );
};

export default Home;
