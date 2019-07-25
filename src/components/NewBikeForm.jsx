import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HelperFunctions from '../utils/HelperFunctions';

class NewBikeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cannondale',
      type: 'Custom',
      rent_price: 0,
      is_rented: false
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createSubmit = async () => {
    await HelperFunctions.fetchFunc(
      'POST',
      {
        name: this.state.name,
        type: this.state.type,
        rent_price: this.state.rent_price,
        is_rented: this.state.is_rented
      },
      'create_rent'
    );
  };

  render() {
    return (
      <Form>
        <Form.Row>
          <Col>
            <Form.Label>Bike name</Form.Label>
            <Form.Control name="name" onChange={this.handleInputChange} />
          </Col>
          <Col>
            <Form.Label>Bike type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              onChange={this.handleInputChange}
            >
              <option>Custom</option>
              <option>Mountain</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Rent price</Form.Label>
            <Form.Control
              type="number"
              name="rent_price"
              onChange={this.handleInputChange}
            />
          </Col>
          <Button variant="info" onClick={this.createSubmit}>
            Submit rent
          </Button>
        </Form.Row>
      </Form>
    );
  }
}

export default NewBikeForm;
