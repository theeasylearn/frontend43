//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

var page = (
    <div className='container'>
        {/* this is container */}
        <div className='row'>
            {/* this is row */}
            <div className='col-12'>
                    <h1 className='border-bottom text-uppercase text-primary'>Working with bootstrap</h1>
                    <p>We can use bootstrap framework with reactjs using CDN</p>
            </div>
        </div>
    </div>
)
root.render(page);