import React, { Component } from 'react'

export class ExpenseAmount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       expenseAmount: ''
    }
  }

  handleAmountChange = (e) => {
    this.setState({
      expenseAmount: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <div className="card-body">
          <div className="form-group">
            <label>Expense Amount:</label>
            <input 
              value={this.state.expenseAmount}
              onChange={this.handleAmountChange}
              type="text"
              className="form-control"
              placeholder="Your Expense Amount Goes Here">
            </input>
          </div>
        </div>
      </div>
    )
  }
}

export default ExpenseAmount
