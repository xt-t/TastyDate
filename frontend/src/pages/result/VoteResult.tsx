import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DisplayMenus from "../../components/general/DisplayMenus";
import {TastyDateItem} from "../../models/result/TastyDateItem";
import VoteTimeTable from '../../components/result/VoteTimeTable';
import VoteRestaurantTable from '../../components/result/VoteRestaurantTable';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
                <VoteRestaurantTable transferSettingsItem={transferSettingsItem} />
            </TabPanel>
        </Box>
            </div>
        </div>
    );
}




