import React from 'react';
import ReactDOM from 'react-dom/client';
import FiboCounter from './CounterFibo';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FiboCounter fiboStart={ 0 }/>
    </React.StrictMode>
)