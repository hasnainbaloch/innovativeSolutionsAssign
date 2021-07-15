import React from "react";
import './input.css';

export default function Input({
  labelFor,
  labelText,
  inputType,
  inputPlaceHolder,
	style
}) {
  return (
    <div className="input-wrap">
      <label htmlFor={labelFor}>
        {labelText}
        <input
          type={inputType}
          placeholder={inputPlaceHolder}
          id={labelFor}
          style={style}
          className="input-field"
        />
      </label>
    </div>
  );
}
