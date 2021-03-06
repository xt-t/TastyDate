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
import {
    checkIfUserHasVotedRestaurant,
    checkIfUserHasVotedTime,
    getLoggedUserName,
    getTastyDateItemById,
    updateTastyDateWithVoteRestaurantCard,
    updateTastyDateWithVoteTimeItem
} from "../../service/tastydate-api-service";
import Invitationlink from "../../components/result/Invitationlink";
import "./OverviewVoting.scss"
import {UserTimeVote} from "../../models/result/UserTimeVote";


export default function VoteResult() {

    const {tastyDateId}: { tastyDateId?: string } = useParams();
    const {token} = useContext(AuthContext)
    const [voteType, setVoteType] = useState(0);
    const [userName, setUserName] = useState<string>("");
    const [allowedForTimeVote, setAllowedForTimeVote] = useState<boolean>(true);
    const [tastyDateItemForVote, setTastyDateItemForVote] = useState<TastyDateItem>();
    //TimeVote
    const [checkDateTime, setCheckDateTime] = useState<boolean[]>([]);
    const [rowsUserTimeVote, setRowsUserTimeVote] = useState<UserTimeVote[]>([]);
    const [countersVotesPerTime, setCountersVotesPerTime] = useState<number[]>([]);
    //RestaurantVote
    const [checkRestaurants, setCheckRestaurants] = useState<boolean[]>([]);
    const [positiveVotesPerTime, setPositiveVotesPerTime] = useState<number[]>([]);
    const [negativeVotesPerTime, setNegativeVotesPerTime] = useState<number[]>([]);
    const [allowedToVoteRestaurant, setAllowedToVoteRestaurant] = useState<boolean>(true);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setVoteType(newValue);
    };

    console.log("time "+allowedForTimeVote);
    console.log("restaurant "+allowedToVoteRestaurant);

    const getTastyDateItem = () => {
        if (tastyDateId) {
            getTastyDateItemById(tastyDateId, token)
                .then((response) => {
                    setTastyDateItemForVote(response.data)
                    setCheckRestaurants(new Array(response.data.infoRestaurantData.length).fill(false));
                    setCheckDateTime(new Array(response.data.infoTastyDateTimes.length).fill(false));
                    if ((response.data.positiveVotingResultsForOneRestaurant !== null)&&
                        (response.data.negativeVotingResultsForOneRestaurant !== null)) {
                        setPositiveVotesPerTime(response.data.positiveVotingResultsForOneRestaurant);
                        setNegativeVotesPerTime(response.data.negativeVotingResultsForOneRestaurant);
                    }
                    if (response.data.votingResultsForOneDate !== null) {
                        setRowsUserTimeVote(response.data.timeVotes);
                        setCountersVotesPerTime(response.data.votingResultsForOneDate);
                    }
                })
        }
    }

    const getLoggedUser = () => {
        if (token) {
            getLoggedUserName(token)
                .then((response) => {
                    setUserName(response.data);
                })
        }
    }

    const checkIfUserVotedTime = () => {
        if (token && tastyDateId) {
            checkIfUserHasVotedTime(tastyDateId, token)
                .then((response) => {
                    setAllowedForTimeVote(response.data);
                })
        }
    }

    const checkIfUserVotedRestaurant = () => {
        if (token && tastyDateId) {
            checkIfUserHasVotedRestaurant(tastyDateId, token)
                .then((response) => {
                    setAllowedToVoteRestaurant(response.data);
                })
        }
    }

    const refreshWebsite = () => {
        getTastyDateItem();
        getLoggedUser();
        checkIfUserVotedTime();
        checkIfUserVotedRestaurant();
    }

    useEffect(() => {
        refreshWebsite();
        //eslint-disable-next-line
    }, [])

    //TimeVote
    const checkForDateTime = (index: number) => {
        const newChecked = [...checkDateTime];
        newChecked[index] = !newChecked[index];
        setCheckDateTime(newChecked);
    }
    //RestaurantVote
    const handleCheck = (index: number) => {
        const newChecked = [...checkRestaurants];
        newChecked[index] = !newChecked[index];
        setCheckRestaurants(newChecked);
    }

    const addUserRestaurantVote = () => {
        if (userName !== "" && tastyDateId) {
            setAllowedToVoteRestaurant(false);
            const restaurantVote = {
                displayedName: userName,
                votesPerRestaurantFromOneUser: checkRestaurants
            }
            updateTastyDateWithVoteRestaurantCard(tastyDateId, restaurantVote, token)
                .then((response) => {
                    setTastyDateItemForVote(response.data);
                    setPositiveVotesPerTime(response.data.positiveVotingResultsForOneRestaurant);
                    setNegativeVotesPerTime(response.data.negativeVotingResultsForOneRestaurant);
                })
                .catch((err) => {
                    console.error(err.message);
                })
        }
    }

    const addUserTimeVote = () => {
        if (userName !== "" && tastyDateId) {
            setAllowedForTimeVote(false);
            const timeVote = {
                displayedName: userName,
                votesPerDateTimeFromOneUser: checkDateTime
            }
            updateTastyDateWithVoteTimeItem(tastyDateId, timeVote, token)
                .then((response) => {
                    setTastyDateItemForVote(response.data);
                    setRowsUserTimeVote(response.data.timeVotes);
                    setCountersVotesPerTime(response.data.votingResultsForOneDate)
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
                            <div style={{
                                color: "#00458B",
                                marginBottom: "1.5rem",
                                marginTop: "-0.5rem"
                            }}>TastyDate: {tastyDateItemForVote.infoTastyDate.pickedTastyDateName}</div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <TextField label="Your voting name" variant="standard"
                                           value={userName || ""}
                                           onChange={(event) => {
                                               setUserName(event.target.value)
                                           }}
                                           InputProps={{readOnly: !allowedForTimeVote}}
                                           style={{marginTop: "-1rem", marginBottom: "1rem"}}/>
                                {(allowedForTimeVote) ?
                                    (
                                        <Button onClick={addUserTimeVote}
                                                style={{marginTop: "-0.5rem", marginBottom: "1rem"}}>Apply Vote</Button>
                                    )
                                    :
                                    (<></>)}
                            </div>
                            <VoteTimeTable tastyDateItemForVote={tastyDateItemForVote}
                                           checkDateTime={checkDateTime}
                                           rowsUserTimeVote={rowsUserTimeVote}
                                           countersVotesPerTime={countersVotesPerTime}
                                           checkForDateTime={checkForDateTime}
                                           allowedForTimeVote={allowedForTimeVote}
                            />
                        </TabPanel>
                        <TabPanel value={voteType} index={1}>
                            <div style={{
                                color: "#00458B",
                                marginBottom: "1.5rem",
                                marginTop: "-0.5rem"
                            }}>TastyDate: {tastyDateItemForVote.infoTastyDate.pickedTastyDateName}</div>
                            <div style={{display: "flex", justifyContent: "space-between"}}>

                                    <TextField label="Your voting name" variant="standard" value={userName || ""}
                                               onChange={(event) => {
                                                   setUserName(event.target.value)
                                               }}
                                               InputProps={{readOnly: !allowedForTimeVote}}
                                               style={{marginTop: "-1rem", marginBottom: "1rem"}}/>

                                {(allowedToVoteRestaurant) ?
                                    (
                                        <Button className="voteRestaurantButton" onClick={addUserRestaurantVote}
                                                style={{marginTop: "-0.5rem", marginBottom: "1rem"}}>Apply vote</Button>
                                    )
                                    :
                                    (<></>)}
                            </div>
                            <VoteRestaurantTable tastyDateItemForVote={tastyDateItemForVote}
                                                 checkRestaurants={checkRestaurants}
                                                 positiveVotesPerTime={positiveVotesPerTime}
                                                 negativeVotesPerTime={negativeVotesPerTime}
                                                 handleCheck={handleCheck}
                                                 allowedToVoteRestaurant={allowedToVoteRestaurant}/>
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




