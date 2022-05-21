import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

class Movies extends Component {
  render() {
    const { movies, adFilmList } = this.props;
    return (
      <ul className="movies">
        {movies.map((movie) => (
          <li className="movies__item" key={movie.imdbID}>
            <MovieItem
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              adFilmList={() => adFilmList(movie)}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Movies;
