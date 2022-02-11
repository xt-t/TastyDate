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

interface VoteRestaurantTableProps {
    transferSettingsItem: TastyDateItem
    setTransferSettingsItem: Function
}

export default function VoteRestaurantTable({transferSettingsItem, setTransferSettingsItem}: VoteRestaurantTableProps) {

    const {token} = useContext(AuthContext);

    const [userName, setUserName] = useState<string>("");
    const [checked, setChecked] = useState<boolean[]>(Array(transferSettingsItem.infoDateTimes.length).fill(false));

    const [rowsUserTimeVote, setRowsUserTimeVote] = useState<UserTimeVote[]>([]);
    const [countersVotesPerTime, setCountersVotesPerTime] = useState<number[]>([]); //zuweisen?

    const handleChange = (index: number) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    }

    console.log(checked);

    const addUserVote = () => {
        if (userName !== "") {
            const tastyDateId = transferSettingsItem.tastyDateId;
            const timeVote = {
                displayedName: userName,
                votedTimes: checked
            }
            updateTastyDateWithVoteTimeItem(tastyDateId, timeVote, token)
                .then((response) => {
                    setTransferSettingsItem(response.data);
                    setRowsUserTimeVote(response.data.timeVotes);
                    setCountersVotesPerTime(response.data.voteResults)
                })
                .catch((err) => {
                    console.error(err.message);
                })
        }
    }


        return (
            <div>
                <Card>
                    <CardContent>
                        <div>{transferSettingsItem.infoDate.pickedTastyDateName} {transferSettingsItem.infoDate.pickedLocation} {transferSettingsItem.infoDate.pickedChosenDisplayName}</div>

                        <div className="grid-container" style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${transferSettingsItem.infoDateTimes.length + 2}, 1fr)`
                        }}>
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

                            {rowsUserTimeVote.map((timeVote, index) => (
                                <React.Fragment>

                                    <div>
                                        {timeVote.displayedName}
                                    </div>


                                    {timeVote.votedTimes.map((voteTime, index) => (
                                        <React.Fragment>
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

                            {(countersVotesPerTime.length!==0) ?
                                (
                            <React.Fragment>
                                <div ></div>
                                {countersVotesPerTime.map((counterVotesPerTime,index) => (

                                <div key={index}>{counterVotesPerTime}</div>

                            ))}


                                <div ></div>
                                <TextField value={userName || ""}
                                           onChange={(event) => {
                                               setUserName(event.target.value)
                                           }}
                                           style={{gridColumnStart: "1", gridRowStart: `${rowsUserTimeVote.length + 3}`}}
                                >Username</TextField>
                            </React.Fragment>

                                )

                                :
                                (<React.Fragment>
                                    <TextField value={userName || ""}
                                               onChange={(event) => {
                                                   setUserName(event.target.value)
                                               }}
                                               style={{gridColumnStart: "1", gridRowStart: `${rowsUserTimeVote.length + 2}`}}
                                    >Username</TextField></React.Fragment>)

                            }



                            {transferSettingsItem.infoDateTimes.map((itemTime, index) => (
                                <div>
                                    <Checkbox
                                        checked={checked[index]}
                                        onChange={(event) => handleChange(index)}
                                        inputProps={{'aria-label': 'controlled'}}
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

// if (rowsUserTimeVote.length === 0) {
//     return (
//         <div>
//             <Card>
//                 <CardContent>
//                     <div>{transferSettingsItem.infoDate.pickedTastyDateName} {transferSettingsItem.infoDate.pickedLocation} {transferSettingsItem.infoDate.pickedChosenDisplayName}</div>
//
//                     <div className="grid-container" style={{
//                         display: "grid",
//                         gridTemplateColumns: `repeat(${transferSettingsItem.infoDateTimes.length + 2}, 1fr)`
//                     }}>
//                         <div className="grid-item"></div>
//
//                         {transferSettingsItem.infoDateTimes.map((itemTime, index) => (
//                             <div key={index} className="grid-item">
//                                 <div className="th-firstrow">
//                                     {itemTime.pickedDate}
//                                 </div>
//                                 <div className="th-secondrow">
//                                     {itemTime.pickedStart}
//                                     <span> - </span>
//                                     {itemTime.pickedEnd}
//                                 </div>
//                             </div>
//                         ))
//                         }
//
//                         <div className="grid-item"></div>
//                         <TextField className="userName" value={userName || ""}
//                                    onChange={(event) => {
//                                        setUserName(event.target.value)
//                                    }}>Username</TextField>
//
//
//                         {transferSettingsItem.infoDateTimes.map((itemTime, index) => (
//                             <div>
//                                 <Checkbox
//                                     checked={checked[index]}
//                                     onChange={(event) => handleChange(index)}
//                                     inputProps={{'aria-label': 'controlled'}}
//                                 />
//                             </div>
//                         ))
//                         }
//                         <Button onClick={addUserVote}>Add</Button>
//                     </div>
//
//                 </CardContent>
//             </Card>
//         </div>
//     );
// } else {