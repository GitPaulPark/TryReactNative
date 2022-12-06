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



const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    },
});

export default function FormInput() {
    const [userName, setUserName] = useState('');
    const [workoutId, setWorkoutId] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const dispatch = useDispatch()


    const storeVals = ()=>{
        let userRecord = {
            name: userName,
            workoutId: workoutId,
            categoryId: categoryId,
            weight: weight,
            reps: reps,
        }
        return userRecord

    }


    return (
        <Box
            component="form"
            noValidate
            sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr 1fr' },
                gap: 2,
            }}
        >

            <FormControl>
            <ValidationTextField
                label="이름"
                required
                variant="outlined"
                id="name-outlined-input"
                onChange={(e)=>setUserName(e.target.value)}
            />
            </FormControl>
            <FormControl>
            <ValidationTextField
                label="운동 종류"
                required
                variant="outlined"
                id="category-outlined-input"
                onChange={(e)=>setWorkoutId(e.target.value)}
            />
            </FormControl>
            <FormControl>
            <ValidationTextField
                label="운동 이름"
                required
                variant="outlined"
                id="workout-outlined-input"
                onChange={(e)=>setCategoryId(e.target.value)}
            />
            </FormControl>
            <FormControl>
            <ValidationTextField
                label="무개"
                required
                variant="outlined"
                id="weight-outlined-input"
                onChange={(e)=>setWeight(e.target.value)}
            />
            </FormControl>
            <FormControl>
            <ValidationTextField
                label="횟수"
                required
                variant="outlined"
                id="reps-outlined-input"
                onChange={(e)=>setReps(e.target.value)}
            />
            </FormControl>



            <Button
                variant  = { "contained" }
                onClick={()=>{
                    dispatch(insertInfo(storeVals()))
                    dispatch(postInfo(storeVals()))

                    ;
                }


            }
            ></Button>




        </Box>
    );
}
