import React from "react";
import BikeListItem from "./BikeListItem";
import ListGroup from "react-bootstrap/ListGroup";

function BikesList(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item key={item.id}>
            <BikeListItem
              id={item.id}
              name={item.name}
              type={item.type}
              rent_price={item.rent_price}
              is_rented={item.is_rented}
              onItemChanged={props.onItemChanged}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default BikesList;
