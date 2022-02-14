import * as React from 'react';
import {TastyDateItem} from "../../models/result/TastyDateItem";
import "./Tables.scss"
import image from "./dummypic.jpg";
import Checkbox from "@mui/material/Checkbox";
import {useContext, useState} from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Box, Button, Rating, styled, TextField} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import {
    updateTastyDateWithVoteRestaurantItem,
} from "../../service/tastydate-api-service";
import {AuthContext} from "../../context/AuthProvider";

interface VoteRestaurantTableProps {
    transferSettingsItem: TastyDateItem
    setTransferSettingsItem: Function
    userName: string
    setUserName: Function
}

export default function VoteRestaurantTable({transferSettingsItem, setTransferSettingsItem, userName, setUserName}: VoteRestaurantTableProps) {

    const {token} = useContext(AuthContext);

    const [checkRestaurants, setCheckRestaurants] = useState<boolean[]>(Array(3).fill(false));
    const [countersVotesPerRestaurant, setCountersVotesPerRestaurant] = useState<number[]>([]);


    const ratingValue = 2;
    const price = 1;

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
            const tastyDateId = transferSettingsItem.tastyDateId;
            const restaurantVote = {
                displayedName: userName,
                votesPerRestaurantFromOneUser: checkRestaurants
            }
            updateTastyDateWithVoteRestaurantItem(tastyDateId, restaurantVote, token)
                .then((response) => {
                    setTransferSettingsItem(response.data);
                    setCountersVotesPerRestaurant(response.data.votingResultsForOneRestaurant)
                })
                .catch((err) => {
                    console.error(err.message);
                })
        }
    }

    return (
        <body>

            <div className="container">
                <div className="resultcard">
                    <div className="imgBx">
                        <img src={image} alt="A pic would be nicer" className="picture"></img>
                    </div>
                    <h3>sad</h3>
                    <ArrowDropDownIcon className="arrow"/>
                    <div className="content">
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                        <Rating name="read-only" value={ratingValue} readOnly />
                        </Box>
                            <Box
                                sx={{
                                    '& > legend': {mt: 2},
                                }}
                            >
                                <StyledRating
                                    name="read-only"
                                    readOnly
                                    value={price}
                                    precision={0.5}
                                    max={3}
                                    icon={<EuroIcon fontSize="inherit"/>}
                                    emptyIcon={<EuroIcon fontSize="inherit"/>}
                                />
                            </Box>
                        <p>
                        Category
                        Address
                        </p>
                    </div>
                </div>
                <div className="checkboxAndResults">
                <Checkbox
                    checked={checkRestaurants[1]}
                    onChange={(event) => handleChange(1)}
                    inputProps={{'aria-label': 'controlled'}}
                />
                    {(countersVotesPerRestaurant.length !==0) ?
                        (
                            <React.Fragment>
                                {countersVotesPerRestaurant.map((counterVotesPerRestaurant, index) => (

                                    <div key={index}>{counterVotesPerRestaurant}</div>

                                ))}</React.Fragment>
                        )
                        :
                        (<></>)
                    }
                </div>

            </div>
            <div className="applyRestaurantVote">
            <TextField value={userName || ""}
                       onChange={(event) => {
                           setUserName(event.target.value)
                       }}>Username</TextField>
            <Button className="voteRestaurantButton" onClick={addUserVote}>Apply vote</Button>
            </div>
            </body>
    )
}