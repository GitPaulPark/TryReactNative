import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const logStore = createSlice({
    name: 'logStoring',
    initialState: {
        number: 5,
        record:{
            id:100001,
            userId:3,
            name:"luke",
            phone:"01058191240",
            height:178.2,
            bodyWeight:150,
            categoryId:1,
            workoutId:2,
            weight:10,
            reps:20,
        }
    },
    reducers: {
        multiply: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.number *= state.number
        },
        divide: state => {
            state.number /= state.number
        },
        changeByAmount: (state, action) => {
            state.number = action.payload
        },
        insertInfo: (state, action) =>{
            console.log("insertInfo started")

            // logStore.actions.postInfo(action.payload)

            // state.record.
        },
        bringInfo : state=>{
            axios.get('/api/workout')
                .then(response => {
                    state.record = response.data;
                    console.log(response.data[0])
                })
                .catch(e => {
                    console.log(e)
                })

        },
        postInfo : (state,action) =>{
            console.log("postInfo started")
            axios.post('api/insertLog',
                action.payload
            )
                .then(response => {
                    console.log(response.data[0])
                })
                .catch(e => {
                    console.log(e)
                });
        }
    }
})

// Action creators are generated for each case reducer function
export const { multiply, divide, bringInfo, postInfo, insertInfo } = logStore.actions

export default logStore.reducer