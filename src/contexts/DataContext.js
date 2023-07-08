import { createContext, useState } from "react";
import { cuisines, restaurants } from "../db/Data";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [cuisineData, setCuisineData] = useState(cuisines);
  const [restaurantsData, setRestaurantsData] = useState(restaurants);

  return (
    <DataContext.Provider
      value={{
        cuisineData,
        restaurantsData,
        setCuisineData,
        setRestaurantsData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
