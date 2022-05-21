import React, { Component } from "react";
import "./ListPage.css";
import { gettingListMovies } from "../../api.js";

class ListPage extends Component {
  state = {
    title: "",
    movies: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    gettingListMovies(id).then((list) => {
      this.setState(list);
    });
  }

  render() {
    const replacementPoster =
      "https://stuki-druki.com/biofoto1/Jackie-Chan.jpg";
    return (
      <div className="list-page">
        <h1 className="list-page__title">{this.state.title}</h1>
        <ul>
          {this.state.movies.map((item) => {
            return (
              <article className="movie-item" key={item.imdbID}>
                <li className="link-film">
                  <img
                    className="movie-item__poster"
                    src={
                      item.Poster !== "N/A" ? item.Poster : replacementPoster
                    }
                    alt={this.state.title}
                  />
                  <a
                    href={`https://www.imdb.com/title/${item.imdbID}/`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.Title} ({item.Year})
                  </a>
                </li>
              </article>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListPage;
