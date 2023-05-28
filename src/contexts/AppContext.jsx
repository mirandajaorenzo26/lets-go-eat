import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppUpdateContext = createContext();

export function AppProvider({ children }) {
  const [options, setOptions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [chosenOption, setChosenOption] = useState("");
  const [hasCardFlipped, setHasCardFlipped] = useState(false);

  const addOption = (e, option) => {
    e.preventDefault();
    if (option && !options.includes(option)) {
      setOptions((currOptions) => {
        return [...currOptions, option];
      });
      setRecommendations((currRecommendations) => {
        return currRecommendations.filter(
          (currRecommendation) => option !== currRecommendation
        );
      });
      e.target.value = "";
    } else {
      console.log("Invalid Input");
    }
  };

  const removeOption = (option) => {
    if (options.includes(option)) {
      setOptions((currOptions) => {
        return currOptions.filter((currOption) => option !== currOption);
      });

      setRecommendations((currRecommendations) => {
        return [...currRecommendations, option];
      });
    }

    if (option === chosenOption) {
      setChosenOption("");
      setHasCardFlipped(false);
    }
  };

  const removeAllOptions = (options) => {
    options.map((option) => {
      if (options.includes(option)) {
        setOptions((currOptions) => {
          return currOptions.filter((currOption) => option !== currOption);
        });

        setRecommendations((currRecommendations) => {
          return [...currRecommendations, option];
        });
      }

      if (option === chosenOption) {
        setChosenOption("");
        setHasCardFlipped(false);
      }
    });
  };

  const randomPick = () => {
    setChosenOption(() => options[Math.floor(Math.random() * options.length)]);
  };

  const shuffleOptions = (options) => {
    setTimeout(() => {
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      setOptions(() => [...options]);
    }, 1000);
  };

  return (
    <AppContext.Provider
      value={{
        options,
        setOptions,
        recommendations,
        chosenOption,
        hasCardFlipped,
      }}
    >
      <AppUpdateContext.Provider
        value={{
          addOption,
          removeOption,
          removeAllOptions,
          shuffleOptions,
          setChosenOption,
          setHasCardFlipped,
          randomPick,
          setRecommendations,
        }}
      >
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
