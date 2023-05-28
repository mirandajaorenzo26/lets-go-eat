import { useContext, useRef, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { AppUpdateContext } from "../contexts/AppContext";

import { AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import CardItem from "./CardItem";
import { Modal } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

// TODO - Sort the Added Restaurants Modal

function Cards() {
  const { restaurantChoices } = useContext(AppContext);
  const { removeRestaurant, shuffleRestaurants } = useContext(AppUpdateContext);
  const coverRef = useRef();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="relative ">
        {restaurantChoices.length > 0 && (
          <div className=" grid gap-2 lg:col-span-2">
            <div className=" relative flex flex-1 flex-col gap-5 overflow-hidden rounded-xl bg-neutral-300 p-5">
              <div className="cover translate-y-[100%]" ref={coverRef}>
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="32"
                  visible={true}
                />
                <p>Shuffling...</p>
              </div>
              <ul className="flex  w-full flex-wrap justify-center gap-3 ">
                {
                  // * Display all cards
                  restaurantChoices.map((restaurant) => {
                    return (
                      <li key={restaurant}>
                        <CardItem restaurantName={restaurant} />
                      </li>
                    );
                  })
                }
              </ul>
              {
                // * Shuffle Button
                restaurantChoices.length > 1 && (
                  <button
                    className="rounded-lg bg-black px-6 py-3 font-bold text-white hover:bg-neutral-800"
                    onClick={() => {
                      shuffleRestaurants(restaurantChoices);
                      coverRef.current.classList.toggle("translate-y-[100%]");
                      setTimeout(() => {
                        coverRef.current.classList.toggle("translate-y-[100%]");
                      }, 1000);
                    }}
                  >
                    Shuffle
                  </button>
                )
              }
            </div>
            <button
              className="underline-offset- font-bold underline"
              onClick={handleOpen}
            >
              View Added Restaurants
            </button>
          </div>
        )}
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="pointer-events-none flex h-full items-center justify-center p-5">
          <div className=" pointer-events-auto  w-[90vw] rounded-xl bg-white p-5 lg:w-[30vw]">
            <div className="mb-5 flex justify-between">
              <p className="font-bold">Added Restaurant</p>
              <button onClick={handleClose}>
                <AiOutlineMinus />
              </button>
            </div>
            <hr />
            {
              // * List of Restaurants
              restaurantChoices &&
                restaurantChoices.map((restaurant) => {
                  return (
                    <div key={restaurant} className="my-1 flex justify-between">
                      <p>{restaurant}</p>
                      <button onClick={() => removeRestaurant(restaurant)}>
                        <AiFillDelete className="fill-red-600" />
                      </button>
                    </div>
                  );
                })
            }
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Cards;
