import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";
import {Button} from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { postInfo , insertInfo } from '../../store/logStore'
import gym from "../../images/gym.svg"




export default function BottomPart1(props){
    return (
        <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
            <img style={{height:240, width:240}} alt={"gym"} src={gym} />
        </div>
    )

}