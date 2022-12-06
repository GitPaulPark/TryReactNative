import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SimpleContainer from "../components/ui/SimpleContainer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Paper, Typography} from "@mui/material";
import {textPhrase} from "../home/Function";

function Axios() {
    const [hello, setHello] = useState('')
    const [records, setRecords] = useState([{
        id:0,
        name:'',
        categoryName:'',
        workoutName:'',
        weight:0,
        reps:0,

    }])

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))

        axios.get('/api/workout')
            .then(response => {
                setRecords(response.data);
                console.log(response.data[0])
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            });
    }, []);

    return (

        <Container fixed maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '90vh' }} >
                <Paper >

                    <div>
                        백엔드에서 가져온 데이터입니다 : {hello}
                        <br/>
                        <br/>
                        <br/>
                        <hr/>


                        {records.map(record => (
                            <ul key={record.id}>
                                <Typography> {record.name} </Typography>
                                <Typography>{record.date} {textPhrase.dateOfWorkout}</Typography>
                                <li>
                                    {record.categoryName}
                                </li>
                                <li>
                                    {record.workoutName}
                                </li>
                                <li>
                                    {record.weight} x {record.reps}
                                </li>

                            </ul>
                        ))}

                        <hr/>

                    </div>
                </Paper>
            </Box>
        </Container>

    );
}

export default Axios;