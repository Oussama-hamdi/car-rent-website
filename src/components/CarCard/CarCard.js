import React, { useState } from "react";
import { FaHeart, FaGasPump, FaCog, FaUserFriends } from "react-icons/fa";
import "./CarCard.css";
import Button from "../Button/Button";

const CarCard = ({
  image,
  name,
  type,
  price,
  oldPrice,
  fuel,
  transmission,
  capacity,
  isFavorite,
  location,
}) => {
  let [favorite, setFavorite] = useState(isFavorite);

  return (
    <div className="car-card">
      <div className="car-header">
        <h3 className="car-name">{name}</h3>
        <FaHeart
          onClick={() => setFavorite(!favorite)}
          className={`car-favorite ${favorite ? "favorite" : ""}`}
        />
      </div>
      <p className="car-type">{type}</p>
      <img src={image} alt={name} className="car-image" />
      <div className="car-info">
        <div className="car-spec">
          <FaGasPump className="car-icon" /> {fuel}
        </div>
        <div className="car-spec">
          <FaCog className="car-icon" /> {transmission}
        </div>
        <div className="car-spec">
          <FaUserFriends className="car-icon" /> {capacity}
        </div>
      </div>
      <div className="car-price">
        <div className="pricing">
          <span className="current-price">
            {price}/ <span>day</span>
          </span>
          {oldPrice && <div className="old-price">{oldPrice}</div>}
        </div>
        <Button text="Rent Now" location={location} />
      </div>
    </div>
  );
};

export default CarCard;
