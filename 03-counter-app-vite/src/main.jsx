import React from "react";
import ReactDOM from 'react-dom/client';

import App from './CounterApp'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App value={12}/>
    </React.StrictMode>
)