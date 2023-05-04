import PropTypes from 'prop-types';
import { useState } from 'react';

function CounterApp({ value }) {

    const [counter, setCounter] = useState(value);

    const handleAdd = (number) => setCounter(counter + number);
    const handleReset = () => setCounter(value);
    
    return (
    <div className="counterApp">
        <h1>CounterApp</h1>
        <h2> { counter }</h2>

        <button onClick={ () => handleAdd(1) }>
            +1
        </button>

        <button onClick={ () => handleAdd(-1) }>
            -1
        </button>

        <button onClick={ handleReset }>
            RESET
        </button>
    </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;

