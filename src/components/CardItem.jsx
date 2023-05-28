function CardItem({ restaurantName }) {
  return (
    <div className="card">
      <div className="card-inner card-design">
        <div className="card-front">
          <div className="card-content">
            <p className="select-none text-xl ">{restaurantName}</p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-content">
            <p className="select-none text-2xl font-bold">let&apos;s go eat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
