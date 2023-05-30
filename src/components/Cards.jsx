import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { AppUpdateContext } from "../contexts/AppContext";

import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import CardItem from "./CardItem";
import { Modal } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

function Cards() {
  const { options, chosenOption } = useContext(AppContext);
  const { removeOption, removeAllOptions, setChosenOption, shuffleOptions } =
    useContext(AppUpdateContext);
  const coverRef = useRef();

  useEffect(() => {
    setChosenOption("");
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="animate__animated animate__slideInUp">
      <div className="mb-5 flex justify-center border-b-2 border-black py-5 text-center text-2xl text-black">
        {chosenOption ? (
          <h2>
            You draw{" "}
            <span className=" font-bold uppercase">{chosenOption}</span> card.
          </h2>
        ) : (
          <h2 className="font-bold uppercase">Flip a card</h2>
        )}
      </div>
      <div className="relative ">
        {options.length > 0 ? (
          <div className=" grid gap-5 lg:col-span-2">
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
              <ul className="flex w-full justify-start gap-3 overflow-x-scroll  py-3">
                {options.map((option) => (
                  <li key={option}>
                    <CardItem option={option} />
                  </li>
                ))}
              </ul>
              {
                // * Shuffle Button
                options.length > 1 && (
                  <button
                    className="rounded-lg bg-black px-6 py-3 font-bold text-white hover:bg-neutral-800"
                    onClick={() => {
                      shuffleOptions(options);
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
              className="font-bold underline underline-offset-2"
              onClick={handleOpen}
            >
              View Added Options
            </button>
          </div>
        ) : (
          <p className="text-center">No Added Options</p>
        )}
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="pointer-events-none flex h-full items-center justify-center p-5">
          <div className=" pointer-events-auto  w-[90vw] rounded-xl bg-white p-5 lg:w-[30vw]">
            <div className="mb-5 flex justify-between">
              <p className="font-bold">Added Options</p>
              <button onClick={handleClose}>
                <AiOutlineMinus />
              </button>
            </div>
            <hr />
            {
              // * List of Options
              options.length > 0 ? (
                options.map((option) => {
                  return (
                    <div key={option} className="my-1 flex justify-between">
                      <p>{option}</p>
                      <button onClick={() => removeOption(option)}>
                        <AiOutlineClose />
                      </button>
                    </div>
                  );
                })
              ) : (
                <p>No Added Options</p>
              )
            }
            <div className="mt-5 flex justify-center hover:font-bold hover:text-red-600">
              <button
                onClick={() => {
                  removeAllOptions(options);
                  handleClose();
                }}
                className="underline underline-offset-2"
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Cards;
