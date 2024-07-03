import React from "react";
import "./SearchBar.css";
import { FaSearch, FaFilter } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search-wrapper">
      <div className="search">
        <FaSearch />
        <input type="text" placeholder="Search something here" />
      </div>
      <div className="filter">
        <div className="icon">
          <FaFilter />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
