import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import RestaurantDataCard from "../components/RestaurantDataCard";

function Home() {
  const [selectedCuisineId, setSelectedCuisineId] = useState(0);
  const { cuisineData, restaurantsData } = useContext(DataContext);

  const requiredRestaurantsData = restaurantsData.filter(
    ({ cuisine_id }) => selectedCuisineId === cuisine_id
  );

  return (
    <div>
      <div>
        <h1 className="text-align-center">Food Ordering App</h1>
        <h4 className="text-align-center">Select Your Cuisine:</h4>
        <div className="flex-row-center gap-1">
          {cuisineData.map(({ id, name }) => (
            <button
              key={id}
              className="primary-button"
              onClick={() => {
                setSelectedCuisineId(id);
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div>
        {requiredRestaurantsData.map((restaurantData) => (
          <RestaurantDataCard
            key={restaurantData.id}
            restaurantData={restaurantData}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
