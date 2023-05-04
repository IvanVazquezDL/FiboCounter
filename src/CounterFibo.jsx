import PropTypes from 'prop-types';
import { useState } from 'react';

function CounterFibo({ fiboStart }) {
    const [ position, setPosition ] = useState(0);
    const [ fibo, setFibo ] = useState(fiboStart);
    const [ memo, setMemo ] = useState({
        0: 0,
        1: 1
    }) 

    const fib = (position) => {
        if (position <= 0) return 0;
        if (memo[position]) return memo[position];
        const result = fib(position - 1) + fib(position - 2);
        setMemo(prevMemo => ({...prevMemo, [position]: result}));
        return result;
      }
      
    const fibonacciByPosition = (position) => {
        if (position < 0) return 0;
        const result = fib(position);
        setFibo(result);
        setPosition(position);
    }

    return (
        <div className="counterApp">
            <h1>FiboCounter</h1>
            <h2>Position {position}</h2>
            <h2> { fibo }</h2>
            

            <button onClick={ () => fibonacciByPosition(position + 1) }>
                +1
            </button>

            <button onClick={ () => fibonacciByPosition(position - 1) }>
                -1
            </button>

            <button onClick={ () => fibonacciByPosition(0) }>
                RESET
            </button>
        </div>
    )
}

CounterFibo.propTypes = {
    fiboStart: PropTypes.number
}


export default CounterFibo;