import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return <div className="md:w-48 w-36 pr-4">
    <img alt="MovieCard" src={IMG_CDN + posterPath}/>
  </div>;
};

export default MovieCard;
