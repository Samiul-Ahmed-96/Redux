import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../../services/actions/CounterAction';

const Counter = () => {
    //State value
    const count = useSelector(state => state.count)
    //Dispatch
    const dispatch = useDispatch();
    const handleIncrement = () =>{
        dispatch(incrementCounter())
    }
    const handleDecrement = () =>{
        dispatch(decrementCounter())
    }
    const handleReset = () =>{
        dispatch(resetCounter())
    }
    return (
        <div className='counter-main'>
            <h2>REACT-REDUX-COUNTER</h2>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>INCREMENT</button>
             <br />
            {
                count > 0 && <button onClick={ handleDecrement}>DECREMENT</button>  
            }
            <br />
            <button onClick={handleReset}>RESET</button>
        </div>
    );
};

export default Counter;