import React from 'react';
import './layout.css';
import { MainContent, SidebarMenu } from "../../components";


function Layout() {
    return (
        <div className="layout">
            <SidebarMenu/>
            <MainContent/>
        </div>
    )
}

export default Layout
