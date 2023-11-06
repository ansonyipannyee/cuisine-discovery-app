import React from "react";

function HomeButton({ onClick }) {
  return (
    <button className="home-button" onClick={onClick}>
      Home
    </button>
  );
}

export default HomeButton;