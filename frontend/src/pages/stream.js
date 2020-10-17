import React, { useState, useEffect } from "react";
import Row from "../components/Row";
import requests from "../apis/requests";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SearchedRow from "../components/SearchedRow";
import axios from "../apis/axios";

const API_KEY = "a8a0d2f2e6b1b160ecd9a360bf034913";

const Stream = () => {
  const [movies, setMovies] = useState([]);

  // When page first loaded, set movie to null

  useEffect(() => {
    setMovies("");
  }, []);

  

  const onTermSubmit = async (term) => {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${term}`
    );

    setMovies(response.data.results);
  };

  // console.log(movies);
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
    // render the default movie page
    return (
      <div className="Stream">
        <Nav onFormSubmit={onTermSubmit} />
        <Banner />
        <Row
          title="Netflix Original"
          fetchUrl={requests.fetchNetflixOriginals}
          isLarge
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Footer />
      </div>
    );
  }
};
export default Stream;
