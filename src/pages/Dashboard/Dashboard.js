import React from "react";
import { GoHome } from "react-icons/go";
import { FaCar } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { BiWallet } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline, IoMoonOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TbSettings2 } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";
import { RxBackpack } from "react-icons/rx";
import { MdOutlineWbSunny } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import Map from "../../assets/maps.png";
import Chart from "../../assets/chart.png";
import NissanGTR from "../../assets/cars/nissan-gt-r.png";
import Koegnigsegg from "../../assets/cars/koenigsegg.png";
import RollsRoyce from "../../assets/cars/rolls-royce.png";
import CRV from "../../assets/cars/cr-v.png";
import "./Dashboard.css";
import InputField from "../BillingPage/InputField";
import TotalRentalPrice from "../BillingPage/TotalRentalPrice";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="side-bar">
        <div className="links-wrapper">
          <h3>Main Menu</h3>
          <ul>
            <li className="active">
              <GoHome /> Dashboard
            </li>
            <li>
              <FaCar /> Car Rent
            </li>
            <li>
              <ImStatsBars /> Insight
            </li>
            <li>
              <BiWallet /> Insight
            </li>
            <li>
              <IoChatbubbleEllipsesOutline /> Inbox
            </li>
            <li>
              <SlCalender /> Calendar
            </li>
          </ul>
        </div>
        <div className="links-wrapper">
          <h3>Preferences</h3>
          <ul>
            <li>
              <TbSettings2 /> Settings
            </li>
            <li>
              <FiHelpCircle /> Help & Center
            </li>
            <li className="dark-mode">
              <RxBackpack /> Dark Mode
              <div className="dark-light">
                <label>
                  <input className="toggle-checkbox" type="checkbox" />
                  <div className="toggle-switch">
                    <MdOutlineWbSunny />
                    <IoMoonOutline />
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="log-out">
          <CiLogout />
          <p>Log Out</p>
        </div>
      </div>
      <div className="container">
        <div className="rental-details">
          <div className="header">
            <h3>Details Rental</h3>
            <div className="map">
              <img src={Map} alt="map" />
            </div>
          </div>
          <div className="car">
            <div className="car-info">
              <div className="img-wrapper">
                <img src={NissanGTR} alt="Nissan GTR" />
              </div>
              <div className="car-name">
                <h3>Nissan GT-R</h3>
                <p>Sport Car</p>
              </div>
            </div>
            <p className="num">#9741</p>
          </div>
          <div className="rental-info">
            <div className="pick-up">
              <input type="radio" defaultChecked />
              <label>Pick-Up</label>
            </div>
            <div className="input-parent">
              <InputField
                label={"Locations"}
                placeholder={"Select your city"}
                bgColor={"#F6F7F9"}
                showArrow={true}
              />
              <InputField
                label={"Date"}
                placeholder={"Select your date"}
                bgColor={"#F6F7F9"}
                showArrow={true}
              />
              <InputField
                label={"Time"}
                placeholder={"Select your time"}
                bgColor={"#F6F7F9"}
                showArrow={true}
              />
            </div>
            <div className="drop-off">
              <input type="radio" defaultChecked />
              <label>Drop-Off</label>
            </div>
            <div className="input-parent">
              <InputField
                label={"Locations"}
                placeholder={"Select your city"}
                bgColor={"#F6F7F9"}
                showArrow={true}
              />
              <InputField
                label={"Date"}
                placeholder={"Select your date"}
                bgColor={"#F6F7F9"}
                showArrow={true}
              />
              <InputField
                label={"Time"}
                placeholder={"Select your time"}
                bgColor={"#F6F7F9"}
                showArrow={true}
              />
            </div>
          </div>
          <TotalRentalPrice />
        </div>
        <div className="top-cars">
          <div className="top-five">
            <div className="header">
              <h3>Top 5 Car Rental</h3>
              <BsThreeDots />
            </div>
            <div className="chart">
              <div className="chart-graph">
                <img src={Chart} alt="chart" />
              </div>
              <div className="chart-info">
                <ul>
                  <li>
                    <p>
                      <span className="color1"></span> Sport Car
                    </p>
                    <p>17,439</p>
                  </li>
                  <li>
                    <p>
                      <span className="color2"></span> SUV
                    </p>
                    <p>14,439</p>
                  </li>
                  <li>
                    <p>
                      <span className="color3"></span> Sedan
                    </p>
                    <p>11,439</p>
                  </li>
                  <li>
                    <p>
                      <span className="color4"></span> Hatchback
                    </p>
                    <p>8,439</p>
                  </li>
                  <li>
                    <p>
                      <span className="color5"></span> Coupe
                    </p>
                    <p>5,439</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="recent-transactions">
            <div className="header">
              <h3>Recent Transactions</h3>
              <p>View All</p>
            </div>
            <div className="cars">
              <div className="car">
                <div className="img-wrapper">
                  <img src={NissanGTR} alt="Nissan GTR" />
                </div>
                <div className="car-info">
                  <h4>Nissan GT-R</h4>
                  <p>Sport Car</p>
                </div>
                <div className="price">
                  <p>20 July</p>
                  <h4>$80.00</h4>
                </div>
              </div>
              <div className="car">
                <div className="img-wrapper">
                  <img src={Koegnigsegg} alt="Koegnigsegg" />
                </div>
                <div className="car-info">
                  <h4>Koegnigsegg</h4>
                  <p>Sport Car</p>
                </div>
                <div className="price">
                  <p>19 July</p>
                  <h4>$99.00</h4>
                </div>
              </div>
              <div className="car">
                <div className="img-wrapper">
                  <img src={RollsRoyce} alt="Rolls Royce" />
                </div>
                <div className="car-info">
                  <h4>Rolls Royce</h4>
                  <p>Sport Car</p>
                </div>
                <div className="price">
                  <p>13 July</p>
                  <h4>$96.00</h4>
                </div>
              </div>
              <div className="car">
                <div className="img-wrapper">
                  <img src={CRV} alt="CRV" />
                </div>
                <div className="car-info">
                  <h4>CR-V</h4>
                  <p>SUV</p>
                </div>
                <div className="price">
                  <p>2 July</p>
                  <h4>$80.00</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
