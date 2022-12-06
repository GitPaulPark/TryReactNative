import React from "react"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {Typography} from "@mui/material";
import {typesOfWorkout} from "../Enum";
import Box from "@mui/material/Box";

export default function ShowProgress(props) {
    return (
        <Box>
            <Typography sx={{color:"white"}} textAlign={"center"}> {typesOfWorkout.weight}</Typography>
            <Typography sx={{color:"white"}} textAlign={"center"}> 그래프 표시하는 구간</Typography>
            <div style={{display: "flex", justifyContent: "center", width: "100%"}}>

                <FitnessCenterIcon
                    sx={{fontSize: 150}}
                />
            </div>
        </Box>
    )

}