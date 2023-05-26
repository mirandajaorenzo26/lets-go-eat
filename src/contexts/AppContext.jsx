import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppUpdateContext = createContext();

const defaultRestaurants = [
  "Jollibee",
  "McDonald's",
  "Mang Inasal",
  "Chowking",
  "Bonchon",
];

export function AppProvider({ children }) {
  const [recoRestaurants, setRecoRestaurants] = useState(defaultRestaurants);
  const [chosenRestaurant, setChosenRestaurant] = useState([]);

  const addRestaurant = (e, restaurant) => {
    e.preventDefault();
    if (restaurant) {
      setChosenRestaurant((currentRestaurants) => {
        return [...currentRestaurants, restaurant];
      });
      setRecoRestaurants((currentReco) => {
        return currentReco.filter(
          (recoRestaurant) => restaurant !== recoRestaurant
        );
      });
      e.target.value = "";
    } else {
      console.log("Empty Input Form");
    }
  };

  const removeRestaurant = (restaurant) => {
    if (chosenRestaurant.includes(restaurant)) {
      setChosenRestaurant((currentRestaurant) => {
        return currentRestaurant.filter(
          (chosenRestaurant) => chosenRestaurant !== restaurant
        );
      });
      setRecoRestaurants((currentReco) => {
        return [...currentReco, restaurant];
      });
      console.log("Bura natin ", restaurant);
    } else {
      console.log("Empty Input Form");
    }
  };

  return (
    <AppContext.Provider
      value={{ chosenRestaurant, setChosenRestaurant, recoRestaurants }}
    >
      <AppUpdateContext.Provider value={{ addRestaurant, removeRestaurant }}>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
