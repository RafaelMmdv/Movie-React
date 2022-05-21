import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../src/pages/MainPage/MainPage";
import ListPage from "../src/pages/ListPage/ListPage";

import "./reset.css";
import "./common.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
      </div>
    );
  }
}

export default App;
