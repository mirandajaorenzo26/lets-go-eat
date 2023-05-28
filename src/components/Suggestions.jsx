import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { AppUpdateContext } from "../contexts/AppContext";
import { AiOutlinePlus } from "react-icons/ai";

function Suggestions() {
  const restaurantRecommendations = [
    "Jollibee",
    "McDonald's",
    "KFC",
    "Mang Inasal",
    "Chowking",
    "Bonchon",
    "Greenwich",
    "Shakey's",
    "Pizza Hut",
    "Tokyo Tokyo",
  ];
  const coffeeShopsRecommendations = [
    "Starbucks",
    "The Coffee Bean & Tea Leaf",
    "Bo's Coffee",
    "Seattle's Best Coffee",
    "Tim Hortons",
    "Figaro Coffee",
    "UCC Clockwork",
    "Coffee Project",
    "Philippine Coffee Company",
    "CBTL",
  ];

  const { recommendations, options } = useContext(AppContext);
  const { addOption, setRecommendations } = useContext(AppUpdateContext);

  const selectRef = useRef();
  const categories = ["Restaurants", "Coffee Shops"];
  const [typeOfReco, setTypeOfReco] = useState("Restaurant");

  const handleChange = (event) => {
    setTypeOfReco(event.target.value);
  };

  useEffect(() => {
    setRecommendations(restaurantRecommendations);
  }, []);

  useEffect(() => {
    if (typeOfReco === "Restaurants")
      setRecommendations(restaurantRecommendations);
    else if (typeOfReco === "Coffee Shops")
      setRecommendations(coffeeShopsRecommendations);
  }, [typeOfReco]);

  function shuffleRecommendation(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="grid">
      <div className="">
        <label
          htmlFor="categories"
          className="mb-2 block text-sm font-medium text-black"
        >
          Select a category for recommendations:
        </label>

        <select
          ref={selectRef}
          id="categories"
          name="categories"
          className=" mt-1 block w-full rounded-xl border-2 border-dashed border-neutral-400 bg-white px-5 py-3 focus:outline-none sm:text-sm"
          value={typeOfReco}
          multiple={false}
          onChange={handleChange}
          disabled={options.length > 0 ? true : false}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="my-5 flex w-full flex-wrap justify-center gap-3 lg:gap-10">
        {shuffleRecommendation(recommendations)
          .slice(0, 5)
          .map((option) => (
            <button
              className="flex items-center gap-2 hover:font-bold"
              key={option}
              onClick={(e) => {
                addOption(e, option);
              }}
            >
              <AiOutlinePlus />
              <p>{option}</p>
            </button>
          ))}
      </div>
    </div>
  );
}

export default Suggestions;
