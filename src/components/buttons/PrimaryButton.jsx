import React from "react";
import "./button.css";

export default function PrimaryButton({ children, style }) {
  return (
    <button className="primary-button" style={style} className="__btn">
      {children}
    </button>
  );
}
