import React from 'react';
import ReactDOM from 'react-dom/client';
// import CounterApp from './CounterApp';
import FiboCounter from './CounterFibo';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={ 1 }/> */}
        <FiboCounter fiboStart={ 0 }/>
    </React.StrictMode>
)