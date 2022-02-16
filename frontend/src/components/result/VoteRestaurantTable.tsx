import * as React from 'react';
import {TastyDateItem} from "../../models/result/TastyDateItem";
import "./Tables.scss"
import image from "./dummypic.jpg";
import Checkbox from "@mui/material/Checkbox";
import {useContext, useState} from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Box, Button, Rating, styled, TextField} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
    updateTastyDateWithVoteRestaurantItem,
} from "../../service/tastydate-api-service";
import {AuthContext} from "../../context/AuthProvider";

interface VoteRestaurantTableProps {
    transferSettingsItem: TastyDateItem
    setTransferSettingsItem: Function
    userName: string
    setUserName: Function
    tempName: string
    setTempName: Function
}

export default function VoteRestaurantTable({transferSettingsItem, setTransferSettingsItem, userName, setUserName, tempName, setTempName}: VoteRestaurantTableProps) {

    const {token} = useContext(AuthContext);

    const [checkRestaurants, setCheckRestaurants] = useState<boolean[]>(Array(transferSettingsItem.infoRestaurantData.length).fill(false));
    const [positiveVotesPerTime, setPositiveVotesPerTime] = useState<number[]>([]);
    const [negativeVotesPerTime, setnegativeVotesPerTime] = useState<number[]>([]);


    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: 'hsl(222, 100%, 50%)',
        },
        '& .MuiRating-iconHover': {
            color: 'hsl(222, 100%, 41%)',
        },
    });

    const handleChange = (index: number) => {
        const newChecked = [...checkRestaurants];
        newChecked[index] = !newChecked[index];
        setCheckRestaurants(newChecked);
    }

    const addUserVote = () => {
        if (tempName !== "") {
            setUserName(tempName);
            const tastyDateId = transferSettingsItem.tastyDateId;
            const restaurantVote = {
                displayedName: userName,
                votesPerRestaurantFromOneUser: checkRestaurants
            }
            updateTastyDateWithVoteRestaurantItem(tastyDateId, restaurantVote, token)
                .then((response) => {
                    setTransferSettingsItem(response.data);
                    console.log(response.data)
                    setPositiveVotesPerTime(response.data.positiveVotingResultsForOneRestaurant);
                    setnegativeVotesPerTime(response.data.negativeVotingResultsForOneRestaurant)
                })
                .catch((err) => {
                    console.error(err.message);
                })
        }
    }

    return (
        <body>

            <div className="container">
                {transferSettingsItem.infoRestaurantData.map((restaurant,index) => (
                    <React.Fragment>
                <div className="resultcard">
                    <div className="imgBx">
                        <img src={image} alt="A pic would be nicer" className="picture"></img>
                    </div>
                    <h3>{restaurant.pickedRestaurantName}</h3>
                    <ArrowDropDownIcon className="arrow"/>
                    <div className="content">
                        <p>
                            {restaurant.pickedCategory}
                        </p>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                        <Rating name="read-only" value={restaurant.pickedRating} readOnly />
                        </Box>
                            <Box
                                sx={{
                                    '& > legend': {mt: 2},
                                }}
                            >
                                <StyledRating
                                    name="read-only"
                                    readOnly
                                    value={restaurant.pickedPrice}
                                    precision={0.5}
                                    max={3}
                                    icon={<EuroIcon fontSize="inherit"/>}
                                    emptyIcon={<EuroIcon fontSize="inherit"/>}
                                />
                            </Box>
                        <p>
                            {restaurant.pickedPostcode} {restaurant.pickedCity}
                        </p>
                    </div>
                </div>
                <div className="checkboxAndResults">
                <Checkbox
                    checked={checkRestaurants[index]}
                    onChange={(event) => handleChange(index)}
                    inputProps={{'aria-label': 'controlled'}}
                />
                    {(positiveVotesPerTime.length !==0) ?
                        (
                            <div>
                                <CloseIcon></CloseIcon>{negativeVotesPerTime[index]} <CheckIcon></CheckIcon>{positiveVotesPerTime[index]}
                            </div>
                        )
                        :
                        (<></>)
                    }
                </div>
                    </React.Fragment>
                ))}
            </div>
            <div className="applyRestaurantVote">
                {(userName === "")? (
            <TextField value={tempName || ""}
                       onChange={(event) => {
                           setTempName(event.target.value)
                       }}>Username</TextField>
                    )
                    :
                    (<span>{userName}</span>)}
            <Button className="voteRestaurantButton" onClick={addUserVote}>Apply vote</Button>
            </div>
            </body>
    )
}