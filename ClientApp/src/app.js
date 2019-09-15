import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/shared/layout";
import { Home } from "./components/home/home";
import { FetchData } from "./components/weather/fetchData";

import { Counters } from "./components/counters/counters";
import Movies from "./components/movies/movies";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counters" component={Counters} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/movies" component={Movies} />
      </Layout>
    );
  }
}
