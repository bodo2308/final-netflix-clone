import React, { useEffect, useState } from "react";
import axios from "../apis/axios";
import "../css/Row.css";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original";
const API_KEY = "a8a0d2f2e6b1b160ecd9a360bf034913";

//Render movie rows. Take fetched movie url as a prop and render each movie out 

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // set movies state
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // Set the trailerURL when clicked

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

  console.log(trailerUrl);

  return (
    <div className="MovieRow">
      <h2>{title}</h2>
      <div className="MovieRow_Posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`MovieRow_Poster ${isLarge && "MovieRow_PosterLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {/* Trailer player*/}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
