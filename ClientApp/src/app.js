import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/shared/layout";
import { Home } from "./components/home/home";
import { FetchData } from "./components/weather/fetchData";
import { Counter } from "./components/counter/counter";
import Movies from "./components/movies/movies";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/movies" component={Movies} />
      </Layout>
    );
  }
}
