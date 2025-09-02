import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-black/80">
        <h1 className="text-3xl py-2 text-white font-bold ">{title} </h1>
      <div className="flex overflow-x-scroll hide-scrollbar ">
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="text-white">No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
