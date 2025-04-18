//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
//class component 
class Schedule extends React.Component {
  //to use properties, one must create constructor 
  constructor(props)
  {
    //property variables
    super(); //required before anything
    this.matchno = props.matchno;
    this.team1 = props.team1;
    this.team2 = props.team2;
    this.venue = props.venue;

    //state object 
    this.state = {
      date : props.date,
      time : props.time
    };

    console.log('constructor called...');
  }
  //must create normal function as arrow function if we access this inside function
  updateMatch = () =>
  {
      // alert(this.date);
      //change state variable (must be done in special way)
     this.setState({
        date : 'canceled',
        time : 'NA'
     }); 
     //this will re-execute render method
     
  }
  render() {
    console.log('render called...');
    let button = <button className='btn btn-danger' onClick={this.updateMatch}>Cancel Match</button>;
    if(this.state.date === 'canceled')
      button = '';
    return (<tr>
      <td>{this.matchno}</td>
      <td>{this.team1}</td>
      <td>{this.team2}</td>
      <td>{this.state.date}</td>
      <td>{this.state.time}</td>
      <td>{this.venue}</td>
      <td>{button}</td>
    </tr>);
  }
}
//class component
class IPL extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>IPL match schedule</h1>
            <hr />
            <table className='table table-bordered table-striped'>
              <thead>
                <th>No</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Date </th>
                <th>Time</th>
                <th>Venue</th>
                <th>Action</th>
              </thead>
              <tbody>
                {/* use class component Schedule as tag */}
                <Schedule matchno='1' team1='Gujarat Titans' team2='Delhi Capitals' date='17-04-2025' time='07:00PM' venue='Ahmedabad' /> 
                <Schedule matchno='2' team1='Rajasthan Royal' team2='Royal chalanger Banglore' date='18-04-2025' time='06:00PM' venue='Jaipur' /> 
                <Schedule matchno='3' team1='Kings XI Punjab' team2='Mumbai Indians' date='19-04-2025' time='08:00PM' venue='Mumbai' /> 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
root.render(<IPL />);