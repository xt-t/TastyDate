import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DisplayMenus from "../../components/general/DisplayMenus";
import {TastyDateItem} from "../../models/result/TastyDateItem";
import VoteTimeTable from '../../components/result/VoteTimeTable';
import {a11yProps, TabPanel} from "./ResultTab";


interface VoteResultProps {
    transferSettingsItem: TastyDateItem
    setTransferSettingsItem: Function
}

export default function VoteResult({transferSettingsItem, setTransferSettingsItem}:VoteResultProps) {
    const [value, setValue] = React.useState(0);


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
                    <Tab label="Vote Time" {...a11yProps(0)} />
                    <Tab label="Vote Restaurant" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <VoteTimeTable transferSettingsItem={transferSettingsItem} setTransferSettingsItem={setTransferSettingsItem}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/*<VoteRestaurantTable transferSettingsItem={transferSettingsItem} setTransferSettingsItem={setTransferSettingsItem} userName={userName} setUserName={setUserName}/>*/}
            </TabPanel>
        </Box>
            </div>
        </div>
    );
}




