//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Cart from './Components/cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cart />);