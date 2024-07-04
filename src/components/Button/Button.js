import "./Button.css";
import { NavLink } from "react-router-dom";

function Button({ text, onClick, location }) {
  if (location) {
    return (
      <NavLink to={location}>
        <button className="btn" onClick={onClick}>
          {text}
        </button>
      </NavLink>
    );
  }

  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}
/*<button className="btn" onClick={onClick}>
      {text}
    </button> */
export default Button;
