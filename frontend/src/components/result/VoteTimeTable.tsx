import {Box, CardContent} from '@mui/material';
import Card from '@mui/material/Card';
import "./VoteResult.scss"
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {TastyDateItem} from "../../models/result/TastyDateItem";
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import {UserTimeVote} from "../../models/result/UserTimeVote";


interface VoteTimeTableProps {
    tastyDateItemForVote: TastyDateItem
    checkDateTime: boolean[]
    rowsUserTimeVote: UserTimeVote[]
    countersVotesPerTime: number[]
    checkForDateTime: Function
    allowedForTimeVote: boolean
}

export default function VoteTimeTable({
                                          tastyDateItemForVote,
                                          checkDateTime,
                                          rowsUserTimeVote,
                                          countersVotesPerTime,
                                          checkForDateTime,
                                          allowedForTimeVote
                                      }: VoteTimeTableProps) {

    return (
        <Card style={{boxShadow: "0 0.1rem 0.3rem rgba(0, 0, 0, 0.5)"}}>
            <CardContent className="cardShadow">

                <div className="grid-container" style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${tastyDateItemForVote.infoTastyDateTimes.length + 1}, 6rem)`
                }}>

                    <div className="gridItemWithoutStyling"><PersonIcon/> User</div>

                    {tastyDateItemForVote.infoTastyDateTimes.map((itemTime, index) => (
                        <div key={index} className="gridHeader">
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





                    {(allowedForTimeVote) ?
                        (<React.Fragment>
                            <Box className="gridUserVoteRow"
                                 style={{gridColumnStart: "1", gridRowStart: `${rowsUserTimeVote.length + 2}`}}>
                                Enter your vote<br/> in this line: </Box>
                            {tastyDateItemForVote.infoTastyDateTimes.map((itemTime, index) => (
                                <div className="gridUserVoteRow" key={index} style={{gridRowStart: `${rowsUserTimeVote.length + 2}`}}>
                                    <Checkbox
                                        checked={checkDateTime[index] || false}
                                        onChange={() => checkForDateTime(index)}
                                    />
                                </div>
                            ))
                            }
                        </React.Fragment>)
                        :
                        (
                            <React.Fragment>
                                {rowsUserTimeVote.map((timeVote, index) => (
                                    <React.Fragment key={index}>

                                        <div className="gridItemWithoutStyling">
                                            {timeVote.displayedName}
                                        </div>

                                        {timeVote.votesPerDateTimeFromOneUser.map((voteTime, innerindex) => (
                                            <React.Fragment key={innerindex}>
                                                {voteTime ?
                                                    (<div className="gridPositiveVote"><CheckIcon></CheckIcon></div>)
                                                    :
                                                    (<div className="gridNegativeVote"><CloseIcon></CloseIcon></div>)
                                                }
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                ))}
                                <div className="voteSummary">Total:</div>

                                {countersVotesPerTime.map((counterVotesPerTime, index) => (

                                    <div className="voteSummary" key={index}>{counterVotesPerTime}</div>

                                ))}

                            </React.Fragment>

                        )

                    }
                </div>

            </CardContent>
        </Card>
    );
}