import React, { Component } from "react";
import Counter from "../counter/counter";

export class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 7 }
    ]
  };

  handleDelete = () => {
    console.log("EV Called");
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </React.Fragment>
    );
  }
}
