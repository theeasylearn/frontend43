//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var time = new Date();
function showCurrentTime(time)
{
    let message = '';
    //conditional statement
    if(time.getHours()>11)
        message = "PM";
    else 
        message = "AM";

    var output = (<div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <h1 className='text-center'>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()} {message}</h1>
            </div>
        </div>
    </div>);

    return output; //return JSX 
}
//call function that returns JSX
root.render(showCurrentTime(time));