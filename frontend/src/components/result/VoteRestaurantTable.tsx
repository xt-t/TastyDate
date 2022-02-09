import {Button, CardContent, TextField} from '@mui/material';
import Card from '@mui/material/Card';
import {DataCompleteDateInfos, transferUserTimeVote, UserTimeVote} from "../../service/tastydate-api-service";
import "./Tables.scss"
import Checkbox from '@mui/material/Checkbox';
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthProvider";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

interface VoteRestaurantTableProps {
    transferSettingsItem: DataCompleteDateInfos
}

export default function VoteRestaurantTable({transferSettingsItem}: VoteRestaurantTableProps) {

    const {token} = useContext(AuthContext);

    const [userName, setUserName] = useState<string>("");
        const [checked, setChecked] = useState<boolean[]>([false]);

        const [rowUserTimeVote, setRowUserTimeVote] = useState<UserTimeVote[]>([]);

        const handleChange = (index: number) => {
            const newChecked=[...checked];
            newChecked[index]=!newChecked[index];
            setChecked(newChecked);
            }

            const addUserVote = () => {
                if (userName !== "") {
                    const newUserVote = {
                        displayedName: userName,
                        votedTimes: checked
                    }
                    transferUserTimeVote(newUserVote, token)
                        .then((response) => {
                            setRowUserTimeVote([...rowUserTimeVote, response.data])
                        })
                        .catch((err) => {
                            console.error(err.message);
                        })
                }
            }

            if (rowUserTimeVote.length === 0) {
    return (
        <div>
            <Card>
                <CardContent>
                    <div>{transferSettingsItem.infoDate.pickedTastyDateName} {transferSettingsItem.infoDate.pickedLocation} {transferSettingsItem.infoDate.pickedChosenDisplayName}</div>

                    <div className="grid-container" style={{display: "grid", gridTemplateColumns: `repeat(${transferSettingsItem.infoDateTimes.length+2}, 1fr)`}}>
                        <div className="grid-item"></div>

                        {transferSettingsItem.infoDateTimes.map((itemTime, index) => (
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
                        <TextField className="userName" value={userName||""}
                                   onChange={(event) => {
                                       setUserName(event.target.value)}}>Username</TextField>


                            {transferSettingsItem.infoDateTimes.map((itemTime, index) => (
                                <div>
                                <Checkbox
                                    checked={checked[index]|| false}
                                    onChange={(event)=>handleChange(index)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                />
                                </div>
                            ))
                        }
                        <Button onClick={addUserVote}>Add</Button>
                         </div>

                </CardContent>
            </Card>
        </div>
    );
            }
            else {
                return(
                    <div>
                        <Card>
                            <CardContent>
                                <div>{transferSettingsItem.infoDate.pickedTastyDateName} {transferSettingsItem.infoDate.pickedLocation} {transferSettingsItem.infoDate.pickedChosenDisplayName}</div>

                                <div className="grid-container" style={{display: "grid", gridTemplateColumns: `repeat(${transferSettingsItem.infoDateTimes.length+2}, 1fr)`}}>
                                    <div className="grid-item"></div>

                                    {transferSettingsItem.infoDateTimes.map((itemTime, index) => (
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

                                    {rowUserTimeVote.map((timeVote, index) => (
                                        <React.Fragment>

                                            <div>
                                            {timeVote.displayedName}
                                        </div>


                                            {timeVote.votedTimes.map((voteTime, index) => (
                                                <React.Fragment>
                                            {voteTime?
                                                (<div><CheckIcon></CheckIcon></div>)
                                                :
                                                (<div><CloseIcon></CloseIcon></div>)
                                            }
                                                </React.Fragment>
                                            ))}
                                            <div className="grid-item"></div>
                                            </React.Fragment>

                                    ))}


                                    <TextField value={userName||""}
                                               onChange={(event) => {
                                                   setUserName(event.target.value)}}
                                               style={{gridColumnStart:"1",gridRowStart: `${rowUserTimeVote.length+2}`}}
                                    >Username</TextField>


                                    {transferSettingsItem.infoDateTimes.map((itemTime, index) => (
                                        <div>
                                            <Checkbox
                                                checked={checked[index]|| false}
                                                onChange={(event)=>handleChange(index)}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                                        </div>
                                    ))
                                    }
                                    <Button onClick={addUserVote}>Add</Button>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                );}
}

