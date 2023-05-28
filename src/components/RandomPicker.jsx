import { useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AppContext, AppUpdateContext } from "../contexts/AppContext";

function RandomPicker() {
  const { options, chosenOption } = useContext(AppContext);
  const { removeOption, setChosenOption, randomPick, setHasCardFlipped } =
    useContext(AppUpdateContext);
  useEffect(() => {
    setChosenOption("");
    setHasCardFlipped(false);
  }, []);
  return (
    <div className="animate__animated animate__slideInUp flex flex-col">
      <div className="mb-5 flex justify-center  border-b-2 border-black py-5 text-2xl">
        {chosenOption ? (
          <h2 className="text-center">
            <span className="font-bold uppercase">{chosenOption}</span> has been
            selected.
          </h2>
        ) : (
          <h2 className="font-bold uppercase ">List of Options</h2>
        )}
      </div>
      {
        // * List of Options
        options.length > 0 ? (
          options.map((option) => {
            return (
              <div
                key={option}
                className="my-1 flex justify-between rounded-xl border-2  border-neutral-300 px-5 py-3"
              >
                <p className="font-bold">{option}</p>
                <button onClick={() => removeOption(option)}>
                  <AiOutlineClose />
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center">No Added Options</p>
        )
      }
      {
        // * Random Pick Button
        options.length > 1 && (
          <button
            className="my-5 rounded-lg bg-black px-6 py-3 font-bold text-white hover:bg-neutral-800"
            onClick={() => {
              randomPick();
            }}
          >
            Random Pick
          </button>
        )
      }
    </div>
  );
}

export default RandomPicker;
