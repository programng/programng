import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing">
      <Link to="/about">About</Link>
    </div>
  );
}

export default Landing;
