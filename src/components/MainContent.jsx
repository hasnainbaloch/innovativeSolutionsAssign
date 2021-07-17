import React from "react";
import TopHeader from "./topHeader/TopHeader";

import { Switch, Route } from "react-router-dom";
import Other from "../views/Other";
import Exchange from "../views/exchange/Exchange.jsx";

export const MainContent = () => {
  const mainContentStyle = {
    backgroundColor: "#2c3254",
    padding: "15px 0",
    width: "100%",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    minHeight: "100vh",
    marginLeft: '200px'
  };
  return (
    <div style={mainContentStyle}>
      <TopHeader />
      <Switch>
        <Route path="/" exact component={Other} />
        <Route path="/exchange" component={Exchange} />
      </Switch>
    </div>
  );
};
