import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { AppUpdateContext } from "../contexts/AppContext";

import { AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import CardItem from "./CardItem";
import { Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Cards() {
  const { chosenRestaurant } = useContext(AppContext);
  const { removeRestaurant } = useContext(AppUpdateContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative flex flex-col  items-center justify-center gap-5 md:flex-row">
      {chosenRestaurant.length > 0 && (
        <>
          <div className="card-placeholder flex-none md:m-10">
            Drag your chosen card here
          </div>
          <div className="grid gap-2">
            <div className="flex flex-1 flex-col  gap-5 rounded-xl bg-neutral-300 p-5">
              <div className="flex w-full flex-wrap justify-center gap-1 ">
                {chosenRestaurant.map((restaurant) => {
                  return (
                    <CardItem key={restaurant} restaurantName={restaurant} />
                  );
                })}
              </div>
              {chosenRestaurant.length > 1 && (
                <button className="rounded-lg bg-black px-6 py-3 font-bold text-white">
                  Shuffle
                </button>
              )}
            </div>
            <button
              className="underline-offset- font-bold underline"
              onClick={handleOpen}
            >
              View Added Restaurants
            </button>
            <Modal open={open} onClose={handleClose}>
              <div className="pointer-events-none flex h-full items-center justify-center">
                <div className=" pointer-events-auto  w-[90vw] rounded-xl bg-white p-5">
                  <div className="mb-5 flex justify-between">
                    <p className="font-bold">Added Restaurant</p>
                    <button onClick={handleClose}>
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <hr />
                  {chosenRestaurant.map((restaurant) => {
                    return (
                      <div
                        key={restaurant}
                        className="my-1 flex justify-between"
                      >
                        <p>{restaurant}</p>
                        <button onClick={() => removeRestaurant(restaurant)}>
                          <AiFillDelete className="fill-red-600" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
}

export default Cards;
