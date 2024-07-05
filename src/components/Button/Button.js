import "./Button.css";
import { NavLink } from "react-router-dom";

function Button({ text, onClick, location }) {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  if (location) {
    return (
      <NavLink to={location}>
        <button className="btn" onClick={handleClick}>
          {text}
        </button>
      </NavLink>
    );
  }

  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
