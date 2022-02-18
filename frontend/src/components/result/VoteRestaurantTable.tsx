import * as React from 'react';
import {TastyDateItem} from "../../models/result/TastyDateItem";
import "./Tables.scss"
import image from "./dummypic.jpg";
import Checkbox from "@mui/material/Checkbox";
import {useContext, useState} from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Box, Button, Rating, styled} from "@mui/material";
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
    setDisplayNameEntered: Function
}

export default function VoteRestaurantTable({transferSettingsItem, setTransferSettingsItem, userName, setDisplayNameEntered}: VoteRestaurantTableProps) {

    const {token} = useContext(AuthContext);

    const [checkRestaurants, setCheckRestaurants] = useState<boolean[]>(Array(transferSettingsItem.infoRestaurantData.length).fill(false));
    const [positiveVotesPerTime, setPositiveVotesPerTime] = useState<number[]>([]);
    const [negativeVotesPerTime, setNegativeVotesPerTime] = useState<number[]>([]);


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
        if (userName !== "") {
            setDisplayNameEntered(true);
            const tastyDateId = transferSettingsItem.tastyDateId;
            const restaurantVote = {
                displayedName: userName,
                votesPerRestaurantFromOneUser: checkRestaurants
            }
            updateTastyDateWithVoteRestaurantItem(tastyDateId, restaurantVote, token)
                .then((response) => {
                    setTransferSettingsItem(response.data);
                    setPositiveVotesPerTime(response.data.positiveVotingResultsForOneRestaurant);
                    setNegativeVotesPerTime(response.data.negativeVotingResultsForOneRestaurant)
                })
                .catch((err) => {
                    console.error(err.message);
                })
        }
    }

    return (
        <div>
            <div className="container">
                {transferSettingsItem.infoRestaurantData.map((restaurant,index) => (
                    <React.Fragment key={index}>
                <div className="resultcard">
                    <Box className="imgBx">
                        <img src={image} alt="A pic would be nicer" className="picture"></img>
                    </Box>
                    <h3>{restaurant.pickedRestaurantName}</h3>
                    <ArrowDropDownIcon className="arrow"/>
                    <Box className="content">
                        <Box>
                            {restaurant.pickedCategory}
                        </Box>
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
                        <Box>
                            {restaurant.pickedPostcode} {restaurant.pickedCity}
                        </Box>
                    </Box>
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
                                <CloseIcon/>{negativeVotesPerTime[index]} <CheckIcon/>{positiveVotesPerTime[index]}
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
            <Button className="voteRestaurantButton" onClick={addUserVote}>Apply vote</Button>
            </div>
        </div>
    )
}