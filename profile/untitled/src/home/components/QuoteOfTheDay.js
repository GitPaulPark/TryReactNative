import React from "react";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {typesOfWorkout} from "../Enum";

export default function QuoteOfTheDay(props){

    return (
        <Box>
            <Typography sx={{color:"white"}} textAlign={"center"}> {typesOfWorkout.mental}</Typography>
            <Typography sx={{color:"white"}} textAlign={"center"}> 명언을 표시하는 구간</Typography>
            <div style={{display: "flex", justifyContent: "center", width: "100%"}}>

                <SelfImprovementIcon
                    sx={{fontSize: 150}}
                />
            </div>
        </Box>

    )
}