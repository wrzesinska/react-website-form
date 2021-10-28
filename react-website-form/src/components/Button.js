import React from "react";
import "./Button.css";

const STYLES = ["btn-primary", "btn--disabled"];
const COLOR = ["primary", "blue", "red"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyles = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];
  return (
    <button
      className={`btn ${checkButtonStyles} ${checkButtonColor}`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};
