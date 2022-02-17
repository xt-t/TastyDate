import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DisplayMenus from "../../components/general/DisplayMenus";
import {TastyDateItem} from "../../models/result/TastyDateItem";
import VoteTimeTable from '../../components/result/VoteTimeTable';
import {TabPanel} from "./TabPanelFunctions";
import {useState} from "react";
import VoteRestaurantTable from "../../components/result/VoteRestaurantTable";


interface VoteResultProps {
    transferSettingsItem: TastyDateItem
    setTransferSettingsItem: Function
}

export default function VoteResult({transferSettingsItem, setTransferSettingsItem}:VoteResultProps) {
    const [value, setValue] = React.useState(0);
    const [userName, setUserName] = useState<string>("");
    const [tempName, setTempName] = useState<string>("");

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
                <VoteTimeTable transferSettingsItem={transferSettingsItem} setTransferSettingsItem={setTransferSettingsItem} userName={userName} setUserName={setUserName} tempName={tempName} setTempName={setTempName}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <VoteRestaurantTable transferSettingsItem={transferSettingsItem} setTransferSettingsItem={setTransferSettingsItem} userName={userName} setUserName={setUserName} tempName={tempName} setTempName={setTempName}/>
            </TabPanel>
        </Box>
            </div>
        </div>
    );
}




