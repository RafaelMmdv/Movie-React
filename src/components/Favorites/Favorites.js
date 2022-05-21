import React, { Component } from "react";
import "./Favorites.css";
import { createList } from "../../api";
import { Link } from "react-router-dom";

class Favorites extends Component {
  state = {
    title: "",
    id: "",
  };

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  preservationFilms = () => {
    createList(this.state.title, this.props.favorites).then((data) => {
      this.setState({
        id: data.id,
      });
    });
  };

  render() {
    const { favorites } = this.props;
    console.log(favorites);
    return (
      <div className="favorites">
        <input
          value={this.state.title}
          placeholder="Введите название списка"
          className="favorites__name"
          onChange={this.onTitleChange}
          disabled={this.state.id || favorites.length === 0}
        />
        <ul className="favorites__list">
          {favorites.map((item, idx) => {
            return (
              <li key={item.imdbID} className="favorites__list-item">
                {item.Title} ({item.Year})
                <button
                  className="favorites__save"
                  type="submit"
                  onClick={() => this.props.remove(idx)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        {this.state.id ? (
          <Link className="transition_link" to={`/list/${this.state.id}`}>
            {this.state.title}
          </Link>
        ) : (
          <button
            onClick={this.preservationFilms}
            type="button"
            className="search-box__form-submit"
            disabled={!this.state.title}
          >
            Сохранить список
          </button>
        )}
      </div>
    );
  }
}

export default Favorites;
