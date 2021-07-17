import React from "react";
import "./topHeader.css";

import bellIcon from "../../assets/icons/bell.png";
import userDP from "../../assets/icons/profilepicture.png";
import SearchBar from "../searchBar/SearchBar";

export default function TopHeader() {
  return (
    <div className="top-header-wrapper">
      <SearchBar />

      <div className="header-right">
        {/* bell notification icon */}
        <div className="header-notification">
          <div className="bell-icon-wrap">
            <img src={bellIcon} alt="bell icon.." />
          </div>
          <span className="notification-indication"></span>
        </div>

        {/* user profile picture */}
        <div className="user-profile">
          <img src={userDP} alt="profile icon.." />
        </div>
      </div>
    </div>
  );
}
