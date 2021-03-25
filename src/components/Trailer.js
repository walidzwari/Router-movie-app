import React from "react";
import { Link } from "react-router-dom";
function Trailer({ movie, match }) {
  return (
    <div>
      {movie
        .filter((el) => el.title === match.params.title)
        .map((el) => (
          <div>
            <h1>hello</h1>

            <button>
              {" "}
              <Link to="/"> Return to home</Link>
            </button>
          </div>
        ))}
    </div>
  );
}

export default Trailer;
