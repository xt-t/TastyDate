import DisplayMenus from "../../components/general/DisplayMenus";
import React, {useContext, useEffect, useState} from "react";
import {TastyDateItem} from "../../models/result/TastyDateItem";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getAllTastyDateItems} from "../../service/tastydate-api-service";
import {AuthContext} from "../../context/AuthProvider";
import {Button, Card, CardContent} from "@mui/material";
import "./OverviewVoting.scss"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {useNavigate} from "react-router-dom";


export default function OverviewTastyDateItems() {

    const {token} = useContext(AuthContext);
    const [selectedTastyDateId, setSelectedTastyDateId] = useState<string>("");
    const [tastyDateItems, setTastyDateItems] = useState<TastyDateItem[]>([]);
    const navigate = useNavigate();

    const switchPageToCertainVote = () => {
        navigate(`/overview/${selectedTastyDateId}`);
    }

    const getEveryTastyDate = () => {
        getAllTastyDateItems(token)
            .then(response => setTastyDateItems(response.data))
    }

    useEffect(() => (
        getEveryTastyDate()
        //eslint-disable-next-line
    ), [])

    return (
        <div>
            <DisplayMenus/>
            <div className="votingCard">
                <Card style={{boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)"}}>
                    <CardContent className="cardItems">
                        <h3 className="votingCardElement">Select and vote for a TastyDate</h3>
                        <Box sx={{minWidth: 120}} className="votingCardElement">
                            <FormControl fullWidth>
                                <InputLabel variant="outlined">TastyDate</InputLabel>
                                <Select
                                    value={selectedTastyDateId}
                                    label="TastyDate"
                                    onChange={(event) => setSelectedTastyDateId(event.target.value)}
                                >
                                    {tastyDateItems.map((tastyDateItem, index) => (
                                        <MenuItem key={index}
                                                  value={tastyDateItem.tastyDateId}>{tastyDateItem.infoTastyDate.pickedTastyDateName}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        <Button variant="text" className="votingCardElement" onClick={switchPageToCertainVote}>Go to
                            vote<NavigateNextIcon/></Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}