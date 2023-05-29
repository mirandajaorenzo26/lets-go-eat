import { Modal } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppContext = createContext();
export const AppUpdateContext = createContext();

export function AppProvider({ children }) {
  const [options, setOptions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [chosenOption, setChosenOption] = useState("");
  const [hasCardFlipped, setHasCardFlipped] = useState(false);
  const [isRecommendationOn, setIsRecommendationOn] = useState(false);

  const openRecommendation = () => {
    setIsRecommendationOn(true);
  };

  const closeRecommendation = () => {
    setIsRecommendationOn(false);
  };

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
      if (option === "") {
        notify("Invalid Input");
        return;
      }

      notify(option + " has already been added");
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

  const notify = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const [showResult, setShowResult] = useState(false);
  const handleOpen = () => setShowResult(true);
  const handleClose = () => setShowResult(false);

  useEffect(() => {
    if (chosenOption !== "") {
      handleOpen();
    }
  }, [chosenOption]);

  return (
    <AppContext.Provider
      value={{
        options,
        setOptions,
        isRecommendationOn,
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
          openRecommendation,
          closeRecommendation,
        }}
      >
        {children}

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <Modal open={showResult} onClose={handleClose}>
          <div className="pointer-events-none flex h-full items-center justify-center p-5">
            <div className=" pointer-events-auto  rounded-xl bg-white p-5">
              <p className="px-10 py-5 text-2xl">
                <span className="font-bold">{chosenOption}</span> won!
              </p>
            </div>
          </div>
        </Modal>
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
