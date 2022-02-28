import {Card, CardContent} from "@mui/material";
import tastyDateSettings from "./TastyDateChooseDate.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import tastyDateFavourites from "./TastyDateFavourites.png";
import tastyDateTimeVote from "./TastyDateTimeVote.png";
import tastyDateRestaurantVote from "./TastyDateRestaurantVote.png";
import React from "react";
import DisplayMenus from "../../components/general/DisplayMenus";
import "./Homepage.scss"

export default function Tutorial() {

    return (
        <div>
            <div>
                <DisplayMenus/>
                <div className="contentTutorial">
                    <h3 className="tutorialTitle">Tutorial</h3>
                    <div className="tastyDateSettings">
                        <Card className="tutorialCard">
                            <CardContent className="tutorialCardContent">
                                <h4>1. TastyDateSetup</h4>
                                <p className="descriptionTutorial">This part includes the settings of the survey as
                                    general information, date, and restaurants.</p>
                                <img src={tastyDateSettings} alt="TastyDateSettings" className="pictureTastyDate"/>
                            </CardContent>
                        </Card>
                    </div>
                    <KeyboardArrowDownIcon className="arrow"/>
                    <div className="favourites">
                        <Card className="tutorialCard">
                            <CardContent className="tutorialCardContent">
                                <h4>2. Your favourites</h4>
                                <p className="descriptionTutorial">This application enables you to save your favourites restaurants to facilitate the
                                    creation of a new TastyDate. </p>
                                <img src={tastyDateFavourites} alt="TastyDateSettings" className="pictureTastyDate"/>
                            </CardContent>
                        </Card>
                    </div>
                    <KeyboardArrowDownIcon className="arrow"/>
                    <div className="tastyDateVote">
                        <Card className="tutorialCard">
                            <CardContent className="tutorialCardContent">
                                <h4>3. The vote: Time ... </h4>
                                <p className="descriptionTutorial">The invited users can participate to vote for specific dates</p>
                                <img src={tastyDateTimeVote} alt="TastyDateSettings" className="pictureTastyDate"/>
                            </CardContent>
                        </Card>
                    </div>
                    <KeyboardArrowDownIcon className="arrow"/>
                    <div className="tastyDateVote">
                        <Card className="tutorialCard">
                            <CardContent className="tutorialCardContent">
                                <h4>... AND restaurants!</h4>
                                <img src={tastyDateRestaurantVote} alt="TastyDateSettings"
                                     className="pictureTastyDate"/>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}