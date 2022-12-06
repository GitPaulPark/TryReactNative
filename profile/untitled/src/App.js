import * as React from "react";
import logo from './logo.svg';
import './App.css';
import Home from "./views/Home";
import About from "./views/About";
import Profile from "./views/Profile";
import Axios from "./views/Axios";
import InfiniteScroll from "./views/scroll/InfiniteScroll"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SideMenu from "./components/SideMenu";
import {styled, useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Topbar from './views/Topbar';
import MainPage from "./views/MainPage";
import Signup from "./views/Signup";
import MobxPracticeAsyncActions from "./views/mobxViews/MobxPracticeAsyncActions";

const drawerWidth = 240;


const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // marginLeft: `-${drawerWidth+500}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            open:false,
            useMobx:true,
        }

    }


    handleDrawerOpen = () => {
        this.setState({
            open:true
        });
    };

    handleDrawerClose = () => {
        this.setState({
            open:false
        });
    };



render(){
    const {open} = this.state
    return (
        <>
            <Topbar
                {...this.state}
                open ={this.state.open}
                handleDrawerOpen={this.handleDrawerOpen}
            />

            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <SideMenu handleDrawerClose={this.handleDrawerClose} open={open}/>


                <Main open={open}>
                    <Box sx={{display:"fixed",width: "600px",marginTop:50,}}>

                        {this.state.useMobx
                            ?
                            <Routes>
                                <Route path="/" element={<MainPage/>}/>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/axios" element={<Axios/>}/>
                                <Route path="/signUp" element={<Signup/>}/>
                                <Route path="/scroll" element={<InfiniteScroll/>}/>
                                <Route path="/async" element={<MobxPracticeAsyncActions/>}/>


                            </Routes>
                            :
                            <Routes>
                                <Route path="/" element={<MainPage/>}/>
                            </Routes>

                        }

                    </Box>
                </Main>



            </div>
        </>
    );
}

}

export default App;





