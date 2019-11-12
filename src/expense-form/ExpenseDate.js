import React, { Component } from "react";

export class ExpenseDate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: ''
    }
  }
  
  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="card-body">
          <div className="form-group">
            <label>Transaction Date:</label>
            <input type="date" value={this.state.date} onChange={this.handleDateChange}
            className="form-control"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseDate

