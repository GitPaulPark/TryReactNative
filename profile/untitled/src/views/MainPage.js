import React, {Component} from "react";
import {Container} from "@mui/material";
import {Login as LoginIcon} from "@mui/icons-material";
import {inject, observer} from "mobx-react";
import Login from "./Login";


class MainPage extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Container>
                <Login/>
            </Container>
        )
    }

}
export default inject('listStore')(observer(MainPage));