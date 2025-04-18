import React from "react";
import Schedule from './schedule';

export default class IPL extends React.Component {
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