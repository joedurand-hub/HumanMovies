import React from 'react';
import Landing from './Landing.css'
import { Link } from "react-router-dom";

function LandingPage() {
    return (
  <div className="landing">
      <div className="info">
        <h1>Movies App</h1>
        <p>Movies information web App for Human DeCode.</p>
        <hr />
      <Link to={'/home'}>
        <button>HOME</button>
      </Link>
      </div>

    </div>
  )
};

  export default LandingPage;