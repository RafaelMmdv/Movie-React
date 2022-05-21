import React, { Component } from "react";
import "./MovieItem.css";

class MovieItem extends Component {
  render() {
    const { title, year, poster, adFilmList } = this.props;
    const replacementPoster =
      "https://stuki-druki.com/biofoto1/Jackie-Chan.jpg";
    return (
      <article className="movie-item">
        <img
          className="movie-item__poster"
          src={poster !== "N/A" ? poster : replacementPoster}
          alt={title}
        />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {title}&nbsp;({year})
          </h3>
          <button
            onClick={adFilmList}
            type="button"
            className="movie-item__add-button"
          >
            Добавить в список
          </button>
        </div>
      </article>
    );
  }
}

export default MovieItem;
