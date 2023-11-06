import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
    setSearch("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a meal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;