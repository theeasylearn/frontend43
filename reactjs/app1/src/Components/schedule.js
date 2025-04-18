import React from 'react';
//class component 
//use of "export default" before class is required to access class in other file
export default class Schedule extends React.Component {
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