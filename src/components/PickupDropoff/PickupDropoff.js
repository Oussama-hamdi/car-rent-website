import "./PickupDropoff.css";
import { HiArrowsUpDown } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

//TODO: Create a select dropdown for the location, date, and time
function PickupDropoff() {
  return (
    <div className="pickup-dropoff-wrapper">
      <div className="pickup-dropoff">
        <div className="pickup">
          <div className="radio-box">
            <input type="radio" name="pickup" id="pickup" defaultChecked />
            <label htmlFor="pickup">Pick-Up</label>
          </div>
          <div className="pickup-dropoff-info">
            <div className="location">
              <h3>Location</h3>
              <div className="select">
                <p>Select your city</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="Date">
              <h3>Date</h3>
              <div className="select">
                <p>Select your date</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="time">
              <h3>Time</h3>
              <div className="select">
                <p>Select your time</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div className="arrows-icon">
          <HiArrowsUpDown />
        </div>
        <div className="dropoff">
          <div className="radio-box">
            <input type="radio" name="dropoff" id="dropoff" defaultChecked />
            <label htmlFor="dropoff">Drop-Off</label>
          </div>
          <div className="pickup-dropoff-info">
            <div className="location">
              <h3>Location</h3>
              <div className="select">
                <p>Select your city</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="Date">
              <h3>Date</h3>
              <div className="select">
                <p>Select your date</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div className="time">
              <h3>Time</h3>
              <div className="select">
                <p>Select your time</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickupDropoff;
