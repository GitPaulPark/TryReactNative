import React, {} from "react";
import {Box, Button, MobileStepper, Paper, Typography} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {motivationWords} from "../Enum";
import {useTheme} from "@mui/material/styles";



export default function Stepper(props){
    const theme = useTheme();

    console.log(props.maxSteps)
    console.log(props.activateStep)
    return (
        <MobileStepper
            sx={{width:"100%", height:"40%"}}
            variant="text"
            steps={props.maxSteps}
            position="static"
            activeStep={props.activeStep}
            nextButton={
                <Button
                    size="small"
                    onClick={props.handleNext}
                    disabled={props.activeStep === props.maxSteps - 1}
                >

                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={props.handleBack} disabled={props.activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}

                </Button>
            }
        />
    )
}