import React, { useState } from "react";
import "../css/SearchedRow.css";
import YouTube from "react-youtube";
import axios from "../apis/axios";

const base_url = "https://image.tmdb.org/t/p/original";
const API_KEY = "a8a0d2f2e6b1b160ecd9a360bf034913";

const SearchedRow = ({ movies }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const movie_id = movie.id;
      async function fetchData() {
        console.log(movie);
        const request = await axios.get(
          `/movie/${movie_id}/videos?api_key=${API_KEY}`
        );
        if (request.data.results.length !== 0) {
          setTrailerUrl(request.data.results[0].key);
        } else {
          const request = await axios.get(
            `/tv/${movie_id}/videos?api_key=${API_KEY}`
          );
          if (request.data.results.length === 0) {
            setTrailerUrl("");
          } else {
            setTrailerUrl(request.data.results[0].key);
          }
        }

        return request;
      }
      fetchData();
    }
  };

  return (
    <div className="SearchedRow">
      <h2>Search Results</h2>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <div className="SearchedRow_Posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`SearchedRow_Poster`}
            onClick={() => handleClick(movie)}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchedRow;
