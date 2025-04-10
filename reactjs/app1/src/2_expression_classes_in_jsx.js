import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//create virtual dom (required)
const root = ReactDOM.createRoot(document.getElementById('root'));
//create variables 
var num1 = 100
var num2 = 30
//create variable to store jsx 
var output = (
    <>
    <h1 align='center'>Expression in jsx</h1>
    <table border='1' align='center'>
        <tr>
            {/* we can apply css class using className property 
                we can apply more then one class. in such case each classname must be separated by space
            */}
            <td className='red my-font'>
                Addition = {num1 + num2}
            </td>
            <td className='green'>
                Subtraction = {num1 - num2}
            </td>
            <td className='blue'>
                Multiplication = {num1 * num2}
            </td>
            <td>
                Division = {(num1 / num2).toFixed(2)}
            </td>
        </tr>
    </table>
    </>
);
root.render(output);