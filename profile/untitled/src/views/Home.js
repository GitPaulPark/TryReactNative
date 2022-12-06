import React, {useEffect, useState} from 'react';
import {Box, Button} from "@mui/material";
import Display from "../home/Display";
import Container from "@mui/material/Container";
import {inject, observer} from "mobx-react";
import gym from "../images/gym.svg";




function Home(props) {

    const [count, setCount] = useState(0) ;
    const [newCount, setNewCount] = useState(0) ;

    useEffect(()=>{
        props.listStore.testServerRequest();
    },[])


    const countUp = ()=>{
        setCount(count +1)
        console.log(count)

        setCount(count +1)
        console.log(count)
    }
    const newCountUp= () =>{
        setNewCount(newCount => newCount+1)
        setNewCount(newCount => newCount+1)
        console.log(newCount)


    }



    return (
        <Container fixed maxWidth="sm">
            <Box sx={{mt:1, height:800, display:"flex",borderRadius:15, justifySelf:"center"}}>
            <Display/>
            </Box>
            <Button
                onClick={()=>countUp()}
            >
                {count}
            </Button>
            <Button
                onClick={()=> newCountUp()}
            >
                {newCount}
            </Button>
        </Container>
    )
}
export default inject('listStore')(observer(Home));