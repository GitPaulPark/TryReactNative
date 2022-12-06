import React from "react";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {typesOfWorkout} from "../Enum";

export default function InfoForToday(props){

    return (
        <Box>
            <Typography sx={{color:"white"}} textAlign={"center"}> {typesOfWorkout.cardio}</Typography>
            <Typography sx={{color:"white"}} textAlign={"center"}> 오늘의 목표 를 표시하는 구간</Typography>
            <div style={{display: "flex", justifyContent: "center", width: "100%"}}>

                <DirectionsRunIcon
                    sx={{fontSize: 150}}
                />
            </div>
        </Box>

    )
}