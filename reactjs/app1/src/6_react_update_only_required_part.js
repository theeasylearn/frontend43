//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//component function
function showCurrentTime(time)
{
    var time = new Date();
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
function updateDateTime()
{
    root.render(showCurrentTime());
    //call function that returns JSX
}
setInterval(updateDateTime,1000); 
//showCurrentTime function will execute at every second