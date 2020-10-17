import React, { useState } from "react";
import "../css/SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // Make sure we call callback from parent components
    onFormSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="SearchBar">
      <form className="search_form" onSubmit={onSubmit}>
        <input
          className="search_input"
          placeholder="Search a movie then hit Enter"
          type="text"
          value={term}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
