import { createContext, useState } from "react";
import { cuisines, restaurants } from "../db/Data";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [cuisineData] = useState(cuisines);
  const [restaurantsData, setRestaurantsData] = useState(restaurants);

  const addReviewToRestaurant = (restaurantId, review) => {
    setRestaurantsData(
      restaurantsData.map((restraunt) =>
        // eslint-disable-next-line eqeqeq
        restraunt.id == restaurantId
          ? { ...restraunt, ratings: [...restraunt.ratings, review] }
          : restraunt
      )
    );
  };

  return (
    <DataContext.Provider
      value={{
        cuisineData,
        restaurantsData,
        addReviewToRestaurant,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
