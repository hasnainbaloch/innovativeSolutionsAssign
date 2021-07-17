import React from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";

import logo from "../../assets/icons/logo.png";
import analytics from "../../assets/icons/analytics.png";
import exchange from "../../assets/icons/exchange.png";
import wallet from "../../assets/icons/wallet.png";
import ico from "../../assets/icons/icoicon.png";
import settings from "../../assets/icons/settings.png";

export const SideMenu = () => {
  return (
    <div className="nav-wrapper">
      {/* logo wrapper */}
      <div className="logo">
        <div className="logo-icon-wrap">
          <img src={logo} alt="loading logo.." />
        </div>
        <div className="logo-title">
          <h4>Crypto</h4>
        </div>
      </div>

      {/* sidebar menu navigation*/}
      <div className="side-menu-nav">
        <ul>
          <li>
            <NavLink to="/">
              <div className="nav-item">
                <div className="menu-icon-wrap">
                  <img src={analytics} alt="nav-icon" />
                </div>
                <div className="menu-title">Analytics</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/exchange">
              <div className="nav-item">
                <div className="menu-icon-wrap">
                  <img src={exchange} alt="nav-icon" />
                </div>
                <div className="menu-title">Exchange</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet">
              <div className="nav-item">
                <div className="menu-icon-wrap">
                  <img src={wallet} alt="nav-icon" />
                </div>
                <div className="menu-title">Wallet</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ICO-list">
              <div className="nav-item">
                <div className="menu-icon-wrap">
                  <img src={ico} alt="nav-icon" />
                </div>
                <div className="menu-title">ICO List</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <div className="nav-item">
                <div className="menu-icon-wrap">
                  <img src={settings} alt="nav-icon" />
                </div>
                <div className="menu-title">Settings</div>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
