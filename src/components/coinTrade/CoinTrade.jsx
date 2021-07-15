import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import InputDropDown from '../inputDropdown/inputDropDown';
import Input from '../inputField/Input'
import './cointrade.css';

export default function CoinTrade({title, buttonText, labelText, inputPlaceHolder}) {
    return (
        <div className="coin-trade-wrap">
            <h4 id="title">{title}</h4>
            <Input labelText={labelText} inputPlaceHolder={inputPlaceHolder}/>
            <InputDropDown/>
            <PrimaryButton>{buttonText}</PrimaryButton>
        </div>
    )
}
