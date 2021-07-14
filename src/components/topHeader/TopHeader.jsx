import React from 'react';
import './topHeader.css';

import searchIcon from '../../assets/icons/search.png';
import bellIcon from '../../assets/icons/bell.png';
import userDP from '../../assets/icons/profilepicture.png';

export default function TopHeader() {
    return (
        <div className="top-header-wrapper">
            <form className="search-form">
                <input type="text" placeholder="Search"/>
                <div className="search-icon-wrap">
                    <img src={searchIcon} alt="search icon.." />
                </div>
            </form>

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
    )
}
