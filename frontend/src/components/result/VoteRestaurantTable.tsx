import * as React from 'react';
import {TastyDateItem} from "../../models/result/TastyDateItem";
import "./VoteResult.scss"
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Box, Rating} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {StyledRating} from '../../models/restaurants/StylingRating';
import image1 from "../restaurants/burger.jpg";
import image0 from "../restaurants/japaneseRestaurant.jpg";

interface VoteRestaurantTableProps {
    tastyDateItemForVote: TastyDateItem
    checkRestaurants: boolean[]
    positiveVotesPerTime: number[]
    negativeVotesPerTime: number[]
    handleCheck: Function
    allowedToVoteRestaurant: boolean
}

export default function VoteRestaurantTable({
                                                tastyDateItemForVote,
                                                checkRestaurants,
                                                positiveVotesPerTime,
                                                negativeVotesPerTime,
                                                handleCheck,
                                                allowedToVoteRestaurant
                                            }: VoteRestaurantTableProps) {

    return (
        <div>
            <div className="container">
                {tastyDateItemForVote.infoRestaurantData.map((restaurant, index) => (
                    <React.Fragment key={index}>
                        <div className="resultcard">
                            <Box className="imgBx">
                                {(index === 1) ? (<img src={image0} alt="A pic would be nicer" className="picture"/>)
                                    :
                                    (<img src={image1} alt="A pic would be nicer" className="picture"/>)}
                            </Box>
                            <h3>{restaurant.restaurantName}</h3>
                            <ArrowDropDownIcon className="arrow"/>
                            <Box className="content">
                                <Box>
                                    {restaurant.category}
                                </Box>
                                <Box
                                    sx={{
                                        '& > legend': {mt: 2},
                                    }}
                                >
                                    <Rating name="read-only" value={restaurant.rating} readOnly/>
                                </Box>
                                <Box
                                    sx={{
                                        '& > legend': {mt: 2},
                                    }}
                                >
                                    <StyledRating
                                        name="read-only"
                                        readOnly
                                        value={restaurant.price}
                                        precision={0.5}
                                        max={3}
                                        icon={<EuroIcon fontSize="inherit"/>}
                                        emptyIcon={<EuroIcon fontSize="inherit"/>}
                                    />
                                </Box>
                                <Box>
                                    {restaurant.postcode} {restaurant.city}
                                </Box>
                            </Box>
                        </div>
                        <div className="checkboxAndResults">
                            {(allowedToVoteRestaurant) ?
                                (
                                <React.Fragment>
                                    <Checkbox
                                        checked={checkRestaurants[index]}
                                        onChange={(event) => handleCheck(index)}
                                        inputProps={{'aria-label': 'controlled'}}
                                    />
                                </React.Fragment>)
                                :
                                (<div>
                                        <span className="amountPositiveResults" style={{color: "hsl(145, 70%, 45%)"}}>
                                    <CheckIcon className="resultIcon"/>
                                            {positiveVotesPerTime[index]}
                                </span>
                                    <span className="amountNegativeResults">
                                    <CloseIcon className="resultIcon"/>
                                        {negativeVotesPerTime[index]}
                                </span>
                                </div>)
                            }
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}