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
      <>
        <div className="expense-date">
          <label>Transaction Date:</label>
          <div>
            <input type="date" value={this.state.date} 
              onChange={this.handleDateChange}></input>
          </div>
        </div>
      </>
    );
  }
}

export default ExpenseDate