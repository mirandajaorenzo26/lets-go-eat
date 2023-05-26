import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { AppUpdateContext } from "../contexts/AppContext";
import { AiOutlinePlus } from "react-icons/ai";
function Suggestions() {
  const { recoRestaurants } = useContext(AppContext);
  const { addRestaurant } = useContext(AppUpdateContext);

  function shuffleRecommendation(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="my-5 flex w-full flex-wrap justify-center gap-5 lg:gap-20">
      {shuffleRecommendation(recoRestaurants).map((restaurant) => (
        <button
          className="flex items-center gap-2 hover:font-bold"
          key={crypto.randomUUID()}
          onClick={(e) => addRestaurant(e, restaurant)}
        >
          <AiOutlinePlus />
          <p>{restaurant}</p>
        </button>
      ))}
    </div>
  );
}

export default Suggestions;
