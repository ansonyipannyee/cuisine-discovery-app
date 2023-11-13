import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src="/globe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1>Discover cuisines from different continents.</h1>
        <p>Start your journey here:</p>
      </div>
    </div>
  );
}

export default Home;