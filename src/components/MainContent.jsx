import React from "react";
import TopHeader from "./topHeader/TopHeader";

import { Switch, Route } from "react-router-dom";
import Other from "./Other";
import Exchange from "./exchange/Exchange";

export const MainContent = () => {
  const mainContentStyle = {
    backgroundColor: "#2c3254",
    padding: "15px 0",
    width: "100%",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    minHeight: "90vh",
  };
  return (
    <div style={mainContentStyle}>
      <TopHeader />
      <Switch>
        <Route path="/" component={Other} />
        <Route path="/exchange" component={Exchange} />
      </Switch>
    </div>
  );
};
