import BillingHeader from "./BillingHeader";
import "./BillingPage.css";
import InputField from "./InputField";
import Visa from "../../assets/visa.png";
import PayPal from "../../assets/paypal.png";
import Bitcoin from "../../assets/bitcoin.png";
import NissanGTR from "../../assets/cars/nissan-gt-r.png";
import { TbShieldCheck } from "react-icons/tb";
import Button from "../../components/Button/Button";
import { FaRegStar, FaStar } from "react-icons/fa";
import TotalRentalPrice from "./TotalRentalPrice";

function BillingPage() {
  return (
    <div className="billing">
      <div className="container">
        <div className="payment-processing">
          <div className="billing-info card">
            <BillingHeader
              title={"Billing Info"}
              text={"Please enter your billing info"}
              showSteps={true}
            />
            <div className="input-parent">
              <InputField
                label={"Name"}
                placeholder={"Your name"}
                bgColor={"#F6F7F9"}
                showArrow={false}
              />
              <InputField
                label={"Phone number"}
                placeholder={"Phone number"}
                bgColor={"#F6F7F9"}
                showArrow={false}
              />
              <InputField
                label={"Address"}
                placeholder={"Address"}
                bgColor={"#F6F7F9"}
                showArrow={false}
              />
              <InputField
                label={"Town / City"}
                placeholder={"Town or city"}
                bgColor={"#F6F7F9"}
                showArrow={false}
              />
            </div>
          </div>
          <div className="rental-info card">
            <BillingHeader
              title={"Rental Info"}
              text={"Please select your rental date"}
              showSteps={true}
            />
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
          <div className="payment-method card">
            <BillingHeader
              title={"Payment Method"}
              text={"Please enter your payment method"}
              showSteps={true}
            />
            <div className="card-credit">
              <div className="payment-option">
                <div className="radio-wrapper">
                  <input type="radio" name="payment-method" defaultChecked />
                  <label>Drop-Off</label>
                </div>
                <div className="img">
                  <img src={Visa} alt="visa" />
                </div>
              </div>
              <div className="input-parent">
                <InputField
                  label={"Card number"}
                  placeholder={"Card number"}
                  bgColor={"var(--white)"}
                  showArrow={false}
                />
                <InputField
                  label={"Expiration date"}
                  placeholder={"DD/MM/YY"}
                  bgColor={"var(--white)"}
                  showArrow={false}
                />
                <InputField
                  label={"Card Holder"}
                  placeholder={"Card holder"}
                  bgColor={"var(--white)"}
                  showArrow={false}
                />
                <InputField
                  label={"CVC"}
                  placeholder={"CVC"}
                  bgColor={"var(--white)"}
                  showArrow={false}
                />
              </div>
            </div>

            {/* PayPal Payment Option */}
            <div className="payment-wrapper">
              <div className="payment">
                <input type="radio" name="payment-method" />
                <label>PayPal</label>
              </div>
              <div className="img">
                <img src={PayPal} alt="paypal" />
              </div>
            </div>

            <div className="payment-wrapper">
              <div className="payment">
                <input type="radio" name="payment-method" />
                <label>Bitcoin</label>
              </div>
              <div className="img">
                <img src={Bitcoin} alt="bitcoin" />
              </div>
            </div>
          </div>
          <div className="confirmation card">
            <BillingHeader
              title={"Confirmation"}
              text={
                "We are getting to the end. Just few clicks and your rental is ready!"
              }
              showSteps={true}
            />
            <div className="agreements">
              <div className="agreement">
                <input type="checkbox" />
                <label>
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </label>
              </div>
              <div className="agreement">
                <input type="checkbox" />
                <label>
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>
            <Button text="Rent Now" location={"/"} />
            <div className="data-protection">
              <div className="icon">
                <TbShieldCheck />
                <h4>All your data are safe</h4>
                <p>
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rental-summary card">
          <BillingHeader
            title={"Rental Summary"}
            text={
              "Prices may change depending on the length of the rental and the price of your rental car."
            }
            showSteps={false}
          />
          <div className="car-info">
            <div className="img-wrapper">
              <img src={NissanGTR} alt="Nissan GTR" />
            </div>
            <div className="car-info-title">
              <div className="stats">
                <h2>Nissan GT - R</h2>
                <div className="review-stats">
                  <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                  </div>
                  <p>440+ Reviewer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing">
            <div className="subtotal-tax">
              <h4>Subtotal</h4>
              <p>$80.00</p>
            </div>
            <div className="subtotal-tax">
              <h4>Tax</h4>
              <p>$0</p>
            </div>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Apply Promo code" />
            <p>Apply Now</p>
          </div>
          <TotalRentalPrice />
        </div>
      </div>
    </div>
  );
}

export default BillingPage;
