import React from "react";

function CardItem({ restaurantName }) {
  return (
    <div
      className="card grid items-center justify-center p-5 font-bold text-white"
      id={restaurantName}
    >
      <p className="select-none text-xl ">let&apos;s go eat</p>
    </div>
  );
}

export default CardItem;
