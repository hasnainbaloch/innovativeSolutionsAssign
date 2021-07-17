import React from "react";
import './search.css';

import searchIcon from "../../assets/icons/search.png";

export default function SearchBar() {
  return (
    <form className="search-form">
      <input type="text" placeholder="Search" />
      <div className="search-icon-wrap">
        <img src={searchIcon} alt="search icon.." />
      </div>
    </form>
  );
}
