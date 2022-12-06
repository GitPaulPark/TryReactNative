import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../test/CounterSlice'
import logStore from "../store/logStore"

export default configureStore({
    reducer: {
        counter: counterReducer,
        logStore: logStore,
    }
})