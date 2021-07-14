import React from "react";
import "./layout.css";
import { MainContent, SidebarMenu } from "../../components";
import { BrowserRouter as Router } from "react-router-dom";

function Layout() {
  return (
    <Router>
      <div className="layout">
        <SidebarMenu />
        <MainContent />
      </div>
    </Router>
  );
}

export default Layout;
