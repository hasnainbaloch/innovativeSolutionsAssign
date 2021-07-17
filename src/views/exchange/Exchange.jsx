import React from "react";
import "./exchange.css";

import sendArrowIcon from "../../assets/icons/sendArrow.png";
import receiveArrowIcon from "../../assets/icons/receiveArrow.png";
import balance from "../../assets/icons/bitcoin.png";
import CandleChart from "../../components/Charts/candleStickChart/CandleChart";
import CardView from "../../components/CardView";
import CoinTrade from "../../components/coinTrade/CoinTrade";
import TransactionTable from "../../components/Tables/transactionsHistory/TransactionTable";
import CustomTabs from "../../components/Tabs/Tabs";

import bitIcon from "../../assets/icons/bitcoin.png";
import ethIcon from "../../assets/icons/eth.png";
import ltcIcon from "../../assets/icons/ltc.png";
import xmrIcon from "../../assets/icons/xmr.png";
import adaIcon from "../../assets/icons/ada.png";
import bsvIcon from "../../assets/icons/bsv.png";

export default function Exchange({ title }) {
  let tabsData = [
    {
      title: "Dollar",
      record: [
        {
          icon: bitIcon,
          name:"BTC-USD",
          price: "$8,908",
          coinRatio: "39.5%",
          ratioType: "incline",
        },
        {
          icon: ethIcon,
          name:"ETH-USD",
          price: "$1,903",
          coinRatio: "39.5%",
          ratioType: "decline",
        },
        { icon: ltcIcon, name:"LTC-USD", price: "$852", coinRatio: "39.5%", ratioType: "incline" },
        { icon: xmrIcon, name:"XMR-USD", price: "$193", coinRatio: "39.5%", ratioType: "decline" },
        { icon: adaIcon, name:"ADA-USD", price: "$84", coinRatio: "39.5%", ratioType: "incline" },
        { icon: bsvIcon, name:"BSV-USD", price: "$13", coinRatio: "39.5%", ratioType: "incline" },
      ],
    },
    {
      title: "Bitcoin",
      record: [
        { icon: bitIcon, name:"BTC-BTC", price: "$8,908", coinRatio: "39%", ratioType: "incline" },
      ],
    },
    {
      title: "Ethereum",
      record: [
        { icon: bitIcon, name:"BTC-ETH", price: "$8,908", coinRatio: "39%", ratioType: "incline" },
      ],
    },
  ];

  return (
    <div className="exchange-view-wrapper">
      <h2 className="title">{title || "Exchange"}</h2>

      {/* Top info bar */}
      <div className="info-bar">
        <div className="arrows">
          <div className="send outline-button">
            <div className="send-arrow arrow-icon">
              <img src={sendArrowIcon} alt="send" />
            </div>
            <div className="text">Send</div>
          </div>
          <div className="receive outline-button">
            <div className="receive-arrow arrow-icon">
              <img src={receiveArrowIcon} alt="receive" />
            </div>
            <div className="text">Receive</div>
          </div>
        </div>

        <div className="balance-wrapper">
          <div className="total-balance">
            <div className="sub-text">Total Balance</div>
            <div className="balance">124.021384654 BTC</div>
          </div>
          <div className="coin-wrap">
            <img src={balance} alt="coin" />
          </div>
        </div>
      </div>

      {/* top chart and tab section */}
      <div className="chart-section">
      
        {/* candle stick chart */}
        <CardView style={{ flex: 2, marginRight: "15px" }}>
          <CandleChart />
        </CardView>

        {/* coin market tabs */}
        <CardView style={{ flex: 1, marginLeft: "15px" }}>
          <CustomTabs tabsData={tabsData} tabTitle="Coin Market" />
        </CardView>
      </div>

      {/* Coin Trade sections */}
      <div className="chart-section">
        <CardView style={{ flex: 1, marginRight: "15px" }}>
          <CoinTrade
            labelText="Amount of bitcoins"
            title="Buy Coins"
            inputPlaceHolder="How many bitcoins do you want to buy?"
            buttonText="Buy Coins"
            type="number"
          />
        </CardView>
        <CardView style={{ flex: 1, marginLeft: "15px" }}>
          <CoinTrade
            labelText="Amount of bitcoins"
            title="Sell Coins"
            inputPlaceHolder="How many bitcoins do you want to sell?"
            buttonText="Sell Coins"
            type="number"
          />
        </CardView>
      </div>

      {/* Transaction history table section */}
      <div className="table-section">
        <CardView style={{ flex: 1 }}>
          <TransactionTable />
        </CardView>
      </div>
    </div>
  );
}
