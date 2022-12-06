import React, {Component} from "react";
import {makeStyles,TextField, Button } from "@mui/material";
import {withStyles} from "@material-ui/core";
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import {inject, observer} from "mobx-react";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
});


class Signup extends Component{

    constructor(props) {
        super(props);
        // this.state={
        //     firstName: '',
        //     lastName: '',
        //     email:'',
        //     password: '',
        // }

    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.listStore.signUp();
    }

    handleClose = ()=>{

    }

    render() {
        const {handleSubmit} = this;
        const {classes, listStore} = this.props;
        const {setSignUpUserInfo,config} = listStore;
        const {name,email,password,phone,height,weight} = config.data;

        return (
            <div>

                <form className={classes.root} onSubmit={handleSubmit}>
                    <TextField
                        label=" Name"
                        variant="filled"
                        // required
                        value={name || ""}
                        onChange={e => setSignUpUserInfo('name',e.target.value)}
                    />
                    <TextField
                        label="Email"
                        variant="filled"
                        type="email"
                        required
                        value={email || ""}
                        onChange={e => setSignUpUserInfo('email',e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="filled"
                        type="password"
                        required
                        value={password || ""}
                        onChange={e => setSignUpUserInfo('password',e.target.value)}

                    />
                    <TextField
                        label="phone"
                        variant="filled"
                        required
                        value={phone || ""}
                        onChange={e => setSignUpUserInfo('phone',e.target.value)}
                    />
                    <TextField
                        label="height"
                        variant="filled"
                        required
                        value={height || ""}
                        onChange={e => setSignUpUserInfo('height',e.target.value)}
                    />
                    <TextField
                        label="weight"
                        variant="filled"
                        required
                        value={weight || ""}
                        onChange={e => setSignUpUserInfo('weight',e.target.value)}
                    />



                    <div>
                        <Button variant="contained" onClick={this.handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Signup
                        </Button>
                    </div>
                </form>

            </div>
        );
    }

}

export default withStyles(styles)(inject('listStore')(observer(Signup)));