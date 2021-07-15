import React from "react";
import "./exchange.css";

import sendArrowIcon from "../../assets/icons/sendArrow.png";
import receiveArrowIcon from "../../assets/icons/receiveArrow.png";
import balance from "../../assets/icons/bitcoin.png";
import CandleChart from "../../components/Charts/candleStickChart/CandleChart";
import CardView from "../../components/CardView";

export default function Exchange({ title }) {
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
        <CardView style={{flex: 2, marginRight: '15px'}}>
          <CandleChart />
        </CardView>
        <CardView style={{flex:1, marginLeft: '15px'}}>
          <p>TABS</p>
        </CardView>
      </div>

      


    </div>
  );
}
