import React from 'react';
import {Box, Paper, MobileStepper, Typography, Button} from "@mui/material";
import { useTheme } from '@mui/material/styles';
// import MobileStepper from '@mui/material/MobileStepper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {motivationWords, steps, infos} from "./Enum";
import Stepper from "./components/Stepper";
import Footer from "./components/Footer";
import ShowProgress from "./components/ShowProgress";
import InfoForToday from "./components/InfoForToday";
import QuoteOfTheDay from "./components/QuoteOfTheDay";


// const steps = [
//     {
//         label: 'Tommy Lasorda',
//         description: <ShowProgress/>,
//     },
//     {
//         label: 'Zig Ziglar',
//         description:
//         <InfoForToday/>,
//     },
//     {
//         label: 'Kobe Bryant',
//         description: <QuoteOfTheDay/>,
//     },
// ];


export default function Display() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            console.log(prevActiveStep)
            return (prevActiveStep + 1)
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    return (
            <Paper sx={
                {
                    // marginTop:0.5,
                    borderRadius:15,
                    width:"100%",
                    // height:250,
                    display:"Grid",
                    justifySelf:"center",
                    backgroundColor:"rgb(70,82,146)"
                }}
            >
                <Stepper
                    handleNext={handleNext}
                    handleBack={handleBack}
                    maxSteps={maxSteps}
                    activeStep={activeStep}
                />
                <Box
                    sx={{
                        // height:"80%",
                        width:"100%"
                    }}
                >
                    {steps[activeStep].description}
                </Box>
                <Box
                    sx={{
                        // height:"80%",
                        width:"100%"
                    }}
                >
                    {infos[activeStep].description}
                </Box>



                <Footer
                    // sx={{alignSelf:"bottom"}}
                />


            </Paper>
    )
}