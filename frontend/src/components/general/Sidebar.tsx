import React from 'react'
import {Link} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import {SidebarData} from "../../models/general/SidebarData"
import "./Sidebar.scss"

interface SidebarProps {
    sidebarStatus: boolean
    showSidebar: () => void
}
export default function Sidebar ({sidebarStatus, showSidebar}:SidebarProps) {

    return (
        <>
            <nav className={sidebarStatus ? "sidebaractive" : "sidebarinactive"}>
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