import {Box, Button, CardContent} from '@mui/material';
import Card from '@mui/material/Card';
import "./Tables.scss"
import Checkbox from '@mui/material/Checkbox';
import {AuthContext} from "../../context/AuthProvider";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {TastyDateItem} from "../../models/result/TastyDateItem";
import {UserTimeVote} from "../../models/result/UserTimeVote";
import React, {useContext, useState} from 'react';
import {updateTastyDateWithVoteTimeItem} from "../../service/tastydate-api-service";


interface VoteTimeTableProps {
    tastyDateItemForVote: TastyDateItem
    setTastyDateItemForVote: Function
    userName: string
    setUserName: Function
    setDisplayNameEntered: Function
}

export default function VoteTimeTable({tastyDateItemForVote, setTastyDateItemForVote, userName, setDisplayNameEntered}: VoteTimeTableProps) {

    const {token} = useContext(AuthContext);
    const [checkDateTime, setCheckDateTime] = useState<boolean[]>(Array(tastyDateItemForVote.infoTastyDateTimes.length).fill(false));
    const [rowsUserTimeVote, setRowsUserTimeVote] = useState<UserTimeVote[]>([]);
    const [countersVotesPerTime, setCountersVotesPerTime] = useState<number[]>([]);

    const checkForDateTime = (index: number) => {
        const newChecked = [...checkDateTime];
        newChecked[index] = !newChecked[index];
        setCheckDateTime(newChecked);
    }

    const addUserVote = () => {
        if (userName !== "") {
            setDisplayNameEntered(true);
            const tastyDateId = tastyDateItemForVote.tastyDateId;
            const timeVote = {
                displayedName: userName,
                votesPerDateTimeFromOneUser: checkDateTime
            }
            updateTastyDateWithVoteTimeItem(tastyDateId, timeVote, token)
                .then((response) => {
                    setTastyDateItemForVote(response.data);
                    setRowsUserTimeVote(response.data.timeVotes);
                    console.log(rowsUserTimeVote)
                    setCountersVotesPerTime(response.data.votingResultsForOneDate)
                })
                .catch((err) => {
                    console.error(err.message);
                })
        }
    }

    return (
            <Card>
                <CardContent>
                    {/*Description*/}

                    <div>{tastyDateItemForVote.infoTastyDate.pickedTastyDateName} {tastyDateItemForVote.infoTastyDate.pickedLocation} {tastyDateItemForVote.infoTastyDate.pickedChosenDisplayName}</div>
                    {/*TableHeader*/}
                    <div className="grid-container" style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${tastyDateItemForVote.infoTastyDateTimes.length + 2}, 1fr)`
                    }}>
                        <div className="grid-item"></div>

                        {tastyDateItemForVote.infoTastyDateTimes.map((itemTime, index) => (
                            <div key={index} className="grid-item">
                                <div className="th-firstrow">
                                    {itemTime.pickedDate}
                                </div>
                                <div className="th-secondrow">
                                    {itemTime.pickedStart}
                                    <span> - </span>
                                    {itemTime.pickedEnd}
                                </div>
                            </div>
                        ))
                        }
                        <div className="grid-item"></div>


                        {/*//VoteOneUserPerRow*/}
                        {rowsUserTimeVote.map((timeVote, index) => (
                            <React.Fragment key={index}>

                                <div>
                                    {timeVote.displayedName}
                                </div>


                                {timeVote.votesPerDateTimeFromOneUser.map((voteTime, innerindex) => (
                                    <React.Fragment key={innerindex}>
                                        {voteTime ?
                                            (<div><CheckIcon></CheckIcon></div>)
                                            :
                                            (<div><CloseIcon></CloseIcon></div>)
                                        }
                                    </React.Fragment>
                                ))}
                                <div className="grid-item"></div>

                            </React.Fragment>

                        ))}

                        {/*VoteResult - different cases: show/ don't show resultline*/}
                        {(countersVotesPerTime.length !== 0) ?
                            (
                                <React.Fragment>
                                    <div></div>
                                    {countersVotesPerTime.map((counterVotesPerTime, index) => (

                                        <div key={index}>{counterVotesPerTime}</div>

                                    ))}
                                    <div></div>


                                    <Box style={{
                                                   gridColumnStart: "1",
                                                   gridRowStart: `${rowsUserTimeVote.length + 3}`
                                               }}
                                    >Enter your vote:</Box>
                                </React.Fragment>

                            )
                            :
                            (<React.Fragment>
                                <Box style={{gridColumnStart: "1", gridRowStart: `${rowsUserTimeVote.length + 2}`}}>
                                    Enter your vote: </Box></React.Fragment>)

                        }

                        {/*User Input*/}
                        {tastyDateItemForVote.infoTastyDateTimes.map((itemTime, index) => (
                            <div key={index}>
                                <Checkbox
                                    checked={checkDateTime[index]}
                                    onChange={(event) => checkForDateTime(index)}
                                    inputProps={{'aria-label': 'controlled'}}
                                />
                            </div>
                        ))
                        }
                        <Button onClick={addUserVote}>Add</Button>
                    </div>

                </CardContent>
            </Card>
    );
}