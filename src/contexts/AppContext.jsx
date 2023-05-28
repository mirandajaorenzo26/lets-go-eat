import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppUpdateContext = createContext();

const defaultRestaurants = [
  "Jollibee",
  "McDonald's",
  "KFC",
  "Mang Inasal",
  "Chowking",
  "Bonchon",
];

export function AppProvider({ children }) {
  const [recoRestaurants, setRecoRestaurants] = useState(defaultRestaurants);
  const [restaurantChoices, setRestaurantChoices] = useState([]);
  const [chosenRestaurant, setChosenRestaurant] = useState();

  const addRestaurant = (e, restaurant) => {
    e.preventDefault();
    if (restaurant) {
      setRestaurantChoices((currentRestaurants) => {
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
    if (restaurantChoices.includes(restaurant)) {
      setRestaurantChoices((currRestaurant) => {
        return currRestaurant.filter(
          (restaurantChoices) => restaurantChoices !== restaurant
        );
      });
      setRecoRestaurants((currRecommendation) => {
        return [...currRecommendation, restaurant];
      });
      console.log("Bura natin ", restaurant);
    } else {
      console.log("Empty Input Form");
    }
  };

  const shuffleRestaurants = (chosenRestaurants) => {
    for (let i = chosenRestaurants.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chosenRestaurants[i], chosenRestaurants[j]] = [
        chosenRestaurants[j],
        chosenRestaurants[i],
      ];
    }
    setRestaurantChoices(() => [...chosenRestaurants]);
  };

  return (
    <AppContext.Provider
      value={{ restaurantChoices, setRestaurantChoices, recoRestaurants }}
    >
      <AppUpdateContext.Provider
        value={{ addRestaurant, removeRestaurant, shuffleRestaurants }}
      >
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
