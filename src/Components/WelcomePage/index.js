import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './WelcomePage.scss';
const WelcomePage = () => {
    return (
      <section>
        <h1 className="welcome-page-title">Had a tough day in the office? Shake it up with a drink, you deserve this!</h1>
        <Link to={`/recipe`}>
          <button>SHAKE</button>
        </Link>
      </section>
    )
}

export default WelcomePage;