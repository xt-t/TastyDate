import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DisplayMenus from "../../components/general/DisplayMenus";
import VoteTimeTable from '../../components/result/VoteTimeTable';
import {TabPanel} from "./TabPanelFunctions";
import React, {useContext, useEffect, useState} from "react";
import VoteRestaurantTable from "../../components/result/VoteRestaurantTable";
import {TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import {TastyDateItem} from "../../models/result/TastyDateItem";
import {AuthContext} from "../../context/AuthProvider";
import {getTastyDateItemById} from "../../service/tastydate-api-service";
import Invitationlink from "../../components/result/Invitationlink";


export default function VoteResult() {

    const {tastyDateId}:{tastyDateId?:string} = useParams();

    const {token}=useContext(AuthContext)

    const [tastyDateItemForVote, setTastyDateItemForVote] = useState<TastyDateItem>();

    const getTastyDateItem = () => {
        if (tastyDateId) {
        getTastyDateItemById(tastyDateId, token)
            .then((response)=>setTastyDateItemForVote(response.data))
        }
    }

    useEffect(()=>{
        getTastyDateItem()
        //eslint-disable-next-line
    },[])


    const [voteType, setVoteType] = useState(0);
    const [userName, setUserName] = useState<string>("");
    const [checkIfNameConfirmed, setCheckIfNameConfirmed] = useState<boolean>(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setVoteType(newValue);
    };

    if (typeof tastyDateItemForVote === "object") {
    return (
        <div>
            <div>
                <DisplayMenus/>

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={voteType} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Vote Time"/>
                    <Tab label="Vote Restaurant"/>
                    <Tab label="Invitationlink"/>
                </Tabs>
            </Box>
            <TabPanel value={voteType} index={0}>
                <TextField label="Your voting name" variant="standard"
                           value={userName}
                           onChange={(event) => {
                               setUserName(event.target.value)}}
                               InputProps={{readOnly: checkIfNameConfirmed}}/>

                <VoteTimeTable tastyDateItemForVote={tastyDateItemForVote} setTastyDateItemForVote={setTastyDateItemForVote} userName={userName} setUserName={setUserName} setCheckIfNameConfirmed={setCheckIfNameConfirmed}/>
            </TabPanel>
            <TabPanel value={voteType} index={1}>
                <TextField label="Your voting name" variant="standard"  value={userName}
                           onChange={(event) => {
                               setUserName(event.target.value)}}
                               InputProps={{readOnly: checkIfNameConfirmed}}/>

                <VoteRestaurantTable tastyDateItemForVote={tastyDateItemForVote} setTastyDateItemForVote={setTastyDateItemForVote} userName={userName} setCheckIfNameConfirmed={setCheckIfNameConfirmed}/>
        </TabPanel>
            <TabPanel value={voteType} index={2}>
                <Invitationlink tastyDateId={tastyDateId}/>
            </TabPanel>
        </Box>
            </div>
        </div>
    );}
    else {return (<></>);}
}




