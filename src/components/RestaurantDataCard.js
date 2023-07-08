import React from "react";
import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";

function RestaurantDataCard({ restaurantData: { id, name, menu } }) {
  const navigate = useNavigate();

  return (
    <div className="flex-column-center restaurant-data-card">
      <h3
        className="cursor-pointer"
        onClick={() => {
          navigate("/restaurant/" + id);
        }}
      >
        Dishes By {name}
      </h3>
      <div className="flex-row-center flex-wrap gap-2">
        {menu.map((item) => (
          <ItemCard
            itemData={item}
            restaurantName={name}
            restaurantId={id}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default RestaurantDataCard;
