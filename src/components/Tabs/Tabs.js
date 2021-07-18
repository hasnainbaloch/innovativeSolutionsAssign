import React, { useState } from "react";
import "./tab.css";
import { Tabs, Tab } from "react-bootstrap";

export default function CustomTabs({ tabsData, tabTitle }) {
  const [key, setKey] = useState(tabsData[0].title);

  return (
    <div className="customtab-wrapper">
      <h4 id="title">{tabTitle}</h4>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 custom-tabs"
      >
        {tabsData.map((tab) => (
          <Tab eventKey={tab.title} title={tab.title} key={tab.title}>
            <ul className="list--wrap">
              {tab.record.map((rec) => (
                <li className="tab-list" key={rec.name}>
                  <div className="coinIcon">
                    <div className="img-wrap">
                      <img src={rec.icon} alt="rec.img" />
                    </div>
                    <div className="coin-name">{rec.name}</div>
                  </div>
                  <div className="price">{rec.price}</div>
                  <div
                    className={`__ratio ${
                      rec.ratioType === "incline" ? "incline" : "decline"
                    }`}
                  >
                    {rec.coinRatio}
                  </div>
                </li>
              ))}
            </ul>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
