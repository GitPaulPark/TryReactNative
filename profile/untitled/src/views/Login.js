import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, Typography} from "@mui/material";

import TextField from "@mui/material/TextField";
import {Login as LoginIcon} from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import gym from "../images/gym.svg";
import chat from "../images/chat-left.svg";


const paperStyle={padding :20,height:'70vh',width:580}
const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px 0'}

class Login extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {setSignUpUserInfo} = this.props.listStore
        return (
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                            <h2>Sign In</h2>
                        </Grid>
                        <FormControl>
                        <TextField
                            label='Username'
                            placeholder='Enter username'
                            variant="outlined"
                            fullWidth
                            required
                            onChange={(e)=>setSignUpUserInfo('email',e.target.value)}
                        />
                        <TextField
                            label='Password'
                            placeholder='Enter password'
                            type='password'
                            variant="outlined"
                            fullWidth
                            required
                            onChange={(e)=>setSignUpUserInfo('password',e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Button
                            type='submit'
                            color='primary'
                            variant="contained"
                            style={btnstyle}
                            fullWidth
                        >
                            Sign in
                        </Button>
                        </FormControl>
                        <Typography >
                            <Link href="#" >
                                Forgot password ?
                            </Link>
                        </Typography>
                        <Typography > Do you have an account ?
                            <Link href="#" >
                                Sign Up
                            </Link>
                        </Typography>
                        <div style={{
                            height:40, width:600,
                            position: "relative",
                            textAlign: "center",
                            color: "white"}}>
                        <img style={{height:"100%", width:"100%"}} alt={"gym"} src={chat} />
                            <div style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                color:"red"

                            }}
                            >
                                sdfdsfsfsadsadas
                            </div>
                        </div>
                        {/*<img style={{height:"100%", width:"100%"}} alt={"gym"} src={gym} />*/}
                    </Paper>
                </Grid>
        );
    }


}

export default inject('listStore')(observer(Login))