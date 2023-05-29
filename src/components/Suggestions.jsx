import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { AppUpdateContext } from "../contexts/AppContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

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
  const outdoorActivities = [
    "Island hopping",
    "Snorkeling",
    "Scuba diving",
    "Surfing",
    "Trekking to waterfalls",
    "Canyoneering",
    "Whale watching",
    "Zip-lining",
    "Stand-up paddleboarding",
    "Parasailing",
    "Banana boat rides",
    "Kayaking",
    "White water rafting",
    "Mountain biking",
    "Camping on the beach",
    "Rock climbing",
    "Sightseeing in rice terraces (Banaue, Batad, etc.)",
    "Whitewater kayaking",
    "Kiteboarding",
    "Hiking to volcanoes (e.g., Mount Pinatubo, Mount Mayon)",
    "Snorkeling with whale sharks (in Oslob)",
    "Canoeing in rivers",
    "Biking through scenic routes (e.g., Intramuros in Manila)",
    "Bird watching",
    "Sailing",
    "Fishing",
    "ATV riding",
    "Caving",
    "Jet skiing",
    "Waterfall rappelling",
    "Zorbing",
    "Spelunking",
    "Helicopter tours",
    "Paddleboarding",
    "Sunset cruises",
    "Horseback riding on the beach",
    "Off-road adventure tours",
    "Photography tours",
    "Motorcycle tours",
    "Tandem paragliding",
    "Yoga retreats",
    "Beach volleyball tournaments",
    "Spearfishing",
  ];
  const indoorActivities = [
    "Watch movies",
    "Play video games",
    "Read books",
    "Do puzzles",
    "Cook or bake",
    "Indoor gardening",
    "Paint or draw",
    "Write",
    "Listen to music",
    "Play instruments",
    "Dance",
    "Yoga or meditation",
    "Work out",
    "Board games",
    "Card games",
    "Chess or strategy games",
    "Build models",
    "Craft (knitting, sewing)",
    "Learn online",
    "Watch TV series",
    "Virtual reality gaming",
    "Online shopping",
    "Home improvement projects",
    "Indoor sports (table tennis, badminton)",
    "Indoor workouts (yoga, aerobics)",
    "Home spa day",
    "Play mini-golf or bowling",
    "DIY projects",
    "Board game night",
    "Movie marathon",
    "Experiment with cooking",
    "Online socializing",
    "Take online courses",
    "Listen to podcasts",
    "Do jigsaw puzzles",
    "Scavenger hunts",
    "Write in a journal",
    "Create art with recycled materials",
    "Organize home spaces",
    "Meditation or mindfulness",
    "Learn magic tricks",
    "Solve brain teasers",
    "Host virtual game night",
    "Explore virtual museums",
    "Try new recipes",
    "Create videos or podcasts",
    "Practice calligraphy",
    "Do online quizzes",
    "Build and program electronic projects",
  ];
  const giftIdeas = [
    "Gift cards",
    "Personalized photo item",
    "Favorite book",
    "Subscription service",
    "Spa or wellness package",
    "Custom jewelry or accessories",
    "Gourmet chocolates or gift basket",
    "Home decor items",
    "Tech gadgets",
    "Fashion accessories",
    "Experience vouchers",
    "Sports or fitness equipment",
    "Unique handmade crafts",
    "Coffee or tea gift set",
    "Cooking or baking tools",
    "Personalized stationery or journal",
    "Outdoor gear",
    "Art supplies",
    "Home spa essentials",
    "Subscription box",
    "Decorative plants or terrariums",
    "Headphones or speakers",
    "Travel accessories",
    "Wine or beer tasting set",
    "Fitness tracker or smart scale",
    "Board games or card games",
    "Cooking or mixology classes",
    "Handcrafted jewelry",
    "Aromatherapy diffuser",
    "DIY craft kits",
    "Outdoor cooking equipment",
    "Art prints or posters",
    "Book club or magazine subscription",
    "Home organization items",
    "Virtual reality headset or gaming accessories",
    "Luxurious bathrobe or cozy blanket",
    "Wireless charging pad or power bank",
    "Fitness apparel or workout gear",
    "Portable Bluetooth speaker",
    "Handmade or personalized pottery",
    "Educational toys or STEM kits",
    "Self-care gift set",
  ];

  const { isRecommendationOn, recommendations, options } =
    useContext(AppContext);
  const {
    addOption,
    setRecommendations,
    openRecommendation,
    closeRecommendation,
  } = useContext(AppUpdateContext);

  const selectRef = useRef();
  const categories = [
    "Restaurants",
    "Coffee Shops",
    "Outdoor Activities",
    "Indoor Activities",
    "Gift Ideas",
  ];
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
    else if (typeOfReco === "Outdoor Activities")
      setRecommendations(outdoorActivities);
    else if (typeOfReco === "Indoor Activities")
      setRecommendations(indoorActivities);
    else if (typeOfReco === "Gift Ideas") setRecommendations(giftIdeas);
  }, [typeOfReco]);

  function shuffleRecommendation(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="grid rounded-xl  border-2 border-dashed border-neutral-400  px-5 py-3 ">
      {!isRecommendationOn && (
        <button
          className="text-xs underline underline-offset-2 hover:font-bold"
          onClick={() => openRecommendation()}
        >
          Show Recommendation
        </button>
      )}

      {isRecommendationOn && (
        <>
          <div className=" ">
            <div className="flex items-center justify-between">
              <label
                htmlFor="categories"
                className="mb-2 block text-sm font-medium"
              >
                Select a category for recommendations:
              </label>
              <button
                className="mr-1 hover:scale-150"
                onClick={() => closeRecommendation()}
              >
                <AiOutlineMinus />
              </button>
            </div>

            <select
              ref={selectRef}
              id="categories"
              name="categories"
              className="  block w-full border-b border-black bg-transparent py-2 font-bold focus:outline-none sm:text-sm"
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
            {recommendations.length > 0 ? (
              shuffleRecommendation(recommendations)
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
                ))
            ) : (
              <p>No recommendations available</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Suggestions;
