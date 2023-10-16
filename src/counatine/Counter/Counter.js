import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../Redux/action/counter.action';

function Counter(props) {

    let count = useSelector(state => state.counter)

    const dispacth = useDispatch()

    const handleIncrement = () => {
        dispacth(increment())
    }

    const handleDecrement = () => {
        dispacth(decrement())

    }

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            {count.count}
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;