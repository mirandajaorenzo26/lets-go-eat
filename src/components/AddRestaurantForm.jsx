import { useContext, useRef, useState } from "react";
import { AppUpdateContext } from "../contexts/AppContext";

function AddRestaurantForm() {
  const { addRestaurant } = useContext(AppUpdateContext);
  const [newRestaurant, setNewRestaurant] = useState("");
  const inputRef = useRef();

  return (
    <div className="my-5 text-center">
      <h1 className="text-4xl font-bold">
        Hmm... let&apos;s see where you&apos;ll eat
      </h1>
      <form
        className="my-5 flex w-full rounded-xl border-2 border-dashed border-neutral-400 px-5 py-3"
        onSubmit={(e) => {
          addRestaurant(e, newRestaurant);
          setNewRestaurant("");
        }}
      >
        <input
          ref={inputRef}
          placeholder="Add some restaurant"
          type="text"
          className="w-full bg-transparent focus:outline-none"
          value={newRestaurant}
          onChange={(e) => {
            setNewRestaurant(e.target.value);
          }}
        />
        <button className="font-medium">Add</button>
      </form>
    </div>
  );
}

export default AddRestaurantForm;
