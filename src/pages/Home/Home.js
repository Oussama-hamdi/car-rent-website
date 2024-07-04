import "./Home.css";
import Koenigsegg from "../../assets/cars/koenigsegg.png";
import NissanGTR from "../../assets/cars/nissan-gt-r.png";
import Button from "../../components/Button/Button";
import PickupDropoff from "../../components/PickupDropoff/PickupDropoff";
import CarCard from "../../components/CarCard/CarCard";
import carsData from "../../utility/carsData";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home-cards">
          <div className="home-car-card card-one">
            <div className="card-content">
              <h2>The Best Platform for Car Rental</h2>
              <p>
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <Button text="Rental Car" location={"/carRent"} />
            </div>
            <div className="home-card-img">
              <img src={Koenigsegg} alt="Koenigsegg" />
            </div>
          </div>
          <div className="home-car-card card-two">
            <div className="card-content">
              <h2>The Best Platform for Car Rental</h2>
              <p>
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <NavLink to={"/carRent"}>
                <button className="home-card-btn">Rental Car</button>
              </NavLink>
            </div>
            <div className="home-card-img">
              <img src={NissanGTR} alt="Koenigsegg" />
            </div>
          </div>
        </div>
        <PickupDropoff />
        <div
          className="car-recommendations
"
        >
          <div className="popular">
            <div className="popular-title">
              <h2>Popular Cars</h2>
              <p>View All</p>
            </div>
            <div className="popular-cars">
              {carsData.slice(0, 4).map((car, index) => (
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
                  location={"/carRent"}
                />
              ))}
            </div>
          </div>
          <div className="recommended">
            <div className="recommended-title">
              <h2>Recommended cars</h2>
            </div>
            <div className="recommended-cars">
              {carsData.slice(4).map((car, index) => (
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
                  location={"/carRent"}
                />
              ))}
            </div>
            <div className="show-more">
              <Button text="Show more cars" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
