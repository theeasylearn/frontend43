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
    //props is an object it has all properties like matchno, team1, team2 etc 
    //create properties (variables defined inside constructor is called properties)
    //syntax to create property 
    //this.propertyname = value 
    super(); //required before anything
    this.matchno = props.matchno;
    this.team1 = props.team1;
    this.team2 = props.team2;
    this.date = props.date;
    this.time = props.time;
    this.venue = props.venue;
    console.log('constructor called...');
  }
  render() {
    console.log('render called...');
    return (<tr>
      <td>{this.matchno}</td>
      <td>{this.team1}</td>
      <td>{this.team2}</td>
      <td>{this.date}</td>
      <td>{this.time}</td>
      <td>{this.venue}</td>
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