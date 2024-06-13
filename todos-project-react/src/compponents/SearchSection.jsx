import React from "react";

function SearchSection(props) {
  return (
    <div className="content__search">
      <input
        type="text"
        value={props.searchInputValue}
        onChange={(e) => props.setSearchInputValue(e.target.value)}
        id="search-input"
        placeholder="search todo..."
      />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default SearchSection;
