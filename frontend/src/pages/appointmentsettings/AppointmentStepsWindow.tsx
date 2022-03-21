import Card from "@mui/material/Card";
import {Alert, AlertTitle, CardContent} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppointmentStepsPages from "./AppointmentStepsPages";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
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
    handleNext: Function
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
        handleNext
    }: AppointmentStepsWindowProps) {

    const {token} = useContext(AuthContext)

    const navigate = useNavigate();

    //UseStateAppointVariables
    const {appointOne, appointTwo, appointThree, handleDelete} = UseAppointSteps();

    const [alertUser, setAlertUser] = useState<boolean>(false);

    const handleRemove = () => {
        handleDelete();
        setActiveStep(0);
    }

    const proceedToVote = () => {
        if (dataCompleted()) {
            const newDataInfoDate = {
                pickedTastyDateName: appointOne.tastyDateName,
                pickedLocation: appointOne.location,
                pickedNotes: appointOne.notes,
                pickedChosenDisplayName: appointOne.chosenDisplayName
            }
            const settingsItem: DateSettingsItemDTO =
                {
                    infoTastyDate: newDataInfoDate,
                    infoTastyDateTimes: appointTwo.dataDateTimes,
                    infoRestaurantData: appointThree.restaurantData
                };
            transferSettingsToDB(settingsItem, token)
                .then((response) => {
                    navigate(`/overview/${response.data.tastyDateId}`);
                })
                .catch((err) => {
                    console.error(err.message);
                })
        }
        else {
            setAlertUser(true);
        }
    }

    const dataCompleted = ():boolean => {
        return (appointOne.tastyDateName !== "") &&
            (appointOne.notes !== "") &&
            (appointOne.chosenDisplayName !== "") &&
            (appointTwo.dataDateTimes.length !== 0) &&
            (appointThree.restaurantData.length !== 0);
    }

    return (
        <div className="window">
            <div>
                {activeStep === steps.length ? (
                    <div className="cardFour">
                        <Card style={{boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.5)"}}>
                            {alertUser?
                                (
                            <CardContent className="finalSettingsWindowWithAlert">
                                <Typography sx={{mt: 2, mb: 1}}>
                                    All steps completed - proceed to vote?
                                </Typography>
                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2, marginBottom: "1rem"}}>
                                    <Button onClick={() => handleRemove()}>Delete</Button>
                                    <Box sx={{flex: '1 1 auto'}}/>
                                    <Button onClick={() => handleEdit()}>Edit</Button>
                                    <Box sx={{flex: '1 1 auto'}}/>

                                    <Button onClick={() => proceedToVote()}>Proceed</Button>

                                </Box>
                                        <div>
                                            <Alert severity="error">
                                                <AlertTitle>Error</AlertTitle>
                                                Missing data — <strong>please check your input!</strong>
                                            </Alert>
                                        </div>
                            </CardContent>
                                    )
                                    :
                                    (<CardContent className="finalSettingsWindow">
                                        <Typography sx={{mt: 2, mb: 1}}>
                                            All steps completed - proceed to vote?
                                        </Typography>
                                        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2, marginBottom: "1rem"}}>
                                            <Button onClick={() => handleRemove()}>Delete</Button>
                                            <Box sx={{flex: '1 1 auto'}}/>
                                            <Button onClick={() => handleEdit()}>Edit</Button>
                                            <Box sx={{flex: '1 1 auto'}}/>

                                            <Button onClick={() => proceedToVote()}>Proceed</Button>

                                        </Box>
                                    </CardContent>)
                                }
                        </Card>
                    </div>
                ) : (
                    <React.Fragment>

                        <Typography component={'span'}>
                            <AppointmentStepsPages
                                activepage={activeStep}
                                //AppointOne
                                appointOne={appointOne}
                                //AppointTwo
                                appointTwo={appointTwo}
                                //AppointThree
                                appointThree={appointThree}
                            />
                        </Typography>

                        <div className="bottomNavigation">
                            <div className="bottomNavigationCard">
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={() => handleBack()}
                                >
                                    Back
                                </Button>

                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={() => handleSkip()}>
                                        Skip
                                    </Button>
                                )}


                                <Button onClick={() => handleNext()}>
                                    {(activeStep === steps.length - 1) ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}