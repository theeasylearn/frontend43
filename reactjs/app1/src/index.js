//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

var page = (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                    <h1 className='border-bottom text-uppercase text-primary'>Working with bootstrap</h1>
                    <p>We can use bootstrap framework with reactjs using CDN</p>
            </div>
        </div>
    </div>
)
root.render(page);