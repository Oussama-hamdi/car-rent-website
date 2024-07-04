import { FaRegStar, FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import carsData from "../../utility/carsData";
import CarCard from "../../components/CarCard/CarCard";
import "./CarRentDetails.css";
import NissanGTR from "../../assets/cars/nissan-gt-r.png";
import CarInside1 from "../../assets/car-inside1.png";
import CarInside2 from "../../assets/car-inside2.png";
import ProfileMan from "../../assets/profile-man.png";
import ProfileWoman from "../../assets/profile-woman.png";
import Button from "../../components/Button/Button";
import "./CarRentDetails.css";

function CarRentDetails() {
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
        <div className="car-details">
          <div className="car">
            <div className="home-car-card">
              <div className="card-content">
                <h2>Sports car with the best design and acceleration</h2>
                <p>
                  Safety and comfort while driving a futuristic and elegant
                  sports car
                </p>
              </div>
              <div className="home-card-img">
                <img src={NissanGTR} alt="Koenigsegg" />
              </div>
            </div>
            <div className="car-imgs">
              <div className="img-wrapper">
                <img src={NissanGTR} alt="Nissan GTR" />
              </div>
              <div className="img-wrapper">
                <img src={CarInside1} alt="Nissan GTR" />
              </div>
              <div className="img-wrapper">
                <img src={CarInside2} alt="Nissan GTR" />
              </div>
            </div>
          </div>
          <div className="car-info">
            <div className="car-info-header">
              <div className="car-info-title">
                <div className="stats">
                  <h2>Nissan GT - R</h2>
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <p>400+ Reviewer</p>
                  </div>
                </div>
              </div>
              <div className="heart">
                <FaHeart />
              </div>
            </div>
            <div className="car-info-details">
              <p>
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </p>
              <div className="categories">
                <div className="category">
                  <p>Type Car</p>
                  <p>Sport</p>
                </div>
                <div className="category">
                  <p>Capacity</p>
                  <p>2 Person</p>
                </div>
                <div className="category">
                  <p>Steering</p>
                  <p>Manual</p>
                </div>
                <div className="category">
                  <p>Gasoline</p>
                  <p>70L</p>
                </div>
              </div>
            </div>
            <div className="car-price">
              <div className="pricing">
                <span className="current-price">
                  $80.00/ <span>days</span>
                </span>
                <div className="old-price">$100.00</div>
              </div>
              <Button text="Rent Now" location={"/carRent/:carId/billing"} />
            </div>
          </div>
        </div>
        <div className="car-reviews">
          <div className="review-title">
            <h2>
              Reviews <span>13</span>
            </h2>
          </div>
          <div className="reviews">
            <div className="review">
              <div className="reviewer">
                <div className="reviewer-img">
                  <img src={ProfileMan} alt="Reviewer" />
                </div>
                <div className="reviewer-info">
                  <div className="reviewer-wrapper">
                    <div className="reviewer-name">
                      <h3>Alex Stanton</h3>
                      <p>CEO at Bukalapak</p>
                    </div>
                    <div className="stars-date-wrapper">
                      <p>21 July 2022</p>
                      <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                      </div>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>
                      We are very happy with the service from the MORENT App.
                      Morent has a low price and also a large variety of cars
                      with good and comfortable facilities. In addition, the
                      service provided by the officers is also very friendly and
                      very polite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="reviewer">
                <div className="reviewer-img">
                  <img src={ProfileWoman} alt="Reviewer" />
                </div>
                <div className="reviewer-info">
                  <div className="reviewer-wrapper">
                    <div className="reviewer-name">
                      <h3>Skylar Dias</h3>
                      <p>CEO at Amazon</p>
                    </div>
                    <div className="stars-date-wrapper">
                      <p>20 July 2022</p>
                      <div className="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                      </div>
                    </div>
                  </div>
                  <div className="review-content">
                    <p>
                      We are very happy with the service from the MORENT App.
                      Morent has a low price and also a large variety of cars
                      with good and comfortable facilities. In addition, the
                      service provided by the officers is also very friendly and
                      very polite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="show-all-btn">
            Show All <MdKeyboardArrowDown />
          </button>
        </div>
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
                  location={`/carRent/${car.id}/billing`}
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
                  location={`/carRent/${car.id}/billing`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarRentDetails;
