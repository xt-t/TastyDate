import {Button, CardContent, TextField} from '@mui/material';
import Card from '@mui/material/Card';
import "./Tables.scss"
import Checkbox from '@mui/material/Checkbox';
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthProvider";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {TastyDateItem} from "../../models/result/TastyDateItem";
import {UserTimeVote} from "../../models/result/UserTimeVote";
import React from 'react';
import {updateTastyDateWithVoteTimeItem} from "../../service/tastydate-api-service";


interface VoteTimeTableProps {
    transferSettingsItem: TastyDateItem
    setTransferSettingsItem: Function
}

export default function VoteTimeTable({transferSettingsItem, setTransferSettingsItem}: VoteTimeTableProps) {


    const {token} = useContext(AuthContext);
    console.log(transferSettingsItem);
    const [checkDateTime, setCheckDateTime] = useState<boolean[]>(Array(transferSettingsItem.infoTastyDateTimes.length).fill(false));
    const [userName, setUserName] = useState<string>("");
    const [rowsUserTimeVote, setRowsUserTimeVote] = useState<UserTimeVote[]>([]);
    const [countersVotesPerTime, setCountersVotesPerTime] = useState<number[]>([]);

    const checkForDateTime = (index: number) => {
        const newChecked = [...checkDateTime];
        newChecked[index] = !newChecked[index];
        setCheckDateTime(newChecked);
    }

    console.log(checkDateTime);

    const addUserVote = () => {
        if (userName !== "") {
            const tastyDateId = transferSettingsItem.tastyDateId;
            const timeVote = {
                displayedName: userName,
                votesPerDateTimeFromOneUser: checkDateTime
            }
            updateTastyDateWithVoteTimeItem(tastyDateId, timeVote, token)
                .then((response) => {
                    setTransferSettingsItem(response.data);
                    console.log(transferSettingsItem);
                    setRowsUserTimeVote(response.data.timeVotes);
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

                    <div>{transferSettingsItem.infoTastyDate.pickedTastyDateName} {transferSettingsItem.infoTastyDate.pickedLocation} {transferSettingsItem.infoTastyDate.pickedChosenDisplayName}</div>
                    {/*TableHeader*/}
                    <div className="grid-container" style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${transferSettingsItem.infoTastyDateTimes.length + 2}, 1fr)`
                    }}>
                        <div className="grid-item"></div>

                        {transferSettingsItem.infoTastyDateTimes.map((itemTime, index) => (
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


                                {timeVote.votesPerDateTimeFromOneUser.map((voteTime, index) => (
                                    <React.Fragment key={index}>
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


                                    <TextField value={userName || ""}
                                               onChange={(event) => {
                                                   setUserName(event.target.value)
                                               }}
                                               style={{
                                                   gridColumnStart: "1",
                                                   gridRowStart: `${rowsUserTimeVote.length + 3}`
                                               }}
                                    >Username</TextField>
                                </React.Fragment>

                            )

                            :
                            (<React.Fragment>
                                <TextField value={userName || ""}
                                           onChange={(event) => {
                                               setUserName(event.target.value)
                                           }}
                                           style={{
                                               gridColumnStart: "1",
                                               gridRowStart: `${rowsUserTimeVote.length + 2}`
                                           }}
                                >Username</TextField></React.Fragment>)

                        }

                        {/*User Input*/}
                        {transferSettingsItem.infoTastyDateTimes.map((itemTime, index) => (
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