import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col w-[220px] p-4 shadow-2xl rounded-md">
      <div className="flex items-center">
        <img className="h-5/6 mx-auto rounded-md" src={movie.Poster} alt="" />
      </div>
      <div className="flex flex-col text-center gap-2  justify-between ">
        <p className="font-semibold text-xl">{movie.Title}</p>
        <p className="">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
