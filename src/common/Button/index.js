import React from "react";

const Button = ({ type, btnText, onClick, className }) => {
  return (
    <button type={type} className={`${className}-btn `} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
