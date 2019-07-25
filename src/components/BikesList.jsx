import React, { Component } from 'react';
import HelperFunctions from '../utils/HelperFunctions';
import BikeInfo from './BikeInfo';
import ListGroup from 'react-bootstrap/ListGroup';

class bikesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikesList: []
    };
  }

  async componentDidMount() {
    const bikesArray = await HelperFunctions.fetchFunc(
      'GET',
      {},
      `${this.props.path}`
    );
    this.setState({ bikesList: bikesArray });
  }

  // async componentDidUpdate() {
  //   const bikesArray = await HelperFunctions.fetchFunc(
  //     'GET',
  //     {},
  //     `${this.props.path}`
  //   );
  //   this.setState({ bikesList: bikesArray });
  // }

  render() {
    return (
      <div>
        <h3>
          {this.props.name}({bikesList.length})
        </h3>
        <ListGroup>
          {this.state.bikesList.map((item) => (
            <ListGroup.Item key={item.id}>
              <BikeInfo
                id={item.id}
                name={item.name}
                type={item.type}
                rent_price={item.rent_price}
                is_rented={item.is_rented}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       {this.state.bikesList.map((item) => (
  //         <BikeInfo
  //           key={item.id}
  //           id={item.id}
  //           name={item.name}
  //           type={item.type}
  //           rent_price={item.rent_price}
  //           is_rented={item.is_rented}
  //         />
  //       ))}
  //     </div>
  //   );
  // }
}

export default bikesList;
