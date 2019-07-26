import React, { Component } from "react";
import HelperFunctions from "../utils/HelperFunctions";
import Button from "react-bootstrap/Button";

class BikeListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      name: this.props.name,
      type: this.props.type,
      rent_price: this.props.rent_price,
      is_rented: this.props.is_rented
    };
  }

  //Methods
  rentBike = async () => {
    const res = await HelperFunctions.fetchFunc(
      "PUT",
      {},
      `rent_bike/${this.state.id}`
    );
    if (res.is_rented) console.log("Bike rented successfully!");
    this.props.onItemChanged();
  };

  unrentBike = async () => {
    const res = await HelperFunctions.fetchFunc(
      "PUT",
      {},
      `unrent_bike/${this.state.id}`
    );
    if (!res.is_rented) console.log("Bike freed successfully!");
    this.props.onItemChanged();
  };

  deleteBike = async () => {
    const res = await HelperFunctions.fetchFunc(
      "DELETE",
      {},
      `delete_bike/${this.state.id}`
    );
    if (res.affected) console.log("Bike deleted!");
    this.props.onItemChanged();
  };

  render() {
    return this.state.is_rented ? (
      <div className="item">
        <div className="bike-info">
          {this.state.name} / {this.state.type} / {this.state.rent_price}
        </div>
        <div>
          <Button variant="danger" onClick={this.unrentBike}>
            Cancel rent
          </Button>
        </div>
      </div>
    ) : (
      <div className="item">
        <div className="bike-info">
          {this.state.name} / {this.state.type} / {this.state.rent_price}
        </div>
        <div>
          <Button variant="primary" onClick={this.rentBike}>
            Rent
          </Button>
          <Button variant="danger" onClick={this.deleteBike}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default BikeListItem;
