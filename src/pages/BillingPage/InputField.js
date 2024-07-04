import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./InputField.css";

function InputField({ label, placeholder, bgColor, showArrow }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        style={{ backgroundColor: bgColor }}
        type="text"
        placeholder={placeholder}
      />
      {showArrow && <MdKeyboardArrowDown className="arrow-down" />}
    </div>
  );
}

export default InputField;
