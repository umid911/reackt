import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock  from './Components/Clock'

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock count={0} />
  </React.StrictMode>
);


reportWebVitals();
