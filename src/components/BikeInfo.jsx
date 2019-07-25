import React, { Component } from 'react';
import HelperFunctions from '../utils/HelperFunctions';
import Button from 'react-bootstrap/Button';

class BikeInfo extends Component {
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
      'PUT',
      {},
      `rent_bike/${this.state.id}`
    );
    if (res.is_rented === true) console.log('Bike rented successfully!');
  };

  unrentBike = async () => {
    const res = await HelperFunctions.fetchFunc(
      'PUT',
      {},
      `unrent_bike/${this.state.id}`
    );
    if (res.is_rented === false) console.log('Bike freed successfully!');
  };

  deleteBike = async () => {
    const res = await HelperFunctions.fetchFunc(
      'DELETE',
      {},
      `delete_bike/${this.state.id}`
    );
    if (res.affected === 1) console.log('Bike deleted!');
  };

  render() {
    return this.state.is_rented === false ? (
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
    ) : (
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
    );
  }
}

export default BikeInfo;
