import { useState } from "react";
import "./App.css";
import { movies } from "./assets/Data";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Trailer from "./components/Trailer";
function App() {
  const [listMovie, setListMovie] = useState(movies);
  const addFilm = (form) => {
    setListMovie([form, ...listMovie]);
  };
  return (
    <Router>
      <Switch>
        <div className="container-fluid">
          <Route
            exact
            path="/"
            render={() => <MovieList listMovie={listMovie} addFilm={addFilm} />}
          />
        </div>
        <Route
          path="/Trailer/:title"
          render={(props) => <Trailer movie={listMovie} {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
