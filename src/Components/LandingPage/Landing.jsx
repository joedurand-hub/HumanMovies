import React from 'react';
import { Link } from "react-router-dom";
import './Landing.css'

function LandingPage() {
    return (
  <div className="landing">
      <div className="info">
        <h1>Welcome to Cinépolis</h1>
        <p>Login to see all the information.</p>
        <hr />
      <Link to={'/home'}>
        <button>HOME</button>
      </Link>
      </div>

    </div>
  )
};

  export default LandingPage;