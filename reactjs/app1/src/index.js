//offline bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//create class component 
class InterestCalculator extends React.Component {
    // steps
    /*
        1 - create state object in constructor 
        2 - declare variables for each and every input
        3 - bind state particular variables with concern input tag
    */
    //create constructor 
    constructor(props)
    {
        super(props); //required calling parent class constructor
        //create state object
        this.state = {
            amount:0,
            rate:0,
            year:0,
            interestType:1,
            result:0
        };

    }
    updateAmount = (e) =>
    {
        console.log('update amount',e.target.value);
        this.setState({
           amount:e.target.value 
        });
    }

    updateRate = (e) =>
    {
        console.log('update rate',e.target.value);
        this.setState({
            rate:e.target.value
        });
    }
    updateYear = (e) => {
        console.log('update year',e.target.value);
        this.setState({
            year:e.target.value
        });
    }
    updateInterestType = (e) => {
        console.log('update interest type',e.target.value);
        this.setState({
            interestType:e.target.value
        });
    }
    calculate = (e) => {
        //alert('input submitted');
        console.log(this.state);
        if(this.state.interestType === '1')
        {
            let temp = (this.state.amount * this.state.rate * this.state.year)  / 100;
            console.log(temp);
            this.setState({
                result:temp
            });
        }
        e.preventDefault(); //it is required to stop refreshing web page
    }
    render() {
        return (<div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h3 className="mb-0">Interest Calculator</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.calculate}>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">Principal Amount ($)</label>
                                    {/* binding state variable amount with input tag */}
                                    <input type="number" className="form-control" id="amount" 
                                    name="amount" placeholder="Enter principal amount" required
                                    value={this.state.amount} onChange={this.updateAmount}  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rate" className="form-label">Annual Interest Rate (%)</label>
                                     {/* binding state variable rate with input tag */}
                                    <input type="number" step="0.01" className="form-control" id="rate" name='rate' placeholder="Enter interest rate" required
                                    value={this.state.rate} onChange={this.updateRate} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="year" className="form-label">Time Period (Years)</label>
                                    {/* binding state variable year with input tag */}
                                    <input type="number" className="form-control" id="year" placeholder="Enter time period" required
                                    value={this.state.year} onChange={this.updateYear} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="interestType" className="form-label">Interest Type</label>
                                     {/* binding state variable year with input tag */}
                                    <select className="form-select" id="interestType" name='interestType' onChange={this.updateInterestType} >
                                        <option value="1">Simple Interest</option>
                                        <option value="2">Compound Interest</option>
                                    </select>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Calculate</button>
                                </div>
                            </form>
                            <div className="mt-4">
                                <h5>Result:</h5>
                                <p className="border p-3 rounded bg-light">Interest: <span id="result">{this.state.result}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InterestCalculator />);