import PickupDropoff from "../../components/PickupDropoff/PickupDropoff";
import "./CarRent.css";
import carsData from "../../utility/carsData";
import CarCard from "../../components/CarCard/CarCard";
import Button from "../../components/Button/Button";

function CarRent() {
  return (
    <div className="car-rent">
      <div className="side-bar">
        <div className="type">
          <h3>Type</h3>
          <ul>
            <li>
              <input type="checkbox" id="sport" defaultChecked />
              <label htmlFor="sport">Sport</label>
              <span>(10)</span>
            </li>
            <li>
              <input type="checkbox" id="suv" defaultChecked />
              <label htmlFor="suv">SUV</label>
              <span>(12)</span>
            </li>
            <li>
              <input type="checkbox" id="mpv" />
              <label htmlFor="mpv">MPV</label>
              <span>(16)</span>
            </li>
            <li>
              <input type="checkbox" id="sedan" />
              <label htmlFor="sedan">Sedan</label>
              <span>(10)</span>
            </li>
            <li>
              <input type="checkbox" id="coupe" />
              <label htmlFor="coupe">Coupe</label>
              <span>(14)</span>
            </li>
            <li>
              <input type="checkbox" id="hatchback" />
              <label htmlFor="hatchback">Hatchback</label>
              <span>(14)</span>
            </li>
          </ul>
        </div>
        <div className="capacity">
          <h3>Capacity</h3>
          <ul>
            <li>
              <input type="checkbox" id="capacity-2" defaultChecked />
              <label htmlFor="capacity-2">2 Person</label>
              <span>(12)</span>
            </li>
            <li>
              <input type="checkbox" id="capacity-4" />
              <label htmlFor="capacity-4">4 Person</label>
              <span>(10)</span>
            </li>
            <li>
              <input type="checkbox" id="capacity-6" />
              <label htmlFor="capacity-6">6 Person</label>
              <span>(10)</span>
            </li>
            <li>
              <input type="checkbox" id="capacity-8" defaultChecked />
              <label htmlFor="capacity-8">8 Person</label>
              <span>(10)</span>
            </li>
          </ul>
        </div>
        <div className="price">
          <h3>Price</h3>
          <input type="range" min="0" max="100" />
          <span>Max. $100.00</span>
        </div>
      </div>
      <div className="container">
        <PickupDropoff />
        <div className="car-list">
          {carsData.map((car, index) => (
            <CarCard
              key={index}
              image={car.image}
              name={car.name}
              type={car.type}
              price={car.price}
              oldPrice={car.oldPrice}
              fuel={car.fuel}
              transmission={car.transmission}
              capacity={car.capacity}
              isFavorite={car.isFavorite}
            />
          ))}
        </div>
        <div className="show-more">
          <Button text="Show more cars" />
        </div>
      </div>
    </div>
  );
}

export default CarRent;
