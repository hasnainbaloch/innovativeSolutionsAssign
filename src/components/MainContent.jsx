import React from "react";
import './mainContent.css';
import TopHeader from "./topHeader/TopHeader";

import { Switch, Route } from "react-router-dom";
import Other from "../views/Other";
import Exchange from "../views/exchange/Exchange.jsx";

export const MainContent = () => {
  return (
    <div className="main-content-wrapper">
      <TopHeader />
      <Switch>
        <Route path="/" exact component={Other} />
        <Route path="/exchange" component={Exchange} />
      </Switch>
    </div>
  );
};
