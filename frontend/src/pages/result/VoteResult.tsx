import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DisplayMenus from "../../components/general/DisplayMenus";
import VoteTimeTable from '../../components/result/VoteTimeTable';
import {TabPanel} from "./TabPanelFunctions";
import React, {useContext, useEffect, useState} from "react";
import VoteRestaurantTable from "../../components/result/VoteRestaurantTable";
import {Button, TextField} from "@mui/material";
import {useParams} from "react-router-dom";
import {TastyDateItem} from "../../models/result/TastyDateItem";
import {AuthContext} from "../../context/AuthProvider";
import {getTastyDateItemById, updateTastyDateWithVoteRestaurantCard} from "../../service/tastydate-api-service";
import Invitationlink from "../../components/result/Invitationlink";
import "./OverviewVoting.scss"


export default function VoteResult() {

    const {tastyDateId}: { tastyDateId?: string } = useParams();
    const {token} = useContext(AuthContext)
    const [voteType, setVoteType] = useState(0);
    const [userName, setUserName] = useState<string>("");
    const [checkIfNameConfirmed, setCheckIfNameConfirmed] = useState<boolean>(false);
    const [tastyDateItemForVote, setTastyDateItemForVote] = useState<TastyDateItem>();
    const [checkRestaurants, setCheckRestaurants] = useState<boolean[]>([]);
    const [positiveVotesPerTime, setPositiveVotesPerTime] = useState<number[]>([]);
    const [negativeVotesPerTime, setNegativeVotesPerTime] = useState<number[]>([]);

    const getTastyDateItem = () => {
        if (tastyDateId) {
            getTastyDateItemById(tastyDateId, token)
                .then((response) => {
                    setTastyDateItemForVote(response.data)
                    setCheckRestaurants(new Array(response.data.infoRestaurantData.length).fill(false))
                })
        }}

        useEffect(() => {
            getTastyDateItem()
            //eslint-disable-next-line
        }, [])


        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setVoteType(newValue);
        };

        const handleCheck = (index: number) => {
            const newChecked = [...checkRestaurants];
            newChecked[index] = !newChecked[index];
            setCheckRestaurants(newChecked);
        }

        const addUserVote = () => {
            if (userName !== "" && tastyDateItemForVote && tastyDateId) {
                setCheckIfNameConfirmed(true);
                const restaurantVote = {
                    displayedName: userName,
                    votesPerRestaurantFromOneUser: checkRestaurants
                }
                updateTastyDateWithVoteRestaurantCard(tastyDateId, restaurantVote, token)
                    .then((response) => {
                        setTastyDateItemForVote(response.data);
                        setPositiveVotesPerTime(response.data.positiveVotingResultsForOneRestaurant);
                        setNegativeVotesPerTime(response.data.negativeVotingResultsForOneRestaurant)
                    })
                    .catch((err) => {
                        console.error(err.message);
                    })
            }
        }

        if (tastyDateItemForVote) {
            return (
                <div>
                    <div>
                        <DisplayMenus/>

                        <Box sx={{width: '100%'}}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <Tabs value={voteType} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Timevote"/>
                                    <Tab label="Restaurantvote"/>
                                    <Tab label="Invitation"/>
                                </Tabs>
                            </Box>
                            <TabPanel value={voteType} index={0}>
                                <TextField label="Your voting name" variant="standard"
                                           value={userName}
                                           onChange={(event) => {
                                               setUserName(event.target.value)
                                           }}
                                           InputProps={{readOnly: checkIfNameConfirmed}}
                                           style={{marginTop: "-1rem", marginBottom: "1rem"}}/>

                                <VoteTimeTable tastyDateItemForVote={tastyDateItemForVote}
                                               setTastyDateItemForVote={setTastyDateItemForVote} userName={userName}
                                               setUserName={setUserName}
                                               setCheckIfNameConfirmed={setCheckIfNameConfirmed}/>
                            </TabPanel>
                            <TabPanel value={voteType} index={1}>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <TextField label="Your voting name" variant="standard" value={userName}
                                               onChange={(event) => {
                                                   setUserName(event.target.value)
                                               }}
                                               InputProps={{readOnly: checkIfNameConfirmed}}
                                               style={{marginTop: "-1rem", marginBottom: "1rem"}}/>

                                    <Button className="voteRestaurantButton" onClick={addUserVote} style={{marginTop: "-0.5rem", marginBottom: "1rem"}}>Apply vote</Button>
                                </div>
                                <VoteRestaurantTable tastyDateItemForVote={tastyDateItemForVote}
                                                     checkRestaurants={checkRestaurants}
                                                     positiveVotesPerTime={positiveVotesPerTime}
                                                     negativeVotesPerTime={negativeVotesPerTime}
                                                     handleCheck={handleCheck}/>
                            </TabPanel>
                            <TabPanel value={voteType} index={2}>
                                <Invitationlink tastyDateId={tastyDateId}/>
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            );
        } else {
            return (<></>);
        }
    }




