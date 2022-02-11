import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppointmentStepsPages from "./AppointmentStepsPages";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {dataPickedTime} from "../../models/appointmentsettings/DataPickedTime";
import {dataPickedRestaurant} from "../../models/appointmentsettings/DataPickedRestaurant";
import {DateSettingsItemDTO, transferSettingsToDB} from "../../service/tastydate-api-service";
import {AuthContext} from "../../context/AuthProvider";
import UseAppointSteps from "./UseAppointSteps";

interface AppointmentStepsWindowProps {
    activeStep: number,
    setActiveStep: Function,
    steps: string[],
    isStepOptional: Function,
    handleEdit: Function,
    handleBack: Function,
    handleSkip: Function,
    handleNext: Function,
    setTransferSettingsItem: Function
}

export default function AppointmentStepsWindow(
    {
        activeStep,
        setActiveStep,
        steps,
        isStepOptional,
        handleEdit,
        handleBack,
        handleSkip,
        handleNext,
        setTransferSettingsItem
    }: AppointmentStepsWindowProps) {

    const {token}=useContext(AuthContext)

    const navigate = useNavigate();

    //UseStateAppointVariables
    const {appointOne, appointTwo, appointThree } = UseAppointSteps();

    const handleDelete = () => {
        setTastyDateName("");
        setLocation("");
        setNotes("");
        setChosenDisplayName("");
        setDate(null);
        setStartTime(null);
        setEndTime(null);
        setIdPickedTime(1);
        setDataDateTimes([]);
        setCategory("");
        setPostcode(1);
        setCity("");
        setRestaurantName("");
        setRating(0);
        setPrice(0);
        setIdPickedRestaurant(1);
        setRestaurantData([]);
        setActiveStep(0);
    }

    const proceedToVote = () => {
        const newDataInfoDate = {
            pickedTastyDateName: tastyDateName,
            pickedLocation: location,
            pickedNotes: notes,
            pickedChosenDisplayName: chosenDisplayName
        }
        const settingsItem : DateSettingsItemDTO =
            {
                infoDate: newDataInfoDate,
                infoDateTimes: dataDateTimes,
                infoRestaurantData: restaurantData
            };
        transferSettingsToDB(settingsItem, token)
            .then((response) => {
                setTransferSettingsItem(response.data);
                navigate("/overview");
            })
            .catch((err) => {
                console.error(err.message);
            })
    }


    return (
        <div className="window">
            <Card sx={{border: 2, borderColor: "#1c54b2"}}>
                <CardContent>

                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{mt: 2, mb: 1}}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <Button onClick={() => handleDelete()}>Delete</Button>
                                <Box sx={{flex: '1 1 auto'}}/>
                                <Button onClick={() => handleEdit()}>Edit</Button>
                                <Box sx={{flex: '1 1 auto'}}/>

                                <Button onClick={() => proceedToVote()}>Proceed</Button>

                            </Box>
                        </React.Fragment>

                    ) : (

                        <React.Fragment>

                            <Typography component={'span'} sx={{mt: 2, mb: 1}}>
                                <AppointmentStepsPages
                                    activepage={activeStep}
                                    //AppointOne
                                    tastyDateName={tastyDateName}
                                    setTastyDateName={setTastyDateName}
                                    location={location} setLocation={setLocation}
                                    notes={notes} setNotes={setNotes}
                                    chosenDisplayName={chosenDisplayName}
                                    setChosenDisplayName={setChosenDisplayName}
                                    //AppointTwo
                                    date={date} setDate={setDate}
                                    startTime={startTime} setStartTime={setStartTime}
                                    endTime={endTime} setEndTime={setEndTime}
                                    idPickedTime={idPickedTime} setIdPickedTime={setIdPickedTime}
                                    dataDateTimes={dataDateTimes} setDataDateTimes={setDataDateTimes}
                                    //AppointThree
                                    category={category} setCategory={setCategory}
                                    postcode={postcode} setPostcode={setPostcode}
                                    city={city} setCity={setCity}
                                    restaurantName={restaurantName} setRestaurantName={setRestaurantName}
                                    rating={rating} setRating={setRating}
                                    price={price} setPrice={setPrice}
                                    idPickedRestaurant={idPickedRestaurant} setIdPickedRestaurant={setIdPickedRestaurant}
                                    restaurantData={restaurantData} setRestaurantData={setRestaurantData}
                                />
                            </Typography>

                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={() => handleBack()}
                                    sx={{mr: 1}}
                                >
                                    Back
                                </Button>

                                <Box sx={{flex: '1 1 auto'}}/>

                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={() => handleSkip()} sx={{mr: 1}}>
                                        Skip
                                    </Button>
                                )}


                                <Button onClick={() => handleNext()}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>


                            </Box>
                        </React.Fragment>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}