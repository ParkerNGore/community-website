import React from "react";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <main>
        <h1>Welcome to the Home-Page!</h1>
        <a
          href={`http://localhost:${
            process.env.PORT ? process.env.PORT : 3005
          }/api/oauth2/login`}
        >
          <h1>Click Me</h1>
        </a>
      </main>
    </div>
  );
}

export default HomePage;
