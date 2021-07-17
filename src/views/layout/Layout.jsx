import React from "react";
import "./layout.css";
import { MainContent, SideMenu } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";

function Layout() {
  return (
    <Router>
      <div className="layout">
        <SideMenu />
        <MainContent />
      </div>
    </Router>
  );
}

export default Layout;
