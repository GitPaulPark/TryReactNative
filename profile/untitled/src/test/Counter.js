import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './CounterSlice'
import { multiply, divide, bringInfo } from '../store/logStore'

export function Counter() {
    const count = useSelector(state => state.counter.value)
    const number = useSelector(state => state.logStore.number)
    const record = useSelector(state => state.logStore.record)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {

            dispatch(bringInfo());


        };
    }, []);


    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                {/*<button*/}
                {/*    onClick={()=> dispatch(incrementByAmount())}>*/}
                {/*    payload*/}
                {/*</button>*/}
            </div>
            <div>
                <button
                    aria-label="multiply value"
                    onClick={() => dispatch(multiply())}
                >
                    multiply
                </button>

                <span>{number}</span>
                <button
                    aria-label="divide value"
                    onClick={() => dispatch(divide())}
                >
                    divide
                </button>
            </div>
        </div>
    )
}