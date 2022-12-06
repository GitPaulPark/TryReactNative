import {useNavigate} from 'react-router-dom';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { postInfo } from '../store/logStore'
import PasswordInput from "../components/ui/PasswordInput";
import FormInput from "../home/components/FormInput";
import {Typography} from "@mui/material";


function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //
    // useEffect(()=>{
    //
    //     dispatch(postInfo());
    // },[])


    return (
        <>
            <div>
                <h1>Profile</h1>
                <button
                    onClick={() => {
                        navigate('/');
                    }}
                >누르면 홈으로 이동한다
                </button>
            </div>
            <div style={{marginTop:50}}>
                <PasswordInput/>
                <FormInput/>
                <Typography width={20}>
                    1,deadLift,1
                    1,Pullup,2
                    2,BenchPress,1
                    2,Incline_BenchPress,2
                    3,Squat,1
                    3,Leg_extension,2
                    4,ShoulderPress,1
                    4,Side_Lateral_Raise,1
                </Typography>
            </div>
        </>
    )
}

export default Profile;