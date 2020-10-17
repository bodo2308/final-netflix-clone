import React, { useState, useEffect } from "react";
import Row from "../components/Row";
import requests from "../apis/requests";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SearchedRow from "../components/SearchedRow";
import axios from "../apis/axios";

const API_KEY = "a8a0d2f2e6b1b160ecd9a360bf034913";

const TV = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies("");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${term}`
    );

    setMovies(response.data.results);
  };

  console.log(movies);
  //If user search for a movie, render a different search page
  if (movies.length !== 0) {
    return (
      <div>
        <Nav onFormSubmit={onTermSubmit} />
        <Banner />
        <SearchedRow movies={movies} />
      </div>
    );
  } else {
    return (
      <div className="Stream">
        <Nav onFormSubmit={onTermSubmit} />
        <Banner />
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginalsTv}
          isLarge
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTvTopRated} />
        <Row title="Action TVs" fetchUrl={requests.fetchActionTv} />
        <Row title="Comedy TVs" fetchUrl={requests.fetchComedyTv} />
        <Row title="Horror TVs" fetchUrl={requests.fetchHorrorTv} />
        <Row title="Romance TVs" fetchUrl={requests.fetchRomanceTv} />
        <Footer />
      </div>
    );
  }
};
export default TV;
