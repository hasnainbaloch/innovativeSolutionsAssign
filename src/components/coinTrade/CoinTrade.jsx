import React, { useState } from "react";
import './trade.css';
import PrimaryButton from "../buttons/PrimaryButton";
import InputDropDown from "../inputDropdown/inputDropDown";
import Input from "../inputField/Input";

export default function CoinTrade({
  title,
  buttonText,
  labelText,
  inputPlaceHolder,
	type
}) {
  let [units, setUnits] = useState(["Dollors ($)"]);
  return (
    <div className="coin-trade-wrap">
      <h4 id="title">{title}</h4>
      <Input labelText={labelText} inputPlaceHolder={inputPlaceHolder} inputType={type}/>
      <InputDropDown label="Price" units={units} type='number'/>
      <InputDropDown label="Total" units={units} type='number'/>
      <PrimaryButton>{buttonText}</PrimaryButton>
    </div>
  );
}
