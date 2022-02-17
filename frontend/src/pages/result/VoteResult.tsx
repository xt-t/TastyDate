import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DisplayMenus from "../../components/general/DisplayMenus";
import {TastyDateItem} from "../../models/result/TastyDateItem";
import VoteTimeTable from '../../components/result/VoteTimeTable';
import {TabPanel} from "./TabPanelFunctions";
import React, {useState} from "react";
import VoteRestaurantTable from "../../components/result/VoteRestaurantTable";
import {TextField} from "@mui/material";


interface VoteResultProps {
    transferSettingsItem: TastyDateItem
    setTransferSettingsItem: Function
}

export default function VoteResult({transferSettingsItem, setTransferSettingsItem}:VoteResultProps) {
    const [value, setValue] = useState(0);
    const [userName, setUserName] = useState<string>("");
    const [displayNameEntered, setDisplayNameEntered] = useState<boolean>(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>
                <DisplayMenus/>

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Vote Time"/>
                    <Tab label="Vote Restaurant"/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <TextField value={userName}
                           onChange={(event) => {
                               setUserName(event.target.value)
                           }}>Username</TextField>
                <VoteTimeTable transferSettingsItem={transferSettingsItem} setTransferSettingsItem={setTransferSettingsItem} userName={userName} setUserName={setUserName}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TextField value={userName}
                           onChange={(event) => {
                               setUserName(event.target.value)
                           }}>Username</TextField>
                <VoteRestaurantTable transferSettingsItem={transferSettingsItem} setTransferSettingsItem={setTransferSettingsItem} userName={userName}/>
            </TabPanel>
        </Box>
            </div>
        </div>
    );
}




