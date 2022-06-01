import React from "react";
import { useState } from "react";
import axios from "axios";

const Search = (props) => {
  const [titlee, settitle] = useState("");

  // const handleSearchrequest = (query) => {
  //   axios
  //     .get("http://localhost:3000/api/onefilm", {
  //       title: query,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     });
  // };

  return (
    <div className="search-container ">
      <input
        type="text"
        className="search-bar"
        onChange={(e) => {
          settitle(e.target.value);
          console.log(titlee);
        }}
      />
      <button
        onClick={() => {
          props.filter(titlee);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
