import React from "react";
import Link from "react-router-dom";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItems from "./PlaceItems";
const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2> No places found. Maybe create one?</h2>
          <button> Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItems
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        //   onDelete={props.onDeletePlace}
        //   onEdit={props.onEditPlace}
        ></PlaceItems>
      ))}
    </ul>
  );
};

export default PlaceList;
