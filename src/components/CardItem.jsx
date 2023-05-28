import { useContext, useRef, useState } from "react";
import { AppUpdateContext } from "../contexts/AppContext";
import { AppContext } from "../contexts/AppContext";

function CardItem({ option }) {
  const { chosenOption, hasCardFlipped } = useContext(AppContext);
  const { setChosenOption, setHasCardFlipped } = useContext(AppUpdateContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef();

  const handleClick = (option) => {
    if (hasCardFlipped && chosenOption !== option) return;
    if (!isFlipped) {
      setChosenOption(option);
      setHasCardFlipped(true);
    } else {
      setChosenOption("");
      setHasCardFlipped(false);
    }
    cardRef.current.classList.toggle("card-flip");
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={() => handleClick(option)}>
      <div ref={cardRef} className="card-inner card-design">
        <div className="card-front">
          <div className="card-content overflow-hidden text-center ">
            <p className="w-full select-none font-bold uppercase">{option}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-content">
            <p className="select-none text-xl font-bold">
              Either You Choose or I Decide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
