import React, { useState, useEffect } from "react";
import axios from "../apis/axios";
import requests from "../apis/requests";
import "../css/Banner.css";

// Top Banner Component

const Banner = () => {
  const [movie, setMovie] = useState([]);

  // Fetch a random movie in NetflixOriginal everytime user reload the page
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //   console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play </button>
          <button className="banner_button">Info </button>
        </div>

        <h1 className="banner_description">{movie?.overview}</h1>
      </div>

      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
