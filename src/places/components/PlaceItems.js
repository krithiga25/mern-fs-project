import React from "react";
import "./PlaceItems.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
const PlaceItems = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className="place-item__info">
          <h2> {props.title}</h2>
          <h3>{props.address}</h3>
          <p> {props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse> VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItems;
