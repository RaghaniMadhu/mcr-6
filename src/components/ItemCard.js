import React from "react";
import { useNavigate } from "react-router-dom";

function ItemCard({
  itemData: { name, imgSrc, price, qty },
  restaurantId,
  restaurantName,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="item-card cursor-pointer"
      onClick={() => {
        navigate("/restaurant/" + restaurantId);
      }}
    >
      <img src={imgSrc} alt={name} className="item-card-image" />
      <div className="padding-point2-point5">
        <h3 className="margin-block-point2">{name}</h3>
      </div>
      <div className="item-card-info padding-point2-point5">
        <p className="margin-block-point2">
          Rs. {price} for {qty}
        </p>
        <p className="margin-block-point2">{restaurantName}</p>
      </div>
    </div>
  );
}

export default ItemCard;
