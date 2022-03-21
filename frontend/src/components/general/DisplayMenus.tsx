import * as React from 'react';
import {useState} from "react";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

export default function DisplayMenus() {
    const [sidebarStatus, setsidebarStatus] = useState(false);
    const showSidebar = () => setsidebarStatus(!sidebarStatus);

    return (
        <div>
            <NavigationBar showSidebar={showSidebar}/>
            <Sidebar sidebarStatus={sidebarStatus} showSidebar={showSidebar}/>
        </div>
    )
}