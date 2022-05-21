import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    const { searchLineChangeHandler, searchFilm, nameFilm } = this.props;
    return (
      <div className="search-box">
        <form className="search-box__form" onSubmit={(e) => e.preventDefault()}>
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={nameFilm}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!nameFilm}
            onClick={searchFilm}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
