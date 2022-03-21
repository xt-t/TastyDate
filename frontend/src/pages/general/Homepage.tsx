import DisplayMenus from "../../components/general/DisplayMenus";
import React from "react";
import "./Homepage.scss"
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BallotIcon from '@mui/icons-material/Ballot';
import {Card, CardContent} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

export default function Homepage() {

    const navigate = useNavigate();

    const navigateCreateTastyDate = () => navigate(`/createDate`)

    const navigateViewYourFavourites = () => navigate(`/restaurants`)

    const navigateSelectAnExistentTastyDate = () => navigate(`/overview`)

    const navigateTutorial = () => navigate(`/tutorial`)

    return (
        <div>
            <div>
                <DisplayMenus/>
                <div className="contentHomepage">
                    <Card className="homepageCard" style={{boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)"}}>
                        <CardContent>
                            <h3 className="homepageTitle">Welcome to your next TastyDate!</h3>
                            <p className="textParagraph">
                                It is really great to see you again. <br/>
                                If you are familiar with this application
                                just directly head to the launch of <br/>
                                a new delicious TastyDate!
                            </p>
                            <div className="navigationButtons">
                                <Button style={{margin: "0.5rem"}} variant="outlined" autoFocus onClick={() =>
                                    navigateCreateTastyDate()} startIcon={<AddIcon/>}>Create TastyDate</Button>
                                <Button style={{margin: "0.5rem"}} variant="outlined" autoFocus onClick={() =>
                                    navigateViewYourFavourites()} startIcon={<RestaurantIcon/>}>Favourite
                                    Restaurants </Button>
                                <Button style={{margin: "0.5rem"}} variant="outlined" autoFocus onClick={() =>
                                    navigateSelectAnExistentTastyDate()} startIcon={<BallotIcon/>}>Select
                                    TastyDate</Button>
                            </div>
                            <p className="textParagraph">
                                In case <b>you are new</b> to this app: <br/>
                                The following gives you a brief overview of the
                                main steps and useful aspects to setup a TastyDate!
                            </p>
                            <Button style={{margin: "0.5rem"}} variant="outlined" autoFocus onClick={() =>
                                navigateTutorial()} startIcon={<SchoolIcon/>}>Tutorial</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}