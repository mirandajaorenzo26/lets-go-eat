import { useContext, useRef, useState } from "react";
import { AppUpdateContext } from "../contexts/AppContext";

function AddRestaurantForm() {
  const { addOption } = useContext(AppUpdateContext);
  const [newOption, setnewOption] = useState("");
  const inputRef = useRef();

  return (
    <div className="mb-5 text-center">
      <form
        className=" flex w-full rounded-xl border-2 border-dashed border-neutral-400 px-5 py-3"
        onSubmit={(e) => {
          addOption(e, newOption);
          setnewOption("");
        }}
      >
        <input
          ref={inputRef}
          placeholder="Add options"
          type="text"
          className="w-full bg-transparent focus:outline-none"
          value={newOption}
          onChange={(e) => {
            setnewOption(e.target.value);
          }}
        />
        <button className="font-medium">Add</button>
      </form>
    </div>
  );
}

export default AddRestaurantForm;
