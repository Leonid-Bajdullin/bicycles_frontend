import React, { Component } from "react";
import "./App.css";
import NewBikeForm from "./components/NewBikeForm";
import BikesList from "./components/BikesList";
import HelperFunctions from "./utils/HelperFunctions";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      freeBikes: [],
      rentedBikes: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const freeBikes = await HelperFunctions.fetchFunc(
      "GET",
      {},
      `get_free_bikes`
    );
    const rentedBikes = await HelperFunctions.fetchFunc(
      "GET",
      {},
      `get_rented_bikes`
    );
    this.setState({ rentedBikes: rentedBikes, freeBikes: freeBikes });
  }

  render() {
    return (
      <div className="app">
        <h2>Awesome Bike Rental</h2>
        <NewBikeForm
          onItemAdd={() => {
            this.loadData();
          }}
        />
        <BikesList
          name={`🤩Your rent (Total: $${this.state.rentedBikes.reduce(
            (a, b) => a + b.rent_price,
            0
          )})`}
          list={this.state.rentedBikes}
          onItemChanged={() => {
            this.loadData();
          }}
        />
        <BikesList
          name={"🚲Available bicycles (" + this.state.freeBikes.length + ")"}
          list={this.state.freeBikes}
          onItemChanged={() => {
            this.loadData();
          }}
        />
      </div>
    );
  }
}

export default App;
