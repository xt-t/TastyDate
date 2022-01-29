import React, {useState} from 'react'
import {Link} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import {SidebarData} from "../../models/general/SidebarData"
import "./Sidebar.scss"

export default function Sidebar () {
    const [sidebarStatus, setsidebarStatus ] = useState(false);
    const showSidebar = () => setsidebarStatus(!sidebarStatus);

    return (
        <>
            <div className="horizontalbar">
                <Link to="#" className="icons-menu-close">
                        <MenuIcon onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebarStatus ? "sidebaractive" : "sidebar"}>
                <ul className="side-items" onClick={showSidebar}>
                    <li className="sidebar-toggle">
                        <Link to="#" className="icons-menu-close">
                            <CloseIcon></CloseIcon>
                        </Link>
                    </li>
                    {SidebarData.map((item,index)=> {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}