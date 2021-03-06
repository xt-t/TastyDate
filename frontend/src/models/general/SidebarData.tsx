import React from "react";
import AddIcon from '@mui/icons-material/Add';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BallotIcon from '@mui/icons-material/Ballot';
import HomeIcon from '@mui/icons-material/Home';
import "../../components/general/DisplayMenus.scss"

interface sidebarElement {
    title: string
    path: string
    icon: JSX.Element
    cName: string
}

export const SidebarData: sidebarElement[] = [
    {
        title: "Home",
        path: "/",
        icon: <HomeIcon/>,
        cName: "sidebarText"
    },
    {
        title: "Create TastyDate",
        path: "/createDate",
        icon: <AddIcon/>,
        cName: "sidebarText"
    },
    {
        title: "Restaurants",
        path: "/restaurants",
        icon: <RestaurantIcon/>,
        cName: "sidebarText"
    },
    {
        title: "Overview Vote",
        path: "/overview",
        icon: <BallotIcon/>,
        cName: "sidebarText"
    }
]