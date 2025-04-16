//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional component with input (props)
function Student(props)
{
    return ( <div className='col-lg-3 mb-3'>
      <div className="card shadow rounded-4">
        <div className="card-header bg-primary text-white">
        <h5 className="card-title">Name: <strong>{props.name}</strong></h5>
        </div>
        <div className="card-body">
         
          <ul className="list-group list-group-flush">
            <li className="list-group-item">HTML: <strong>{props.html}</strong></li>
            <li className="list-group-item">CSS: <strong>{props.css}</strong></li>
            <li className="list-group-item">JavaScript: <strong>{props.javascript}</strong></li>
            <li className="list-group-item">Total: <strong>{parseInt(props.html) + parseInt(props.css) + parseInt(props.javascript)}</strong></li>
            <li className="list-group-item">Average: <strong>{((parseInt(props.html) + parseInt(props.css) + parseInt(props.javascript))/3).toFixed(2)}</strong></li>
          </ul>
        </div>
      </div>
    </div>);
}
function School() {
  return (<div className="container my-5">
    <div className='row'>
      <Student name='Yashvi Trivedi' html='84' css='90' javascript='95' />
      <Student name='Samarth Balar' html='90' css='92' javascript='85' />
      <Student name='Devdutt bhoj' html='80' css='70' javascript='100' />
      <Student name='Pavitra Italiya' html='85' css='70' javascript='100' />
      <Student name='Mona Patel' html='95' css='75' javascript='100' />
    </div>
  </div>
  );
}
root.render(<School />);