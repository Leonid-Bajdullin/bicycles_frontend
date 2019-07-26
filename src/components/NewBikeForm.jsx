import React, { Component } from "react";
import { Form, Button, Jumbotron, FormGroup, Col } from "react-bootstrap";
import HelperFunctions from "../utils/HelperFunctions";

class NewBikeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cannondale",
      type: "Custom",
      rent_price: 0,
      is_rented: false
    };
  }

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createSubmit = async () => {
    await HelperFunctions.fetchFunc("POST", this.state, "create_rent");
    this.props.onItemAdd();
  };

  render() {
    return (
      <div className="new-bike-form">
        <h4>🤑Create new rent</h4>
        <Jumbotron>
          <Form>
            <Form.Row>
              <FormGroup as={Col} lg="4">
                <Form.Label htmlFor="name">Bike name</Form.Label>
                <Form.Control name="name" onChange={this.handleInputChange} />
              </FormGroup>
              <FormGroup as={Col} lg="4">
                <Form.Label htmlFor="type">Bike type</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  onChange={this.handleInputChange}
                >
                  <option>Custom</option>
                  <option>Mountain</option>
                </Form.Control>
              </FormGroup>
              <FormGroup as={Col} lg="2">
                <Form.Label htmlFor="rent_price">Rent price</Form.Label>
                <Form.Control
                  type="number"
                  name="rent_price"
                  step="1.00"
                  min="1"
                  max="99"
                  form
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup as={Col} lg="2" className="create-rent-holder">
                <Button variant="info" onClick={this.createSubmit}>
                  Submit rent
                </Button>
              </FormGroup>
            </Form.Row>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default NewBikeForm;
