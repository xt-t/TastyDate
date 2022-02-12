import * as React from 'react';
import {TastyDateItem} from "../../models/result/TastyDateItem";
import "./Tables.scss"
import image from "./dummypic.jpg";
import Checkbox from "@mui/material/Checkbox";
import {useState} from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Box, Button, Rating, styled, Typography} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

interface VoteRestaurantTableProps {
    transferSettingsItem: TastyDateItem
}

export default function VoteRestaurantTable({transferSettingsItem, }: VoteRestaurantTableProps) {

    const [checked, setChecked] = useState<boolean[]>(Array(3).fill(false));

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
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    }

    return (
        <body>

            <div className="container">
                <div>
                <div className="resultcard">
                    <div className="imgBx">
                        <img src={image} alt="A pic would be nicer" className="picture"></img>
                    </div>
                    <h3>Card One</h3>
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
                        Opening hours
                        Website
                        Menu
                        Phone number
                            Recommended dishes:
                        </p>
                    </div>
                </div>
                <Checkbox
                    checked={checked[1]}
                    onChange={(event) => handleChange(1)}
                    inputProps={{'aria-label': 'controlled'}}
                />
                </div>
                <div>
                <div className="resultcard">
                    <div className="imgBx">
                        <img src={image} className="picture" alt="A pic would be nicer"></img>
                    </div>
                    <h3>Card Two</h3>
                    <ArrowDropDownIcon className="arrow"/>
                    <div className="content">
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <Typography component="legend">Read only</Typography>
                            <Rating name="read-only" value={ratingValue} readOnly />
                        </Box>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <Checkbox
                    checked={checked[2]}
                    onChange={(event) => handleChange(2)}
                    inputProps={{'aria-label': 'controlled'}}
                />
                </div>
                <div>
                <div className="resultcard">
                    <div className="imgBx">
                        <img src={image} className="picture" alt="A pic would be nicer"></img>
                    </div>
                    <h3>Card Three</h3>
                    <ArrowDropDownIcon className="arrow"/>
                    <div className="content">
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <Typography component="legend">Read only</Typography>
                            <Rating name="read-only" value={ratingValue} readOnly />
                        </Box>


                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                    <Checkbox
                        checked={checked[3]}
                        onChange={(event) => handleChange(3)}
                        inputProps={{'aria-label': 'controlled'}}
                    />
        </div>
            </div>
            <Button>Save</Button>
            </body>
    )
}