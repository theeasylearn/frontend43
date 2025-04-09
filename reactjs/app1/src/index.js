import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//create virtual dom (required)
const root = ReactDOM.createRoot(document.getElementById('root'));
//create variable to store jsx 
var output = <><h1 align='center'>Hello World</h1><p>we have just started learning reactjs</p></>;
root.render(output);