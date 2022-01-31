import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppointmentStepsPages from "./AppointmentStepsPages";

interface AppointmentStepsWindowProps {
    activeStep: number,
    steps: string[],
    isStepOptional: Function,
    handleReset: Function,
    handleBack: Function,
    handleSkip: Function,
    handleNext: Function
}

export default function AppointmentStepsWindow(
    {
        activeStep,
        steps,
        isStepOptional,
        handleReset,
        handleBack,
        handleSkip,
        handleNext
    }: AppointmentStepsWindowProps) {

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
                                <Box sx={{flex: '1 1 auto'}}/>
                                <Button onClick={() => handleReset()}>Reset</Button>
                            </Box>
                        </React.Fragment>

                    ) : (

                        <React.Fragment>

                            <Typography sx={{mt: 2, mb: 1}}>
                                <AppointmentStepsPages activepage={activeStep}/>
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