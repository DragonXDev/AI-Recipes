import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav(){

    const [homeState, setHomeState] = useState(
        "hvr-underline-from-center nav-link active"
    );

    const setHome = () => {
        setHomeState("hvr-underline-from-center nav-link active");
    };
    return( 
    <div>
      <h1 className="ingredient-nav">Make your dream dish</h1>
      <div className="nav-container">
        <nav>
          <h2>
            <Link className={homeState} to="/" onClick={setHome}>
              okay
            </Link>
          </h2>
        </nav>
      </div>
    </div>);
}
export default Nav;