import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Home Page</h1>
      <Link to="/register">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Register
        </button>
      </Link>
    </div>
  );
}

export default Home;
