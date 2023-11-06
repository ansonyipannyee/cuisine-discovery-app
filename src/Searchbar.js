// import React, { useState } from "react";

// function SearchBar({ onSearch }) {
//   const [search, setSearch] = useState("");

//   const handleSearch = () => {
//     onSearch(search);
//     setSearch("");
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search for the recipe"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             handleSearch();
//           }
//         }}
//       />
//       <button onClick={handleSearch}>🔍</button>
//     </div>
//   );
// }

// export default SearchBar;